export const isInSync = ({ match, blocks, index }) => {
  const decoded = convertMatchToData(match);
  if (decoded.index !== index) return false;
  if (convertBlocksToHash(decoded.blocks) !== convertBlocksToHash(blocks)) return false;
  return true;
};
