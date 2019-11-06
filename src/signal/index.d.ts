import * as $protobuf from "protobufjs";
/** Namespace signal. */
export namespace signal {

    /** Properties of a SqlStatement. */
    interface ISqlStatement {

        /** SqlStatement statement */
        statement?: (string|null);

        /** SqlStatement parameters */
        parameters?: (signal.SqlStatement.ISqlParameter[]|null);
    }

    /** Represents a SqlStatement. */
    class SqlStatement implements ISqlStatement {

        /**
         * Constructs a new SqlStatement.
         * @param [properties] Properties to set
         */
        constructor(properties?: signal.ISqlStatement);

        /** SqlStatement statement. */
        public statement: string;

        /** SqlStatement parameters. */
        public parameters: signal.SqlStatement.ISqlParameter[];

        /**
         * Creates a new SqlStatement instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SqlStatement instance
         */
        public static create(properties?: signal.ISqlStatement): signal.SqlStatement;

        /**
         * Encodes the specified SqlStatement message. Does not implicitly {@link signal.SqlStatement.verify|verify} messages.
         * @param message SqlStatement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: signal.ISqlStatement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SqlStatement message, length delimited. Does not implicitly {@link signal.SqlStatement.verify|verify} messages.
         * @param message SqlStatement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: signal.ISqlStatement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SqlStatement message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SqlStatement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): signal.SqlStatement;

        /**
         * Decodes a SqlStatement message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SqlStatement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): signal.SqlStatement;

        /**
         * Verifies a SqlStatement message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SqlStatement message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SqlStatement
         */
        public static fromObject(object: { [k: string]: any }): signal.SqlStatement;

        /**
         * Creates a plain object from a SqlStatement message. Also converts values to other types if specified.
         * @param message SqlStatement
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: signal.SqlStatement, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SqlStatement to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace SqlStatement {

        /** Properties of a SqlParameter. */
        interface ISqlParameter {

            /** SqlParameter stringParamter */
            stringParamter?: (string|null);

            /** SqlParameter integerParameter */
            integerParameter?: (number|Long|null);

            /** SqlParameter doubleParameter */
            doubleParameter?: (number|null);

            /** SqlParameter blobParameter */
            blobParameter?: (Uint8Array|null);

            /** SqlParameter nullparameter */
            nullparameter?: (boolean|null);
        }

        /** Represents a SqlParameter. */
        class SqlParameter implements ISqlParameter {

            /**
             * Constructs a new SqlParameter.
             * @param [properties] Properties to set
             */
            constructor(properties?: signal.SqlStatement.ISqlParameter);

            /** SqlParameter stringParamter. */
            public stringParamter: string;

            /** SqlParameter integerParameter. */
            public integerParameter: (number|Long);

            /** SqlParameter doubleParameter. */
            public doubleParameter: number;

            /** SqlParameter blobParameter. */
            public blobParameter: Uint8Array;

            /** SqlParameter nullparameter. */
            public nullparameter: boolean;

            /**
             * Creates a new SqlParameter instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SqlParameter instance
             */
            public static create(properties?: signal.SqlStatement.ISqlParameter): signal.SqlStatement.SqlParameter;

            /**
             * Encodes the specified SqlParameter message. Does not implicitly {@link signal.SqlStatement.SqlParameter.verify|verify} messages.
             * @param message SqlParameter message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: signal.SqlStatement.ISqlParameter, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SqlParameter message, length delimited. Does not implicitly {@link signal.SqlStatement.SqlParameter.verify|verify} messages.
             * @param message SqlParameter message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: signal.SqlStatement.ISqlParameter, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SqlParameter message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SqlParameter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): signal.SqlStatement.SqlParameter;

            /**
             * Decodes a SqlParameter message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SqlParameter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): signal.SqlStatement.SqlParameter;

            /**
             * Verifies a SqlParameter message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SqlParameter message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SqlParameter
             */
            public static fromObject(object: { [k: string]: any }): signal.SqlStatement.SqlParameter;

            /**
             * Creates a plain object from a SqlParameter message. Also converts values to other types if specified.
             * @param message SqlParameter
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: signal.SqlStatement.SqlParameter, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SqlParameter to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a SharedPreference. */
    interface ISharedPreference {

        /** SharedPreference file */
        file?: (string|null);

        /** SharedPreference key */
        key?: (string|null);

        /** SharedPreference value */
        value?: (string|null);
    }

    /** Represents a SharedPreference. */
    class SharedPreference implements ISharedPreference {

        /**
         * Constructs a new SharedPreference.
         * @param [properties] Properties to set
         */
        constructor(properties?: signal.ISharedPreference);

        /** SharedPreference file. */
        public file: string;

        /** SharedPreference key. */
        public key: string;

        /** SharedPreference value. */
        public value: string;

        /**
         * Creates a new SharedPreference instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SharedPreference instance
         */
        public static create(properties?: signal.ISharedPreference): signal.SharedPreference;

        /**
         * Encodes the specified SharedPreference message. Does not implicitly {@link signal.SharedPreference.verify|verify} messages.
         * @param message SharedPreference message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: signal.ISharedPreference, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SharedPreference message, length delimited. Does not implicitly {@link signal.SharedPreference.verify|verify} messages.
         * @param message SharedPreference message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: signal.ISharedPreference, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SharedPreference message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SharedPreference
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): signal.SharedPreference;

        /**
         * Decodes a SharedPreference message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SharedPreference
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): signal.SharedPreference;

        /**
         * Verifies a SharedPreference message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SharedPreference message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SharedPreference
         */
        public static fromObject(object: { [k: string]: any }): signal.SharedPreference;

        /**
         * Creates a plain object from a SharedPreference message. Also converts values to other types if specified.
         * @param message SharedPreference
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: signal.SharedPreference, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SharedPreference to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Attachment. */
    interface IAttachment {

        /** Attachment rowId */
        rowId?: (number|Long|null);

        /** Attachment attachmentId */
        attachmentId?: (number|Long|null);

        /** Attachment length */
        length?: (number|null);
    }

    /** Represents an Attachment. */
    class Attachment implements IAttachment {

        /**
         * Constructs a new Attachment.
         * @param [properties] Properties to set
         */
        constructor(properties?: signal.IAttachment);

        /** Attachment rowId. */
        public rowId: (number|Long);

        /** Attachment attachmentId. */
        public attachmentId: (number|Long);

        /** Attachment length. */
        public length: number;

        /**
         * Creates a new Attachment instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Attachment instance
         */
        public static create(properties?: signal.IAttachment): signal.Attachment;

        /**
         * Encodes the specified Attachment message. Does not implicitly {@link signal.Attachment.verify|verify} messages.
         * @param message Attachment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: signal.IAttachment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Attachment message, length delimited. Does not implicitly {@link signal.Attachment.verify|verify} messages.
         * @param message Attachment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: signal.IAttachment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Attachment message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Attachment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): signal.Attachment;

        /**
         * Decodes an Attachment message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Attachment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): signal.Attachment;

        /**
         * Verifies an Attachment message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Attachment message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Attachment
         */
        public static fromObject(object: { [k: string]: any }): signal.Attachment;

        /**
         * Creates a plain object from an Attachment message. Also converts values to other types if specified.
         * @param message Attachment
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: signal.Attachment, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Attachment to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Avatar. */
    interface IAvatar {

        /** Avatar name */
        name?: (string|null);

        /** Avatar length */
        length?: (number|null);
    }

    /** Represents an Avatar. */
    class Avatar implements IAvatar {

        /**
         * Constructs a new Avatar.
         * @param [properties] Properties to set
         */
        constructor(properties?: signal.IAvatar);

        /** Avatar name. */
        public name: string;

        /** Avatar length. */
        public length: number;

        /**
         * Creates a new Avatar instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Avatar instance
         */
        public static create(properties?: signal.IAvatar): signal.Avatar;

        /**
         * Encodes the specified Avatar message. Does not implicitly {@link signal.Avatar.verify|verify} messages.
         * @param message Avatar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: signal.IAvatar, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Avatar message, length delimited. Does not implicitly {@link signal.Avatar.verify|verify} messages.
         * @param message Avatar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: signal.IAvatar, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Avatar message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Avatar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): signal.Avatar;

        /**
         * Decodes an Avatar message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Avatar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): signal.Avatar;

        /**
         * Verifies an Avatar message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Avatar message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Avatar
         */
        public static fromObject(object: { [k: string]: any }): signal.Avatar;

        /**
         * Creates a plain object from an Avatar message. Also converts values to other types if specified.
         * @param message Avatar
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: signal.Avatar, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Avatar to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DatabaseVersion. */
    interface IDatabaseVersion {

        /** DatabaseVersion version */
        version?: (number|null);
    }

    /** Represents a DatabaseVersion. */
    class DatabaseVersion implements IDatabaseVersion {

        /**
         * Constructs a new DatabaseVersion.
         * @param [properties] Properties to set
         */
        constructor(properties?: signal.IDatabaseVersion);

        /** DatabaseVersion version. */
        public version: number;

        /**
         * Creates a new DatabaseVersion instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DatabaseVersion instance
         */
        public static create(properties?: signal.IDatabaseVersion): signal.DatabaseVersion;

        /**
         * Encodes the specified DatabaseVersion message. Does not implicitly {@link signal.DatabaseVersion.verify|verify} messages.
         * @param message DatabaseVersion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: signal.IDatabaseVersion, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DatabaseVersion message, length delimited. Does not implicitly {@link signal.DatabaseVersion.verify|verify} messages.
         * @param message DatabaseVersion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: signal.IDatabaseVersion, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DatabaseVersion message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DatabaseVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): signal.DatabaseVersion;

        /**
         * Decodes a DatabaseVersion message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DatabaseVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): signal.DatabaseVersion;

        /**
         * Verifies a DatabaseVersion message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DatabaseVersion message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DatabaseVersion
         */
        public static fromObject(object: { [k: string]: any }): signal.DatabaseVersion;

        /**
         * Creates a plain object from a DatabaseVersion message. Also converts values to other types if specified.
         * @param message DatabaseVersion
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: signal.DatabaseVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DatabaseVersion to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Header. */
    interface IHeader {

        /** Header iv */
        iv?: (Uint8Array|null);

        /** Header salt */
        salt?: (Uint8Array|null);
    }

    /** Represents a Header. */
    class Header implements IHeader {

        /**
         * Constructs a new Header.
         * @param [properties] Properties to set
         */
        constructor(properties?: signal.IHeader);

        /** Header iv. */
        public iv: Uint8Array;

        /** Header salt. */
        public salt: Uint8Array;

        /**
         * Creates a new Header instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Header instance
         */
        public static create(properties?: signal.IHeader): signal.Header;

        /**
         * Encodes the specified Header message. Does not implicitly {@link signal.Header.verify|verify} messages.
         * @param message Header message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: signal.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Header message, length delimited. Does not implicitly {@link signal.Header.verify|verify} messages.
         * @param message Header message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: signal.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Header message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): signal.Header;

        /**
         * Decodes a Header message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): signal.Header;

        /**
         * Verifies a Header message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Header message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Header
         */
        public static fromObject(object: { [k: string]: any }): signal.Header;

        /**
         * Creates a plain object from a Header message. Also converts values to other types if specified.
         * @param message Header
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: signal.Header, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Header to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BackupFrame. */
    interface IBackupFrame {

        /** BackupFrame header */
        header?: (signal.IHeader|null);

        /** BackupFrame statement */
        statement?: (signal.ISqlStatement|null);

        /** BackupFrame preference */
        preference?: (signal.ISharedPreference|null);

        /** BackupFrame attachment */
        attachment?: (signal.IAttachment|null);

        /** BackupFrame version */
        version?: (signal.IDatabaseVersion|null);

        /** BackupFrame end */
        end?: (boolean|null);

        /** BackupFrame avatar */
        avatar?: (signal.IAvatar|null);
    }

    /** Represents a BackupFrame. */
    class BackupFrame implements IBackupFrame {

        /**
         * Constructs a new BackupFrame.
         * @param [properties] Properties to set
         */
        constructor(properties?: signal.IBackupFrame);

        /** BackupFrame header. */
        public header?: (signal.IHeader|null);

        /** BackupFrame statement. */
        public statement?: (signal.ISqlStatement|null);

        /** BackupFrame preference. */
        public preference?: (signal.ISharedPreference|null);

        /** BackupFrame attachment. */
        public attachment?: (signal.IAttachment|null);

        /** BackupFrame version. */
        public version?: (signal.IDatabaseVersion|null);

        /** BackupFrame end. */
        public end: boolean;

        /** BackupFrame avatar. */
        public avatar?: (signal.IAvatar|null);

        /**
         * Creates a new BackupFrame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BackupFrame instance
         */
        public static create(properties?: signal.IBackupFrame): signal.BackupFrame;

        /**
         * Encodes the specified BackupFrame message. Does not implicitly {@link signal.BackupFrame.verify|verify} messages.
         * @param message BackupFrame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: signal.IBackupFrame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BackupFrame message, length delimited. Does not implicitly {@link signal.BackupFrame.verify|verify} messages.
         * @param message BackupFrame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: signal.IBackupFrame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BackupFrame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BackupFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): signal.BackupFrame;

        /**
         * Decodes a BackupFrame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BackupFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): signal.BackupFrame;

        /**
         * Verifies a BackupFrame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BackupFrame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BackupFrame
         */
        public static fromObject(object: { [k: string]: any }): signal.BackupFrame;

        /**
         * Creates a plain object from a BackupFrame message. Also converts values to other types if specified.
         * @param message BackupFrame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: signal.BackupFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BackupFrame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
