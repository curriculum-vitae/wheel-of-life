export const encodeStateToString = state => {
  return JSON.stringify(state);
};

export const decodeStateFromString = str => {
  return JSON.parse(str);
};
