package main

import (
  "fmt"
  "crypto"
  _ "crypto/sha512"
  "encoding/hex"
  "strings"
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

func main() {
  salt := []byte{0, 1, 2, 3};
  key := backupKey("password", salt)
  fmt.Println(hex.EncodeToString(salt))
  fmt.Println(hex.EncodeToString(key))
}
