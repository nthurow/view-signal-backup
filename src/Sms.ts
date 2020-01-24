import {signal} from './signal';

type IntegerParameterType = number | Long | null | undefined;
type StringParameterType = string | null | undefined;

export interface Sms {
  _id: IntegerParameterType;
  thread_id: IntegerParameterType;
  address: StringParameterType;
  address_device_id: IntegerParameterType;
  person: IntegerParameterType;
  date: IntegerParameterType;
  date_sent: IntegerParameterType;
  protocol: IntegerParameterType;
  read: IntegerParameterType;
  status: IntegerParameterType;
  type: IntegerParameterType;
  reply_path_present: IntegerParameterType;
  delivery_receipt_count: IntegerParameterType;
  subject: StringParameterType;
  body: StringParameterType;
  mismatched_identities: StringParameterType;
  service_center: StringParameterType;
  subscription_id: IntegerParameterType;
  expires_in: IntegerParameterType;
  expire_started: IntegerParameterType;
  notified: IntegerParameterType;
  read_receipt_count: IntegerParameterType;
  unidentified: IntegerParameterType;
}

export function isSmsStatement(frame: signal.BackupFrame) {
  return (
    frame.statement &&
    frame.statement.statement === 'INSERT INTO sms VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
  );
}

export function getSmsFromStatement(frame: signal.BackupFrame): Sms {
  if (!frame.statement || !frame.statement.parameters) {
    throw new Error('No statement found on frame');
  }

  return {
    _id: frame.statement.parameters[0].integerParameter,
    thread_id: frame.statement.parameters[1].integerParameter,
    address: frame.statement.parameters[2].stringParamter,
    address_device_id: frame.statement.parameters[3].integerParameter,
    person: frame.statement.parameters[4].integerParameter,
    date: frame.statement.parameters[5].integerParameter,
    date_sent: frame.statement.parameters[6].integerParameter,
    protocol: frame.statement.parameters[7].integerParameter,
    read: frame.statement.parameters[8].integerParameter,
    status: frame.statement.parameters[9].integerParameter,
    type: frame.statement.parameters[10].integerParameter,
    reply_path_present: frame.statement.parameters[11].integerParameter,
    delivery_receipt_count: frame.statement.parameters[12].integerParameter,
    subject: frame.statement.parameters[13].stringParamter,
    body: frame.statement.parameters[14].stringParamter,
    mismatched_identities: frame.statement.parameters[15].stringParamter,
    service_center: frame.statement.parameters[16].stringParamter,
    subscription_id: frame.statement.parameters[17].integerParameter,
    expires_in: frame.statement.parameters[18].integerParameter,
    expire_started: frame.statement.parameters[19].integerParameter,
    notified: frame.statement.parameters[20].integerParameter,
    read_receipt_count: frame.statement.parameters[21].integerParameter,
    unidentified: frame.statement.parameters[22].integerParameter
  };
}
