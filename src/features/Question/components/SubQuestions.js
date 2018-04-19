import { List } from 'semantic-ui-react'
import React from 'react'

export const SubQuestions = ({ block }) => (
  <List divided relaxed>
    {(block.questions || []).map(str => (
      <List.Item key={str} color={'white'}>
        <List.Icon name={'question'} size={'large'} verticalAlign="middle" />
        <List.Content>
          <List.Header>{str}</List.Header>
        </List.Content>
      </List.Item>
    ))}
  </List>
)
