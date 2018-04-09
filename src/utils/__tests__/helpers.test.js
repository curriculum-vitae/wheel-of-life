import { decodeStateFromString, encodeStateToString } from '../helpers'

describe('helpers', () => {
  describe('encodeStateToString', () => {
    const stateDecoded = {
      blocks: [
        {
          id: 1,
          value: 10,
        },
        {
          id: 2,
          value: 10,
        },
        {
          id: 3,
          value: 10,
        },
        {
          id: 4,
          value: 10,
        },
        {
          id: 5,
          value: 10,
        },
        {
          id: 6,
          value: 10,
        },
        {
          id: 7,
          value: 10,
        },
        {
          id: 8,
          value: 10,
        },
        {
          id: 9,
          value: 10,
        },
        {
          id: 10,
          value: 10,
        },
      ],
    }

    const stateEncoded = "ivgnmvgnavgnlvgnovgnhvgncvgnyvgnpvgngvg"

    test('should encode', () => {
      expect(encodeStateToString(stateDecoded)).toEqual(stateEncoded)
    })

    test('should decode', () => {
      expect(decodeStateFromString(stateEncoded)).toEqual(stateDecoded)
    })
  })
})
