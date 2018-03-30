import { flow, reduce, sortBy } from 'lodash/fp';

import { decodeStateFromString } from 'common/helpers';

export const convertBlocksToHash = flow(
  sortBy('name'),
  reduce((hash, block) => hash + block.name + block.value, '')
);

export const isInSync = ({ match, blocks, index }) => {
  const decoded = convertMatchToData(match);
  if (decoded.index !== index) return false;
  if (convertBlocksToHash(decoded.blocks) !== convertBlocksToHash(blocks)) return false;
  return true;
};

export const convertMatchToData = match => {
  const str = match.params.state;
  return decodeStateFromString(str);
};
