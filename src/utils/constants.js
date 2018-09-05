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
} from '@material-ui/core/colors'

const SHADE = 800

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
    shortName: 'HLT',
  },
  {
    id: 1,
    name: 'Family',
    color: blue[SHADE],
    value: process.env.NODE_ENV === 'development' ? 10 : 0,
    shortName: 'FML',
  },
  {
    id: 2,
    name: 'Career',
    color: pink[SHADE],
    value: process.env.NODE_ENV === 'development' ? 4 : 0,
    shortName: 'CRR',
  },
  {
    id: 3,
    name: 'Personal development',
    color: yellow[SHADE],
    value: process.env.NODE_ENV === 'development' ? 5 : 0,
    shortName: 'PSD',
  },

  {
    id: 4,
    name: 'Partner',
    color: purple[SHADE],
    value: process.env.NODE_ENV === 'development' ? 6 : 0,
    shortName: 'PRT',
  },
  {
    id: 5,
    name: 'Spirituality',
    color: deepOrange[SHADE],
    value: process.env.NODE_ENV === 'development' ? 5 : 0,
    shortName: 'SPR',
  },
  {
    id: 6,
    name: 'Fun',
    color: brown[SHADE],
    value: process.env.NODE_ENV === 'development' ? 5 : 0,
    shortName: 'FUN',
  },
  {
    id: 7,
    name: 'Environment',
    color: green[SHADE],
    value: process.env.NODE_ENV === 'development' ? 2 : 0,
    shortName: 'ENV',
  },
  {
    id: 8,
    name: 'Finances',
    color: cyan[SHADE],
    value: process.env.NODE_ENV === 'development' ? 1 : 0,
    shortName: 'FNS',
  },
  {
    id: 9,
    name: 'Friends',
    color: amber[SHADE],
    value: process.env.NODE_ENV === 'development' ? 0 : 0,
    shortName: 'FRN',
  },
  {
    id: 10,
    name: 'Social',
    color: indigo[SHADE],
    value: process.env.NODE_ENV === 'development' ? 10 : 0,
    shortName: 'SCL',
  },
]
