import {
  Button,
  Icon,
  IconButton,
  InputAdornment,
  TextField,
} from '@material-ui/core'

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

export const Share = () => (
  <div>
    <TextField
      style={{
        width: '100%',
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position={'end'}>
            <IconButton
              variant={'default'}
              onClick={e => {
                e.stopPropagation()
                runCopy()
              }}>
              <Icon>file_copy</Icon>
            </IconButton>
          </InputAdornment>
        ),
      }}
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
        <Button variant={'outlined'} style={{ marginRight: '20px' }}>
          Share with FaceBook
        </Button>
      </a>
      <br />
      <br />
      <a target={'_blank'} href={createTwitterShareURL()}>
        <Button variant={'outlined'}>Share with Twitter</Button>
      </a>
    </div>
  </div>
)
