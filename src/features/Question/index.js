import { Button } from 'semantic-ui-react'
import React from 'react'
import { times } from 'lodash/fp'

export default ({ block, onChange = () => {} }) => (
  <div
    style={{
      padding: '50px',
    }}>
    <h2
      style={{
        textAlign: 'center',
        color: 'white',
        fontWeight: '100',
        fontSize: '48px',
      }}>
      {block.name}
    </h2>

    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
      <Button.Group size={'large'}>
        {times(index => (
          <Button
            primary={block.value === index + 1}
            key={index + 1}
            onClick={() => onChange(index + 1)}>
            {index + 1}
          </Button>
        ))(10)}
      </Button.Group>
    </div>
  </div>
)
