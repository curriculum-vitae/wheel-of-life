import { Button, List } from 'semantic-ui-react'

import React from 'react'
import { times } from 'lodash/fp'

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
    <div>
      <List divided relaxed>
        {(block.questions || []).map(str => (
          <List.Item key={str} color={'white'}>
            <List.Icon
              name={'question'}
              size={'large'}
              verticalAlign="middle"
            />
            <List.Content>
              <List.Header>{str}</List.Header>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </div>
    <br />

    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
      <Button.Group size={'large'} fluid>
        {times(index => (
          <Button
            key={index + 1}
            primary={block.value === index + 1}
            active={false}
            compact
            onClick={() => onChange(index + 1)}>
            {index + 1}
          </Button>
        ))(10)}
      </Button.Group>
    </div>
  </div>
)
