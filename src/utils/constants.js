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
    id: 0,
    name: 'Health',
    color: red[SHADE],
    questions: [
      'Can you say you are in a good shape?',
      'Do you exercise on some regular basis?',
      'Do you have any old health problems you put small time to solve?',
      'Are you eating healthy enough?',
      'How many habits that work against your health do you have?',
    ],
    value: process.env.NODE_ENV === 'development' ? 5 : 0,
  },
  {
    id: 1,
    name: 'Family',
    color: blue[SHADE],
    value: process.env.NODE_ENV === 'development' ? 10 : 0,
  },
  {
    id: 2,
    name: 'Career',
    color: pink[SHADE],
    value: process.env.NODE_ENV === 'development' ? 4 : 0,
  },
  {
    id: 3,
    name: 'Personal development',
    color: yellow[SHADE],
    value: process.env.NODE_ENV === 'development' ? 5 : 0,
  },

  {
    id: 4,
    name: 'Partner',
    color: purple[SHADE],
    value: process.env.NODE_ENV === 'development' ? 6 : 0,
  },
  {
    id: 5,
    name: 'Spirituality',
    color: deepOrange[SHADE],
    value: process.env.NODE_ENV === 'development' ? 5 : 0,
  },
  {
    id: 6,
    name: 'Fun',
    color: brown[SHADE],
    value: process.env.NODE_ENV === 'development' ? 5 : 0,
  },
  {
    id: 7,
    name: 'Environment',
    color: green[SHADE],
    value: process.env.NODE_ENV === 'development' ? 2 : 0,
  },
  {
    id: 8,
    name: 'Finances',
    color: cyan[SHADE],
    value: process.env.NODE_ENV === 'development' ? 1 : 0,
  },
  {
    id: 9,
    name: 'Friends',
    color: amber[SHADE],
    value: process.env.NODE_ENV === 'development' ? 0 : 0,
  },
  {
    id: 10,
    name: 'Social',
    color: indigo[SHADE],
    value: process.env.NODE_ENV === 'development' ? 10 : 0,
  },
]
