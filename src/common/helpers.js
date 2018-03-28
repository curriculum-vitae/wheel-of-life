import r from '../lib/base64';

export const encodeStateToString = state => {
  return r.encode(JSON.stringify(state));
};

export const decodeStateFromString = str => {
  return JSON.parse(r.decode(str));
};
