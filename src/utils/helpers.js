const unbreakableCypherV1 = {
  '0': 'd',
  '1': 'i',
  '2': 'm',
  '3': 'a',
  '4': 'l',
  '5': 'o',
  '6': 'h',
  '7': 'c',
  '8': 'y',
  '9': 'p',
  '10': 'g',
  '11': 'e',
  '12': 'r',
  ':': 'v',
  ',': 'n',
}

export const encodeStateToString = state => {
  let cypher = ''

  for (let i = 0; i < state.blocks.length; i++) {
    const block = state.blocks[i]

    cypher += `${unbreakableCypherV1[block.id]}${unbreakableCypherV1[':']}${
      unbreakableCypherV1[block.value]
    }`
    if (i !== state.blocks.length - 1) {
      cypher += unbreakableCypherV1[',']
    }
  }

  return cypher
}

export const decodeStateFromString = str => {
  const deCypher = str.split(unbreakableCypherV1[','])

  return {
    blocks: deCypher.map(value => {
      const numbers = value.split(unbreakableCypherV1[':'])
      return {
        id: +getKeyByValue(unbreakableCypherV1, numbers[0]),
        value: +getKeyByValue(unbreakableCypherV1, numbers[1]),
      }
    }),
  }
}

const getKeyByValue = (object, value) =>
  Object.keys(object).find(key => object[key] === value)
