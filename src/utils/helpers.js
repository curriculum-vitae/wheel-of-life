import base64 from 'lib/base64'
import pako from 'pako'
import { toPairs } from 'lodash'

export const encodeStateToString = state => {
  const obj = state.blocks.reduce((acc, block) => {
    acc[block.id] = block.value
    return acc
  }, {})
  return base64.encode(pako.deflate(JSON.stringify(obj), { to: 'string' }))
}

export const decodeStateFromString = str => {
  const decoded = JSON.parse(pako.inflate(base64.decode(str), { to: 'string' }))

  return {
    blocks: toPairs(decoded).map(pair => ({
      id: +pair[0],
      value: pair[1],
    })),
  }
}
