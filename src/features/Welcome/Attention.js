import { Button, Divider, Image } from 'semantic-ui-react'
import { Col, Container, Hidden, Row, Visible } from 'react-grid-system'

import { AppBar } from 'features/AppBar'
import { Link } from 'react-router-dom'
import React from 'react'
import { red } from 'utils/colors'

export default () => (
  <div
    style={{
      backgroundColor: red[700],
      color: 'white',
      width: '100%',
    }}>
    <AppBar />
    <div
      style={{
        padding: '40px',
      }}>
      <Row>
        <Col xs={12} md={5}>
          <Image
            style={{
              float: 'right',
              marginBottom: '12px',
            }}
            src={'/images/ava.jpg'}
            size={'small'}
          />
        </Col>
        <Col xs={12} md={5}>
          <div>
            <h1>«Hey! I’ve tried it for myself and it changed my life.</h1>
            <h1>
              It might not work for you, but you are two minutes away to figure
              this out.»
            </h1>
            <h3 style={{ textAlign: 'right' }}>
              © co-creator of wheel-of-life.guru
            </h3>
            <br />
            <br />
          </div>
        </Col>
      </Row>
    </div>
  </div>
)
