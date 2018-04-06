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
    value: process.env.NODE_ENV === 'develop' ? 5 : 0,
  },
  {
    name: 'Family',
    color: blue[SHADE],
    value: process.env.NODE_ENV === 'develop' ? 10 : 0,
  },
  {
    name: 'Career',
    color: pink[SHADE],
    value: process.env.NODE_ENV === 'develop' ? 4 : 0,
  },
  {
    name: 'Personal development',
    color: yellow[SHADE],
    value: process.env.NODE_ENV === 'develop' ? 5 : 0,
  },

  {
    name: 'Partner',
    color: purple[SHADE],
    value: process.env.NODE_ENV === 'develop' ? 6 : 0,
  },
  {
    name: 'Spirituality',
    color: deepOrange[SHADE],
    value: process.env.NODE_ENV === 'develop' ? 5 : 0,
  },
  {
    name: 'Fun',
    color: brown[SHADE],
    value: process.env.NODE_ENV === 'develop' ? 5 : 0,
  },
  {
    name: 'Environment',
    color: green[SHADE],
    value: process.env.NODE_ENV === 'develop' ? 2 : 0,
  },
  {
    name: 'Finances',
    color: cyan[SHADE],
    value: process.env.NODE_ENV === 'develop' ? 1 : 0,
  },
  {
    name: 'Friends',
    color: amber[SHADE],
    value: process.env.NODE_ENV === 'develop' ? 0 : 0,
  },
  {
    name: 'Social',
    color: indigo[SHADE],
    value: process.env.NODE_ENV === 'develop' ? 10 : 0,
  },
]
