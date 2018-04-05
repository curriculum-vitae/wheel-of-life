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
  const dest = createShareURL()
  return `https://www.facebook.com/sharer/sharer.php?u=${dest}`
}

const createTwitterShareURL = () => {
  const dest = createShareURL()
  return `http://www.twitter.com/share?url=${dest}`
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
        <Button color={'facebook'}>Share with FaceBook</Button>
      </a>
      <br />
      <br />
      <a target={'_blank'} href={createTwitterShareURL()}>
        <Button color={'twitter'}>Share with Twitter</Button>
      </a>
    </div>
  </div>
)
