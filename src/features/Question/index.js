import { Button } from 'semantic-ui-react'
import React from 'react'
import { Visible } from 'react-grid-system'
import { times } from 'lodash/fp'

const renderVoteButtons = ({ onChange, block }) => (indexStart, indexEnd) => (
  <Button.Group size={'huge'} fluid>
    {times(index => (
      <Button
        key={index + indexStart}
        primary={block.value === index + indexStart}
        active={false}
        compact
        onClick={() => onChange(index + indexStart)}>
        {index + indexStart}
      </Button>
    ))(indexEnd - indexStart + 1)}
  </Button.Group>
)

export const Question = ({ block, onChange = () => {} }) => (
  <div>
    <h2
      style={{
        textAlign: 'center',
        color: 'white',
        fontWeight: '100',
        fontSize: '48px',
      }}>
      {block.name}
    </h2>

    <br />
    <Visible xs sm>
      {renderVoteButtons({ onChange, block })(1, 5)}
      <div style={{ height: '1px' }} />
      {renderVoteButtons({ onChange, block })(6, 10)}
    </Visible>
    <Visible md lg xl>
      {renderVoteButtons({ onChange, block })(1, 10)}
    </Visible>
  </div>
)
