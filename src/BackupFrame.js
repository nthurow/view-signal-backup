/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
'use strict';

var $protobuf = require('protobufjs/minimal');

// Common aliases
var $Reader = $protobuf.Reader,
  $Writer = $protobuf.Writer,
  $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots['default'] || ($protobuf.roots['default'] = {});

$root.signal = (function() {
  /**
   * Namespace signal.
   * @exports signal
   * @namespace
   */
  var signal = {};

  signal.SqlStatement = (function() {
    /**
     * Properties of a SqlStatement.
     * @memberof signal
     * @interface ISqlStatement
     * @property {string|null} [statement] SqlStatement statement
     * @property {Array.<signal.SqlStatement.ISqlParameter>|null} [parameters] SqlStatement parameters
     */

    /**
     * Constructs a new SqlStatement.
     * @memberof signal
     * @classdesc Represents a SqlStatement.
     * @implements ISqlStatement
     * @constructor
     * @param {signal.ISqlStatement=} [properties] Properties to set
     */
    function SqlStatement(properties) {
      this.parameters = [];
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * SqlStatement statement.
     * @member {string} statement
     * @memberof signal.SqlStatement
     * @instance
     */
    SqlStatement.prototype.statement = '';

    /**
     * SqlStatement parameters.
     * @member {Array.<signal.SqlStatement.ISqlParameter>} parameters
     * @memberof signal.SqlStatement
     * @instance
     */
    SqlStatement.prototype.parameters = $util.emptyArray;

    /**
     * Creates a new SqlStatement instance using the specified properties.
     * @function create
     * @memberof signal.SqlStatement
     * @static
     * @param {signal.ISqlStatement=} [properties] Properties to set
     * @returns {signal.SqlStatement} SqlStatement instance
     */
    SqlStatement.create = function create(properties) {
      return new SqlStatement(properties);
    };

    /**
     * Encodes the specified SqlStatement message. Does not implicitly {@link signal.SqlStatement.verify|verify} messages.
     * @function encode
     * @memberof signal.SqlStatement
     * @static
     * @param {signal.ISqlStatement} message SqlStatement message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SqlStatement.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.statement != null && message.hasOwnProperty('statement'))
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.statement);
      if (message.parameters != null && message.parameters.length)
        for (var i = 0; i < message.parameters.length; ++i)
          $root.signal.SqlStatement.SqlParameter.encode(
            message.parameters[i],
            writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
          ).ldelim();
      return writer;
    };

    /**
     * Encodes the specified SqlStatement message, length delimited. Does not implicitly {@link signal.SqlStatement.verify|verify} messages.
     * @function encodeDelimited
     * @memberof signal.SqlStatement
     * @static
     * @param {signal.ISqlStatement} message SqlStatement message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SqlStatement.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SqlStatement message from the specified reader or buffer.
     * @function decode
     * @memberof signal.SqlStatement
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {signal.SqlStatement} SqlStatement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SqlStatement.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.signal.SqlStatement();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.statement = reader.string();
            break;
          case 2:
            if (!(message.parameters && message.parameters.length)) message.parameters = [];
            message.parameters.push($root.signal.SqlStatement.SqlParameter.decode(reader, reader.uint32()));
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a SqlStatement message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof signal.SqlStatement
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {signal.SqlStatement} SqlStatement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SqlStatement.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SqlStatement message.
     * @function verify
     * @memberof signal.SqlStatement
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SqlStatement.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected';
      if (message.statement != null && message.hasOwnProperty('statement'))
        if (!$util.isString(message.statement)) return 'statement: string expected';
      if (message.parameters != null && message.hasOwnProperty('parameters')) {
        if (!Array.isArray(message.parameters)) return 'parameters: array expected';
        for (var i = 0; i < message.parameters.length; ++i) {
          var error = $root.signal.SqlStatement.SqlParameter.verify(message.parameters[i]);
          if (error) return 'parameters.' + error;
        }
      }
      return null;
    };

    /**
     * Creates a SqlStatement message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof signal.SqlStatement
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {signal.SqlStatement} SqlStatement
     */
    SqlStatement.fromObject = function fromObject(object) {
      if (object instanceof $root.signal.SqlStatement) return object;
      var message = new $root.signal.SqlStatement();
      if (object.statement != null) message.statement = String(object.statement);
      if (object.parameters) {
        if (!Array.isArray(object.parameters)) throw TypeError('.signal.SqlStatement.parameters: array expected');
        message.parameters = [];
        for (var i = 0; i < object.parameters.length; ++i) {
          if (typeof object.parameters[i] !== 'object')
            throw TypeError('.signal.SqlStatement.parameters: object expected');
          message.parameters[i] = $root.signal.SqlStatement.SqlParameter.fromObject(object.parameters[i]);
        }
      }
      return message;
    };

    /**
     * Creates a plain object from a SqlStatement message. Also converts values to other types if specified.
     * @function toObject
     * @memberof signal.SqlStatement
     * @static
     * @param {signal.SqlStatement} message SqlStatement
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SqlStatement.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.arrays || options.defaults) object.parameters = [];
      if (options.defaults) object.statement = '';
      if (message.statement != null && message.hasOwnProperty('statement')) object.statement = message.statement;
      if (message.parameters && message.parameters.length) {
        object.parameters = [];
        for (var j = 0; j < message.parameters.length; ++j)
          object.parameters[j] = $root.signal.SqlStatement.SqlParameter.toObject(message.parameters[j], options);
      }
      return object;
    };

    /**
     * Converts this SqlStatement to JSON.
     * @function toJSON
     * @memberof signal.SqlStatement
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SqlStatement.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    SqlStatement.SqlParameter = (function() {
      /**
       * Properties of a SqlParameter.
       * @memberof signal.SqlStatement
       * @interface ISqlParameter
       * @property {string|null} [stringParamter] SqlParameter stringParamter
       * @property {number|Long|null} [integerParameter] SqlParameter integerParameter
       * @property {number|null} [doubleParameter] SqlParameter doubleParameter
       * @property {Uint8Array|null} [blobParameter] SqlParameter blobParameter
       * @property {boolean|null} [nullparameter] SqlParameter nullparameter
       */

      /**
       * Constructs a new SqlParameter.
       * @memberof signal.SqlStatement
       * @classdesc Represents a SqlParameter.
       * @implements ISqlParameter
       * @constructor
       * @param {signal.SqlStatement.ISqlParameter=} [properties] Properties to set
       */
      function SqlParameter(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * SqlParameter stringParamter.
       * @member {string} stringParamter
       * @memberof signal.SqlStatement.SqlParameter
       * @instance
       */
      SqlParameter.prototype.stringParamter = '';

      /**
       * SqlParameter integerParameter.
       * @member {number|Long} integerParameter
       * @memberof signal.SqlStatement.SqlParameter
       * @instance
       */
      SqlParameter.prototype.integerParameter = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

      /**
       * SqlParameter doubleParameter.
       * @member {number} doubleParameter
       * @memberof signal.SqlStatement.SqlParameter
       * @instance
       */
      SqlParameter.prototype.doubleParameter = 0;

      /**
       * SqlParameter blobParameter.
       * @member {Uint8Array} blobParameter
       * @memberof signal.SqlStatement.SqlParameter
       * @instance
       */
      SqlParameter.prototype.blobParameter = $util.newBuffer([]);

      /**
       * SqlParameter nullparameter.
       * @member {boolean} nullparameter
       * @memberof signal.SqlStatement.SqlParameter
       * @instance
       */
      SqlParameter.prototype.nullparameter = false;

      /**
       * Creates a new SqlParameter instance using the specified properties.
       * @function create
       * @memberof signal.SqlStatement.SqlParameter
       * @static
       * @param {signal.SqlStatement.ISqlParameter=} [properties] Properties to set
       * @returns {signal.SqlStatement.SqlParameter} SqlParameter instance
       */
      SqlParameter.create = function create(properties) {
        return new SqlParameter(properties);
      };

      /**
       * Encodes the specified SqlParameter message. Does not implicitly {@link signal.SqlStatement.SqlParameter.verify|verify} messages.
       * @function encode
       * @memberof signal.SqlStatement.SqlParameter
       * @static
       * @param {signal.SqlStatement.ISqlParameter} message SqlParameter message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      SqlParameter.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.stringParamter != null && message.hasOwnProperty('stringParamter'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.stringParamter);
        if (message.integerParameter != null && message.hasOwnProperty('integerParameter'))
          writer.uint32(/* id 2, wireType 0 =*/ 16).uint64(message.integerParameter);
        if (message.doubleParameter != null && message.hasOwnProperty('doubleParameter'))
          writer.uint32(/* id 3, wireType 1 =*/ 25).double(message.doubleParameter);
        if (message.blobParameter != null && message.hasOwnProperty('blobParameter'))
          writer.uint32(/* id 4, wireType 2 =*/ 34).bytes(message.blobParameter);
        if (message.nullparameter != null && message.hasOwnProperty('nullparameter'))
          writer.uint32(/* id 5, wireType 0 =*/ 40).bool(message.nullparameter);
        return writer;
      };

      /**
       * Encodes the specified SqlParameter message, length delimited. Does not implicitly {@link signal.SqlStatement.SqlParameter.verify|verify} messages.
       * @function encodeDelimited
       * @memberof signal.SqlStatement.SqlParameter
       * @static
       * @param {signal.SqlStatement.ISqlParameter} message SqlParameter message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      SqlParameter.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a SqlParameter message from the specified reader or buffer.
       * @function decode
       * @memberof signal.SqlStatement.SqlParameter
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {signal.SqlStatement.SqlParameter} SqlParameter
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      SqlParameter.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.signal.SqlStatement.SqlParameter();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.stringParamter = reader.string();
              break;
            case 2:
              message.integerParameter = reader.uint64();
              break;
            case 3:
              message.doubleParameter = reader.double();
              break;
            case 4:
              message.blobParameter = reader.bytes();
              break;
            case 5:
              message.nullparameter = reader.bool();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a SqlParameter message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof signal.SqlStatement.SqlParameter
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {signal.SqlStatement.SqlParameter} SqlParameter
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      SqlParameter.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a SqlParameter message.
       * @function verify
       * @memberof signal.SqlStatement.SqlParameter
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      SqlParameter.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.stringParamter != null && message.hasOwnProperty('stringParamter'))
          if (!$util.isString(message.stringParamter)) return 'stringParamter: string expected';
        if (message.integerParameter != null && message.hasOwnProperty('integerParameter'))
          if (
            !$util.isInteger(message.integerParameter) &&
            !(
              message.integerParameter &&
              $util.isInteger(message.integerParameter.low) &&
              $util.isInteger(message.integerParameter.high)
            )
          )
            return 'integerParameter: integer|Long expected';
        if (message.doubleParameter != null && message.hasOwnProperty('doubleParameter'))
          if (typeof message.doubleParameter !== 'number') return 'doubleParameter: number expected';
        if (message.blobParameter != null && message.hasOwnProperty('blobParameter'))
          if (
            !(
              (message.blobParameter && typeof message.blobParameter.length === 'number') ||
              $util.isString(message.blobParameter)
            )
          )
            return 'blobParameter: buffer expected';
        if (message.nullparameter != null && message.hasOwnProperty('nullparameter'))
          if (typeof message.nullparameter !== 'boolean') return 'nullparameter: boolean expected';
        return null;
      };

      /**
       * Creates a SqlParameter message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof signal.SqlStatement.SqlParameter
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {signal.SqlStatement.SqlParameter} SqlParameter
       */
      SqlParameter.fromObject = function fromObject(object) {
        if (object instanceof $root.signal.SqlStatement.SqlParameter) return object;
        var message = new $root.signal.SqlStatement.SqlParameter();
        if (object.stringParamter != null) message.stringParamter = String(object.stringParamter);
        if (object.integerParameter != null)
          if ($util.Long) (message.integerParameter = $util.Long.fromValue(object.integerParameter)).unsigned = true;
          else if (typeof object.integerParameter === 'string')
            message.integerParameter = parseInt(object.integerParameter, 10);
          else if (typeof object.integerParameter === 'number') message.integerParameter = object.integerParameter;
          else if (typeof object.integerParameter === 'object')
            message.integerParameter = new $util.LongBits(
              object.integerParameter.low >>> 0,
              object.integerParameter.high >>> 0
            ).toNumber(true);
        if (object.doubleParameter != null) message.doubleParameter = Number(object.doubleParameter);
        if (object.blobParameter != null)
          if (typeof object.blobParameter === 'string')
            $util.base64.decode(
              object.blobParameter,
              (message.blobParameter = $util.newBuffer($util.base64.length(object.blobParameter))),
              0
            );
          else if (object.blobParameter.length) message.blobParameter = object.blobParameter;
        if (object.nullparameter != null) message.nullparameter = Boolean(object.nullparameter);
        return message;
      };

      /**
       * Creates a plain object from a SqlParameter message. Also converts values to other types if specified.
       * @function toObject
       * @memberof signal.SqlStatement.SqlParameter
       * @static
       * @param {signal.SqlStatement.SqlParameter} message SqlParameter
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      SqlParameter.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.stringParamter = '';
          if ($util.Long) {
            var long = new $util.Long(0, 0, true);
            object.integerParameter =
              options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
          } else object.integerParameter = options.longs === String ? '0' : 0;
          object.doubleParameter = 0;
          if (options.bytes === String) object.blobParameter = '';
          else {
            object.blobParameter = [];
            if (options.bytes !== Array) object.blobParameter = $util.newBuffer(object.blobParameter);
          }
          object.nullparameter = false;
        }
        if (message.stringParamter != null && message.hasOwnProperty('stringParamter'))
          object.stringParamter = message.stringParamter;
        if (message.integerParameter != null && message.hasOwnProperty('integerParameter'))
          if (typeof message.integerParameter === 'number')
            object.integerParameter =
              options.longs === String ? String(message.integerParameter) : message.integerParameter;
          else
            object.integerParameter =
              options.longs === String
                ? $util.Long.prototype.toString.call(message.integerParameter)
                : options.longs === Number
                ? new $util.LongBits(message.integerParameter.low >>> 0, message.integerParameter.high >>> 0).toNumber(
                    true
                  )
                : message.integerParameter;
        if (message.doubleParameter != null && message.hasOwnProperty('doubleParameter'))
          object.doubleParameter =
            options.json && !isFinite(message.doubleParameter)
              ? String(message.doubleParameter)
              : message.doubleParameter;
        if (message.blobParameter != null && message.hasOwnProperty('blobParameter'))
          object.blobParameter =
            options.bytes === String
              ? $util.base64.encode(message.blobParameter, 0, message.blobParameter.length)
              : options.bytes === Array
              ? Array.prototype.slice.call(message.blobParameter)
              : message.blobParameter;
        if (message.nullparameter != null && message.hasOwnProperty('nullparameter'))
          object.nullparameter = message.nullparameter;
        return object;
      };

      /**
       * Converts this SqlParameter to JSON.
       * @function toJSON
       * @memberof signal.SqlStatement.SqlParameter
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      SqlParameter.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return SqlParameter;
    })();

    return SqlStatement;
  })();

  signal.SharedPreference = (function() {
    /**
     * Properties of a SharedPreference.
     * @memberof signal
     * @interface ISharedPreference
     * @property {string|null} [file] SharedPreference file
     * @property {string|null} [key] SharedPreference key
     * @property {string|null} [value] SharedPreference value
     */

    /**
     * Constructs a new SharedPreference.
     * @memberof signal
     * @classdesc Represents a SharedPreference.
     * @implements ISharedPreference
     * @constructor
     * @param {signal.ISharedPreference=} [properties] Properties to set
     */
    function SharedPreference(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * SharedPreference file.
     * @member {string} file
     * @memberof signal.SharedPreference
     * @instance
     */
    SharedPreference.prototype.file = '';

    /**
     * SharedPreference key.
     * @member {string} key
     * @memberof signal.SharedPreference
     * @instance
     */
    SharedPreference.prototype.key = '';

    /**
     * SharedPreference value.
     * @member {string} value
     * @memberof signal.SharedPreference
     * @instance
     */
    SharedPreference.prototype.value = '';

    /**
     * Creates a new SharedPreference instance using the specified properties.
     * @function create
     * @memberof signal.SharedPreference
     * @static
     * @param {signal.ISharedPreference=} [properties] Properties to set
     * @returns {signal.SharedPreference} SharedPreference instance
     */
    SharedPreference.create = function create(properties) {
      return new SharedPreference(properties);
    };

    /**
     * Encodes the specified SharedPreference message. Does not implicitly {@link signal.SharedPreference.verify|verify} messages.
     * @function encode
     * @memberof signal.SharedPreference
     * @static
     * @param {signal.ISharedPreference} message SharedPreference message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SharedPreference.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.file != null && message.hasOwnProperty('file'))
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.file);
      if (message.key != null && message.hasOwnProperty('key'))
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.key);
      if (message.value != null && message.hasOwnProperty('value'))
        writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.value);
      return writer;
    };

    /**
     * Encodes the specified SharedPreference message, length delimited. Does not implicitly {@link signal.SharedPreference.verify|verify} messages.
     * @function encodeDelimited
     * @memberof signal.SharedPreference
     * @static
     * @param {signal.ISharedPreference} message SharedPreference message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SharedPreference.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SharedPreference message from the specified reader or buffer.
     * @function decode
     * @memberof signal.SharedPreference
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {signal.SharedPreference} SharedPreference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SharedPreference.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.signal.SharedPreference();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.file = reader.string();
            break;
          case 2:
            message.key = reader.string();
            break;
          case 3:
            message.value = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a SharedPreference message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof signal.SharedPreference
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {signal.SharedPreference} SharedPreference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SharedPreference.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SharedPreference message.
     * @function verify
     * @memberof signal.SharedPreference
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SharedPreference.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected';
      if (message.file != null && message.hasOwnProperty('file'))
        if (!$util.isString(message.file)) return 'file: string expected';
      if (message.key != null && message.hasOwnProperty('key'))
        if (!$util.isString(message.key)) return 'key: string expected';
      if (message.value != null && message.hasOwnProperty('value'))
        if (!$util.isString(message.value)) return 'value: string expected';
      return null;
    };

    /**
     * Creates a SharedPreference message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof signal.SharedPreference
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {signal.SharedPreference} SharedPreference
     */
    SharedPreference.fromObject = function fromObject(object) {
      if (object instanceof $root.signal.SharedPreference) return object;
      var message = new $root.signal.SharedPreference();
      if (object.file != null) message.file = String(object.file);
      if (object.key != null) message.key = String(object.key);
      if (object.value != null) message.value = String(object.value);
      return message;
    };

    /**
     * Creates a plain object from a SharedPreference message. Also converts values to other types if specified.
     * @function toObject
     * @memberof signal.SharedPreference
     * @static
     * @param {signal.SharedPreference} message SharedPreference
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SharedPreference.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.file = '';
        object.key = '';
        object.value = '';
      }
      if (message.file != null && message.hasOwnProperty('file')) object.file = message.file;
      if (message.key != null && message.hasOwnProperty('key')) object.key = message.key;
      if (message.value != null && message.hasOwnProperty('value')) object.value = message.value;
      return object;
    };

    /**
     * Converts this SharedPreference to JSON.
     * @function toJSON
     * @memberof signal.SharedPreference
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SharedPreference.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SharedPreference;
  })();

  signal.Attachment = (function() {
    /**
     * Properties of an Attachment.
     * @memberof signal
     * @interface IAttachment
     * @property {number|Long|null} [rowId] Attachment rowId
     * @property {number|Long|null} [attachmentId] Attachment attachmentId
     * @property {number|null} [length] Attachment length
     */

    /**
     * Constructs a new Attachment.
     * @memberof signal
     * @classdesc Represents an Attachment.
     * @implements IAttachment
     * @constructor
     * @param {signal.IAttachment=} [properties] Properties to set
     */
    function Attachment(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * Attachment rowId.
     * @member {number|Long} rowId
     * @memberof signal.Attachment
     * @instance
     */
    Attachment.prototype.rowId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * Attachment attachmentId.
     * @member {number|Long} attachmentId
     * @memberof signal.Attachment
     * @instance
     */
    Attachment.prototype.attachmentId = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * Attachment length.
     * @member {number} length
     * @memberof signal.Attachment
     * @instance
     */
    Attachment.prototype.length = 0;

    /**
     * Creates a new Attachment instance using the specified properties.
     * @function create
     * @memberof signal.Attachment
     * @static
     * @param {signal.IAttachment=} [properties] Properties to set
     * @returns {signal.Attachment} Attachment instance
     */
    Attachment.create = function create(properties) {
      return new Attachment(properties);
    };

    /**
     * Encodes the specified Attachment message. Does not implicitly {@link signal.Attachment.verify|verify} messages.
     * @function encode
     * @memberof signal.Attachment
     * @static
     * @param {signal.IAttachment} message Attachment message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Attachment.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.rowId != null && message.hasOwnProperty('rowId'))
        writer.uint32(/* id 1, wireType 0 =*/ 8).uint64(message.rowId);
      if (message.attachmentId != null && message.hasOwnProperty('attachmentId'))
        writer.uint32(/* id 2, wireType 0 =*/ 16).uint64(message.attachmentId);
      if (message.length != null && message.hasOwnProperty('length'))
        writer.uint32(/* id 3, wireType 0 =*/ 24).uint32(message.length);
      return writer;
    };

    /**
     * Encodes the specified Attachment message, length delimited. Does not implicitly {@link signal.Attachment.verify|verify} messages.
     * @function encodeDelimited
     * @memberof signal.Attachment
     * @static
     * @param {signal.IAttachment} message Attachment message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Attachment.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Attachment message from the specified reader or buffer.
     * @function decode
     * @memberof signal.Attachment
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {signal.Attachment} Attachment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Attachment.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.signal.Attachment();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.rowId = reader.uint64();
            break;
          case 2:
            message.attachmentId = reader.uint64();
            break;
          case 3:
            message.length = reader.uint32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an Attachment message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof signal.Attachment
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {signal.Attachment} Attachment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Attachment.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Attachment message.
     * @function verify
     * @memberof signal.Attachment
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Attachment.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected';
      if (message.rowId != null && message.hasOwnProperty('rowId'))
        if (
          !$util.isInteger(message.rowId) &&
          !(message.rowId && $util.isInteger(message.rowId.low) && $util.isInteger(message.rowId.high))
        )
          return 'rowId: integer|Long expected';
      if (message.attachmentId != null && message.hasOwnProperty('attachmentId'))
        if (
          !$util.isInteger(message.attachmentId) &&
          !(
            message.attachmentId &&
            $util.isInteger(message.attachmentId.low) &&
            $util.isInteger(message.attachmentId.high)
          )
        )
          return 'attachmentId: integer|Long expected';
      if (message.length != null && message.hasOwnProperty('length'))
        if (!$util.isInteger(message.length)) return 'length: integer expected';
      return null;
    };

    /**
     * Creates an Attachment message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof signal.Attachment
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {signal.Attachment} Attachment
     */
    Attachment.fromObject = function fromObject(object) {
      if (object instanceof $root.signal.Attachment) return object;
      var message = new $root.signal.Attachment();
      if (object.rowId != null)
        if ($util.Long) (message.rowId = $util.Long.fromValue(object.rowId)).unsigned = true;
        else if (typeof object.rowId === 'string') message.rowId = parseInt(object.rowId, 10);
        else if (typeof object.rowId === 'number') message.rowId = object.rowId;
        else if (typeof object.rowId === 'object')
          message.rowId = new $util.LongBits(object.rowId.low >>> 0, object.rowId.high >>> 0).toNumber(true);
      if (object.attachmentId != null)
        if ($util.Long) (message.attachmentId = $util.Long.fromValue(object.attachmentId)).unsigned = true;
        else if (typeof object.attachmentId === 'string') message.attachmentId = parseInt(object.attachmentId, 10);
        else if (typeof object.attachmentId === 'number') message.attachmentId = object.attachmentId;
        else if (typeof object.attachmentId === 'object')
          message.attachmentId = new $util.LongBits(
            object.attachmentId.low >>> 0,
            object.attachmentId.high >>> 0
          ).toNumber(true);
      if (object.length != null) message.length = object.length >>> 0;
      return message;
    };

    /**
     * Creates a plain object from an Attachment message. Also converts values to other types if specified.
     * @function toObject
     * @memberof signal.Attachment
     * @static
     * @param {signal.Attachment} message Attachment
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Attachment.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.rowId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
        } else object.rowId = options.longs === String ? '0' : 0;
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.attachmentId =
            options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
        } else object.attachmentId = options.longs === String ? '0' : 0;
        object.length = 0;
      }
      if (message.rowId != null && message.hasOwnProperty('rowId'))
        if (typeof message.rowId === 'number')
          object.rowId = options.longs === String ? String(message.rowId) : message.rowId;
        else
          object.rowId =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.rowId)
              : options.longs === Number
              ? new $util.LongBits(message.rowId.low >>> 0, message.rowId.high >>> 0).toNumber(true)
              : message.rowId;
      if (message.attachmentId != null && message.hasOwnProperty('attachmentId'))
        if (typeof message.attachmentId === 'number')
          object.attachmentId = options.longs === String ? String(message.attachmentId) : message.attachmentId;
        else
          object.attachmentId =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.attachmentId)
              : options.longs === Number
              ? new $util.LongBits(message.attachmentId.low >>> 0, message.attachmentId.high >>> 0).toNumber(true)
              : message.attachmentId;
      if (message.length != null && message.hasOwnProperty('length')) object.length = message.length;
      return object;
    };

    /**
     * Converts this Attachment to JSON.
     * @function toJSON
     * @memberof signal.Attachment
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Attachment.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Attachment;
  })();

  signal.Avatar = (function() {
    /**
     * Properties of an Avatar.
     * @memberof signal
     * @interface IAvatar
     * @property {string|null} [name] Avatar name
     * @property {number|null} [length] Avatar length
     */

    /**
     * Constructs a new Avatar.
     * @memberof signal
     * @classdesc Represents an Avatar.
     * @implements IAvatar
     * @constructor
     * @param {signal.IAvatar=} [properties] Properties to set
     */
    function Avatar(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * Avatar name.
     * @member {string} name
     * @memberof signal.Avatar
     * @instance
     */
    Avatar.prototype.name = '';

    /**
     * Avatar length.
     * @member {number} length
     * @memberof signal.Avatar
     * @instance
     */
    Avatar.prototype.length = 0;

    /**
     * Creates a new Avatar instance using the specified properties.
     * @function create
     * @memberof signal.Avatar
     * @static
     * @param {signal.IAvatar=} [properties] Properties to set
     * @returns {signal.Avatar} Avatar instance
     */
    Avatar.create = function create(properties) {
      return new Avatar(properties);
    };

    /**
     * Encodes the specified Avatar message. Does not implicitly {@link signal.Avatar.verify|verify} messages.
     * @function encode
     * @memberof signal.Avatar
     * @static
     * @param {signal.IAvatar} message Avatar message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Avatar.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.name != null && message.hasOwnProperty('name'))
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.name);
      if (message.length != null && message.hasOwnProperty('length'))
        writer.uint32(/* id 2, wireType 0 =*/ 16).uint32(message.length);
      return writer;
    };

    /**
     * Encodes the specified Avatar message, length delimited. Does not implicitly {@link signal.Avatar.verify|verify} messages.
     * @function encodeDelimited
     * @memberof signal.Avatar
     * @static
     * @param {signal.IAvatar} message Avatar message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Avatar.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Avatar message from the specified reader or buffer.
     * @function decode
     * @memberof signal.Avatar
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {signal.Avatar} Avatar
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Avatar.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.signal.Avatar();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.name = reader.string();
            break;
          case 2:
            message.length = reader.uint32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an Avatar message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof signal.Avatar
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {signal.Avatar} Avatar
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Avatar.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Avatar message.
     * @function verify
     * @memberof signal.Avatar
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Avatar.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected';
      if (message.name != null && message.hasOwnProperty('name'))
        if (!$util.isString(message.name)) return 'name: string expected';
      if (message.length != null && message.hasOwnProperty('length'))
        if (!$util.isInteger(message.length)) return 'length: integer expected';
      return null;
    };

    /**
     * Creates an Avatar message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof signal.Avatar
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {signal.Avatar} Avatar
     */
    Avatar.fromObject = function fromObject(object) {
      if (object instanceof $root.signal.Avatar) return object;
      var message = new $root.signal.Avatar();
      if (object.name != null) message.name = String(object.name);
      if (object.length != null) message.length = object.length >>> 0;
      return message;
    };

    /**
     * Creates a plain object from an Avatar message. Also converts values to other types if specified.
     * @function toObject
     * @memberof signal.Avatar
     * @static
     * @param {signal.Avatar} message Avatar
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Avatar.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.name = '';
        object.length = 0;
      }
      if (message.name != null && message.hasOwnProperty('name')) object.name = message.name;
      if (message.length != null && message.hasOwnProperty('length')) object.length = message.length;
      return object;
    };

    /**
     * Converts this Avatar to JSON.
     * @function toJSON
     * @memberof signal.Avatar
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Avatar.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Avatar;
  })();

  signal.DatabaseVersion = (function() {
    /**
     * Properties of a DatabaseVersion.
     * @memberof signal
     * @interface IDatabaseVersion
     * @property {number|null} [version] DatabaseVersion version
     */

    /**
     * Constructs a new DatabaseVersion.
     * @memberof signal
     * @classdesc Represents a DatabaseVersion.
     * @implements IDatabaseVersion
     * @constructor
     * @param {signal.IDatabaseVersion=} [properties] Properties to set
     */
    function DatabaseVersion(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * DatabaseVersion version.
     * @member {number} version
     * @memberof signal.DatabaseVersion
     * @instance
     */
    DatabaseVersion.prototype.version = 0;

    /**
     * Creates a new DatabaseVersion instance using the specified properties.
     * @function create
     * @memberof signal.DatabaseVersion
     * @static
     * @param {signal.IDatabaseVersion=} [properties] Properties to set
     * @returns {signal.DatabaseVersion} DatabaseVersion instance
     */
    DatabaseVersion.create = function create(properties) {
      return new DatabaseVersion(properties);
    };

    /**
     * Encodes the specified DatabaseVersion message. Does not implicitly {@link signal.DatabaseVersion.verify|verify} messages.
     * @function encode
     * @memberof signal.DatabaseVersion
     * @static
     * @param {signal.IDatabaseVersion} message DatabaseVersion message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DatabaseVersion.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.version != null && message.hasOwnProperty('version'))
        writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.version);
      return writer;
    };

    /**
     * Encodes the specified DatabaseVersion message, length delimited. Does not implicitly {@link signal.DatabaseVersion.verify|verify} messages.
     * @function encodeDelimited
     * @memberof signal.DatabaseVersion
     * @static
     * @param {signal.IDatabaseVersion} message DatabaseVersion message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DatabaseVersion.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DatabaseVersion message from the specified reader or buffer.
     * @function decode
     * @memberof signal.DatabaseVersion
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {signal.DatabaseVersion} DatabaseVersion
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DatabaseVersion.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.signal.DatabaseVersion();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.version = reader.uint32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a DatabaseVersion message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof signal.DatabaseVersion
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {signal.DatabaseVersion} DatabaseVersion
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DatabaseVersion.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DatabaseVersion message.
     * @function verify
     * @memberof signal.DatabaseVersion
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DatabaseVersion.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected';
      if (message.version != null && message.hasOwnProperty('version'))
        if (!$util.isInteger(message.version)) return 'version: integer expected';
      return null;
    };

    /**
     * Creates a DatabaseVersion message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof signal.DatabaseVersion
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {signal.DatabaseVersion} DatabaseVersion
     */
    DatabaseVersion.fromObject = function fromObject(object) {
      if (object instanceof $root.signal.DatabaseVersion) return object;
      var message = new $root.signal.DatabaseVersion();
      if (object.version != null) message.version = object.version >>> 0;
      return message;
    };

    /**
     * Creates a plain object from a DatabaseVersion message. Also converts values to other types if specified.
     * @function toObject
     * @memberof signal.DatabaseVersion
     * @static
     * @param {signal.DatabaseVersion} message DatabaseVersion
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DatabaseVersion.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) object.version = 0;
      if (message.version != null && message.hasOwnProperty('version')) object.version = message.version;
      return object;
    };

    /**
     * Converts this DatabaseVersion to JSON.
     * @function toJSON
     * @memberof signal.DatabaseVersion
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DatabaseVersion.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DatabaseVersion;
  })();

  signal.Header = (function() {
    /**
     * Properties of a Header.
     * @memberof signal
     * @interface IHeader
     * @property {Uint8Array|null} [iv] Header iv
     * @property {Uint8Array|null} [salt] Header salt
     */

    /**
     * Constructs a new Header.
     * @memberof signal
     * @classdesc Represents a Header.
     * @implements IHeader
     * @constructor
     * @param {signal.IHeader=} [properties] Properties to set
     */
    function Header(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * Header iv.
     * @member {Uint8Array} iv
     * @memberof signal.Header
     * @instance
     */
    Header.prototype.iv = $util.newBuffer([]);

    /**
     * Header salt.
     * @member {Uint8Array} salt
     * @memberof signal.Header
     * @instance
     */
    Header.prototype.salt = $util.newBuffer([]);

    /**
     * Creates a new Header instance using the specified properties.
     * @function create
     * @memberof signal.Header
     * @static
     * @param {signal.IHeader=} [properties] Properties to set
     * @returns {signal.Header} Header instance
     */
    Header.create = function create(properties) {
      return new Header(properties);
    };

    /**
     * Encodes the specified Header message. Does not implicitly {@link signal.Header.verify|verify} messages.
     * @function encode
     * @memberof signal.Header
     * @static
     * @param {signal.IHeader} message Header message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Header.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.iv != null && message.hasOwnProperty('iv'))
        writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.iv);
      if (message.salt != null && message.hasOwnProperty('salt'))
        writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.salt);
      return writer;
    };

    /**
     * Encodes the specified Header message, length delimited. Does not implicitly {@link signal.Header.verify|verify} messages.
     * @function encodeDelimited
     * @memberof signal.Header
     * @static
     * @param {signal.IHeader} message Header message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Header.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Header message from the specified reader or buffer.
     * @function decode
     * @memberof signal.Header
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {signal.Header} Header
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Header.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.signal.Header();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.iv = reader.bytes();
            break;
          case 2:
            message.salt = reader.bytes();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a Header message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof signal.Header
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {signal.Header} Header
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Header.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Header message.
     * @function verify
     * @memberof signal.Header
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Header.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected';
      if (message.iv != null && message.hasOwnProperty('iv'))
        if (!((message.iv && typeof message.iv.length === 'number') || $util.isString(message.iv)))
          return 'iv: buffer expected';
      if (message.salt != null && message.hasOwnProperty('salt'))
        if (!((message.salt && typeof message.salt.length === 'number') || $util.isString(message.salt)))
          return 'salt: buffer expected';
      return null;
    };

    /**
     * Creates a Header message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof signal.Header
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {signal.Header} Header
     */
    Header.fromObject = function fromObject(object) {
      if (object instanceof $root.signal.Header) return object;
      var message = new $root.signal.Header();
      if (object.iv != null)
        if (typeof object.iv === 'string')
          $util.base64.decode(object.iv, (message.iv = $util.newBuffer($util.base64.length(object.iv))), 0);
        else if (object.iv.length) message.iv = object.iv;
      if (object.salt != null)
        if (typeof object.salt === 'string')
          $util.base64.decode(object.salt, (message.salt = $util.newBuffer($util.base64.length(object.salt))), 0);
        else if (object.salt.length) message.salt = object.salt;
      return message;
    };

    /**
     * Creates a plain object from a Header message. Also converts values to other types if specified.
     * @function toObject
     * @memberof signal.Header
     * @static
     * @param {signal.Header} message Header
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Header.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        if (options.bytes === String) object.iv = '';
        else {
          object.iv = [];
          if (options.bytes !== Array) object.iv = $util.newBuffer(object.iv);
        }
        if (options.bytes === String) object.salt = '';
        else {
          object.salt = [];
          if (options.bytes !== Array) object.salt = $util.newBuffer(object.salt);
        }
      }
      if (message.iv != null && message.hasOwnProperty('iv'))
        object.iv =
          options.bytes === String
            ? $util.base64.encode(message.iv, 0, message.iv.length)
            : options.bytes === Array
            ? Array.prototype.slice.call(message.iv)
            : message.iv;
      if (message.salt != null && message.hasOwnProperty('salt'))
        object.salt =
          options.bytes === String
            ? $util.base64.encode(message.salt, 0, message.salt.length)
            : options.bytes === Array
            ? Array.prototype.slice.call(message.salt)
            : message.salt;
      return object;
    };

    /**
     * Converts this Header to JSON.
     * @function toJSON
     * @memberof signal.Header
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Header.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Header;
  })();

  signal.BackupFrame = (function() {
    /**
     * Properties of a BackupFrame.
     * @memberof signal
     * @interface IBackupFrame
     * @property {signal.IHeader|null} [header] BackupFrame header
     * @property {signal.ISqlStatement|null} [statement] BackupFrame statement
     * @property {signal.ISharedPreference|null} [preference] BackupFrame preference
     * @property {signal.IAttachment|null} [attachment] BackupFrame attachment
     * @property {signal.IDatabaseVersion|null} [version] BackupFrame version
     * @property {boolean|null} [end] BackupFrame end
     * @property {signal.IAvatar|null} [avatar] BackupFrame avatar
     */

    /**
     * Constructs a new BackupFrame.
     * @memberof signal
     * @classdesc Represents a BackupFrame.
     * @implements IBackupFrame
     * @constructor
     * @param {signal.IBackupFrame=} [properties] Properties to set
     */
    function BackupFrame(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * BackupFrame header.
     * @member {signal.IHeader|null|undefined} header
     * @memberof signal.BackupFrame
     * @instance
     */
    BackupFrame.prototype.header = null;

    /**
     * BackupFrame statement.
     * @member {signal.ISqlStatement|null|undefined} statement
     * @memberof signal.BackupFrame
     * @instance
     */
    BackupFrame.prototype.statement = null;

    /**
     * BackupFrame preference.
     * @member {signal.ISharedPreference|null|undefined} preference
     * @memberof signal.BackupFrame
     * @instance
     */
    BackupFrame.prototype.preference = null;

    /**
     * BackupFrame attachment.
     * @member {signal.IAttachment|null|undefined} attachment
     * @memberof signal.BackupFrame
     * @instance
     */
    BackupFrame.prototype.attachment = null;

    /**
     * BackupFrame version.
     * @member {signal.IDatabaseVersion|null|undefined} version
     * @memberof signal.BackupFrame
     * @instance
     */
    BackupFrame.prototype.version = null;

    /**
     * BackupFrame end.
     * @member {boolean} end
     * @memberof signal.BackupFrame
     * @instance
     */
    BackupFrame.prototype.end = false;

    /**
     * BackupFrame avatar.
     * @member {signal.IAvatar|null|undefined} avatar
     * @memberof signal.BackupFrame
     * @instance
     */
    BackupFrame.prototype.avatar = null;

    /**
     * Creates a new BackupFrame instance using the specified properties.
     * @function create
     * @memberof signal.BackupFrame
     * @static
     * @param {signal.IBackupFrame=} [properties] Properties to set
     * @returns {signal.BackupFrame} BackupFrame instance
     */
    BackupFrame.create = function create(properties) {
      return new BackupFrame(properties);
    };

    /**
     * Encodes the specified BackupFrame message. Does not implicitly {@link signal.BackupFrame.verify|verify} messages.
     * @function encode
     * @memberof signal.BackupFrame
     * @static
     * @param {signal.IBackupFrame} message BackupFrame message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BackupFrame.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.header != null && message.hasOwnProperty('header'))
        $root.signal.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/ 10).fork()).ldelim();
      if (message.statement != null && message.hasOwnProperty('statement'))
        $root.signal.SqlStatement.encode(message.statement, writer.uint32(/* id 2, wireType 2 =*/ 18).fork()).ldelim();
      if (message.preference != null && message.hasOwnProperty('preference'))
        $root.signal.SharedPreference.encode(
          message.preference,
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
      if (message.attachment != null && message.hasOwnProperty('attachment'))
        $root.signal.Attachment.encode(message.attachment, writer.uint32(/* id 4, wireType 2 =*/ 34).fork()).ldelim();
      if (message.version != null && message.hasOwnProperty('version'))
        $root.signal.DatabaseVersion.encode(message.version, writer.uint32(/* id 5, wireType 2 =*/ 42).fork()).ldelim();
      if (message.end != null && message.hasOwnProperty('end'))
        writer.uint32(/* id 6, wireType 0 =*/ 48).bool(message.end);
      if (message.avatar != null && message.hasOwnProperty('avatar'))
        $root.signal.Avatar.encode(message.avatar, writer.uint32(/* id 7, wireType 2 =*/ 58).fork()).ldelim();
      return writer;
    };

    /**
     * Encodes the specified BackupFrame message, length delimited. Does not implicitly {@link signal.BackupFrame.verify|verify} messages.
     * @function encodeDelimited
     * @memberof signal.BackupFrame
     * @static
     * @param {signal.IBackupFrame} message BackupFrame message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BackupFrame.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BackupFrame message from the specified reader or buffer.
     * @function decode
     * @memberof signal.BackupFrame
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {signal.BackupFrame} BackupFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BackupFrame.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.signal.BackupFrame();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.header = $root.signal.Header.decode(reader, reader.uint32());
            break;
          case 2:
            message.statement = $root.signal.SqlStatement.decode(reader, reader.uint32());
            break;
          case 3:
            message.preference = $root.signal.SharedPreference.decode(reader, reader.uint32());
            break;
          case 4:
            message.attachment = $root.signal.Attachment.decode(reader, reader.uint32());
            break;
          case 5:
            message.version = $root.signal.DatabaseVersion.decode(reader, reader.uint32());
            break;
          case 6:
            message.end = reader.bool();
            break;
          case 7:
            message.avatar = $root.signal.Avatar.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a BackupFrame message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof signal.BackupFrame
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {signal.BackupFrame} BackupFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BackupFrame.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BackupFrame message.
     * @function verify
     * @memberof signal.BackupFrame
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BackupFrame.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) return 'object expected';
      if (message.header != null && message.hasOwnProperty('header')) {
        var error = $root.signal.Header.verify(message.header);
        if (error) return 'header.' + error;
      }
      if (message.statement != null && message.hasOwnProperty('statement')) {
        var error = $root.signal.SqlStatement.verify(message.statement);
        if (error) return 'statement.' + error;
      }
      if (message.preference != null && message.hasOwnProperty('preference')) {
        var error = $root.signal.SharedPreference.verify(message.preference);
        if (error) return 'preference.' + error;
      }
      if (message.attachment != null && message.hasOwnProperty('attachment')) {
        var error = $root.signal.Attachment.verify(message.attachment);
        if (error) return 'attachment.' + error;
      }
      if (message.version != null && message.hasOwnProperty('version')) {
        var error = $root.signal.DatabaseVersion.verify(message.version);
        if (error) return 'version.' + error;
      }
      if (message.end != null && message.hasOwnProperty('end'))
        if (typeof message.end !== 'boolean') return 'end: boolean expected';
      if (message.avatar != null && message.hasOwnProperty('avatar')) {
        var error = $root.signal.Avatar.verify(message.avatar);
        if (error) return 'avatar.' + error;
      }
      return null;
    };

    /**
     * Creates a BackupFrame message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof signal.BackupFrame
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {signal.BackupFrame} BackupFrame
     */
    BackupFrame.fromObject = function fromObject(object) {
      if (object instanceof $root.signal.BackupFrame) return object;
      var message = new $root.signal.BackupFrame();
      if (object.header != null) {
        if (typeof object.header !== 'object') throw TypeError('.signal.BackupFrame.header: object expected');
        message.header = $root.signal.Header.fromObject(object.header);
      }
      if (object.statement != null) {
        if (typeof object.statement !== 'object') throw TypeError('.signal.BackupFrame.statement: object expected');
        message.statement = $root.signal.SqlStatement.fromObject(object.statement);
      }
      if (object.preference != null) {
        if (typeof object.preference !== 'object') throw TypeError('.signal.BackupFrame.preference: object expected');
        message.preference = $root.signal.SharedPreference.fromObject(object.preference);
      }
      if (object.attachment != null) {
        if (typeof object.attachment !== 'object') throw TypeError('.signal.BackupFrame.attachment: object expected');
        message.attachment = $root.signal.Attachment.fromObject(object.attachment);
      }
      if (object.version != null) {
        if (typeof object.version !== 'object') throw TypeError('.signal.BackupFrame.version: object expected');
        message.version = $root.signal.DatabaseVersion.fromObject(object.version);
      }
      if (object.end != null) message.end = Boolean(object.end);
      if (object.avatar != null) {
        if (typeof object.avatar !== 'object') throw TypeError('.signal.BackupFrame.avatar: object expected');
        message.avatar = $root.signal.Avatar.fromObject(object.avatar);
      }
      return message;
    };

    /**
     * Creates a plain object from a BackupFrame message. Also converts values to other types if specified.
     * @function toObject
     * @memberof signal.BackupFrame
     * @static
     * @param {signal.BackupFrame} message BackupFrame
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BackupFrame.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.header = null;
        object.statement = null;
        object.preference = null;
        object.attachment = null;
        object.version = null;
        object.end = false;
        object.avatar = null;
      }
      if (message.header != null && message.hasOwnProperty('header'))
        object.header = $root.signal.Header.toObject(message.header, options);
      if (message.statement != null && message.hasOwnProperty('statement'))
        object.statement = $root.signal.SqlStatement.toObject(message.statement, options);
      if (message.preference != null && message.hasOwnProperty('preference'))
        object.preference = $root.signal.SharedPreference.toObject(message.preference, options);
      if (message.attachment != null && message.hasOwnProperty('attachment'))
        object.attachment = $root.signal.Attachment.toObject(message.attachment, options);
      if (message.version != null && message.hasOwnProperty('version'))
        object.version = $root.signal.DatabaseVersion.toObject(message.version, options);
      if (message.end != null && message.hasOwnProperty('end')) object.end = message.end;
      if (message.avatar != null && message.hasOwnProperty('avatar'))
        object.avatar = $root.signal.Avatar.toObject(message.avatar, options);
      return object;
    };

    /**
     * Converts this BackupFrame to JSON.
     * @function toJSON
     * @memberof signal.BackupFrame
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BackupFrame.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BackupFrame;
  })();

  return signal;
})();

module.exports = $root;
