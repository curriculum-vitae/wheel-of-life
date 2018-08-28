import { Button, Hidden, Typography } from '@material-ui/core'

import React from 'react'
import { times } from 'lodash/fp'

const renderVoteButtons = ({ onChange, block }) => (indexStart, indexEnd) => (
  <React.Fragment>
    {times(index => (
      <Button
        key={index + indexStart}
        style={{
          width: '18%',
          margin: '1%',
        }}
        variant={block.value === index + indexStart ? 'raised' : 'outlined'}
        color={block.value === index + indexStart ? 'primary' : 'default'}
        onClick={() => onChange(index + indexStart)}>
        {index + indexStart}
      </Button>
    ))(indexEnd - indexStart + 1)}
  </React.Fragment>
)

export const Question = ({ block, onChange = () => {} }) => (
  <React.Fragment>
    <Typography
      style={{
        height: '120px',
      }}
      align={'center'}
      variant={block.name.length > 12 ? 'display2' : 'display3'}>
      {block.name}
    </Typography>

    <Typography align={'center'} variant={'title'} gutterBottom>
      How would you rate this part of your life?
    </Typography>

    <Hidden mdUp>
      {renderVoteButtons({ onChange, block })(1, 5)}
      {renderVoteButtons({ onChange, block })(6, 10)}
    </Hidden>
    <Hidden smDown>{renderVoteButtons({ onChange, block })(1, 10)}</Hidden>
  </React.Fragment>
)
