import { Button, Typography } from '@material-ui/core'

import React from 'react'
import { times } from 'lodash/fp'

const renderVoteButtons = ({ onChange, block }) => (valueFrom, valueTo) =>
  times(index => (
    <Button
      key={index + valueFrom}
      style={{
        flex: '1 0 0px',
        width: '100%',
        minWidth: '32px',
        marginRight: index + valueFrom === valueTo ? '0px' : '8px',
      }}
      variant={block.value === index + valueFrom ? 'raised' : 'outlined'}
      color={block.value === index + valueFrom ? 'primary' : 'default'}
      onClick={() => onChange(index + valueFrom)}
      size={'small'}>
      {index + valueFrom}
    </Button>
  ))(valueTo - valueFrom + 1)

export const Question = ({ block, onChange = () => {} }) => (
  <React.Fragment>
    <Typography
      style={{
        height: '100px',
      }}
      align={'center'}
      variant={block.name.length > 12 ? 'display2' : 'display3'}>
      {block.name}
    </Typography>

    <Typography align={'center'} variant={'title'} gutterBottom>
      How would you rate this part of your life?
    </Typography>
    <br />
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: '8px',
      }}>
      {renderVoteButtons({ onChange, block })(1, 5)}
    </div>

    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}>
      {renderVoteButtons({ onChange, block })(6, 10)}
    </div>
  </React.Fragment>
)
