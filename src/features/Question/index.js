import { Button, Hidden } from '@material-ui/core'

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
  <div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        height: '100px',
      }}>
      <h2
        style={{
          textAlign: 'center',
          fontWeight: '100',
          lineHeight: '1.0em',
          fontSize: block.name.length > 10 ? '58px' : '80px',
        }}>
        {block.name}
      </h2>
    </div>
    <h3
      style={{
        textAlign: 'center',
        fontSize: '20px',
      }}>
      How would you rate this part of your life?
    </h3>
    <br />
    <Hidden mdUp>
      {renderVoteButtons({ onChange, block })(1, 5)}
      <div style={{ height: '1px' }} />
      {renderVoteButtons({ onChange, block })(6, 10)}
    </Hidden>
    <Hidden xs sm>
      {renderVoteButtons({ onChange, block })(1, 10)}
    </Hidden>
  </div>
)
