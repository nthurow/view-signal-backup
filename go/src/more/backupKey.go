package main

import (
  "fmt"
  "crypto"
  _ "crypto/sha256"
  _ "crypto/sha512"
  "encoding/hex"
  "strings"
  "io"
  "os"
  "golang.org/x/crypto/hkdf"
)

func backupKey(password string, salt []byte) []byte {
  digest := crypto.SHA512.New()
  input := []byte(strings.Replace(strings.TrimSpace(password), " ", "", -1))
  hash := input

  if salt != nil {
    digest.Write(salt)
  }

  for i := 0; i < 250000; i++ {
    digest.Write(hash)
    digest.Write(input)
    hash = digest.Sum(nil)
    digest.Reset()
  }

  return hash[:32]
}

func deriveSecrets(input, info []byte) []byte {
  sha := crypto.SHA256.New
  salt := make([]byte, sha().Size())
  okm := make([]byte, 64)

  hkdf := hkdf.New(sha, input, salt, info)
  _, err := io.ReadFull(hkdf, okm)
  if err != nil {
    fmt.Fprintln(os.Stderr, "failed to generate hashes:", err.Error())
  }

  return okm
}

func main() {
  salt := []byte{0, 1, 2, 3};
  key := backupKey("password", salt)
  derived := deriveSecrets(key, []byte("Backup Export"))
  fmt.Println(hex.EncodeToString(derived))
}
