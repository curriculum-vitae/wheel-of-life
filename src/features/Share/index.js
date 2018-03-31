import { Button } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import React from 'react'
import copy from 'copy-to-clipboard'

const createShareURL = ({ blocks } = {}) => {
  return window.location.href
}

const runCopy = () => {
  copy(createShareURL())
  window.alert('Link was copied to clipbard!')
}

const createFacebookShareURL = () => {
  return 'http://fb.com'
}

const createTwitterShareURL = () => {
  return 'https://twitter.com'
}

export default ({ blocks }) => (
  <div>
    <Input
      style={{
        width: '100%',
      }}
      action={<Button onClick={() => runCopy()}>copy</Button>}
      onClick={() => runCopy()}
      value={createShareURL()}
      onChange={() => {}}
    />

    <br />
    <br />
    <div
      style={{
        display: 'flex',
      }}>
      <a target={'_blank'} href={createFacebookShareURL()}>
        <Button color={'facebook'}>FaceBook</Button>
      </a>
      <br />
      <br />
      <a target={'_blank'} href={createTwitterShareURL()}>
        <Button color={'twitter'}>Twitter</Button>
      </a>
    </div>
  </div>
)
