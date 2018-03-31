import base64 from 'lib/base64';

export const encodeStateToString = state => {
  return base64.encode(JSON.stringify(state));
};

export const decodeStateFromString = str => {
  return JSON.parse(base64.decode(str));
};
