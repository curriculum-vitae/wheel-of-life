import {
  amber,
  blue,
  brown,
  cyan,
  deepOrange,
  green,
  indigo,
  pink,
  purple,
  red,
  yellow,
} from 'utils/colors'

const SHADE = 700

export const BLOCKS = [
  {
    name: 'Health',
    color: red[SHADE],
    questions: [
      'Can you say you are in a good shape?',
      'Do you exercise on some regular basis?',
      'Do you have any old health problems you put small time to solve?',
      'Are you eating healthy enough?',
      'How many habits that work against your health do you have?',
    ],
    value: 5,
  },
  {
    name: 'Family',
    color: blue[SHADE],
    value: 10,
  },
  {
    name: 'Career',
    color: pink[SHADE],
    value: 4,
  },
  {
    name: 'Personal development',
    color: yellow[SHADE],
    value: 5,
  },

  {
    name: 'Partner',
    color: purple[SHADE],
    value: 6,
  },
  {
    name: 'Spirituality',
    color: deepOrange[SHADE],
    value: 5,
  },
  {
    name: 'Fun',
    color: brown[SHADE],
    value: 5,
  },
  {
    name: 'Environment',
    color: green[SHADE],
    value: 2,
  },
  {
    name: 'Finances',
    color: cyan[SHADE],
    value: 1,
  },
  {
    name: 'Friends',
    color: amber[SHADE],
    value: 0,
  },
  {
    name: 'Social',
    color: indigo[SHADE],
    value: 10,
  },
]
