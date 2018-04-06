import { Button, Grid } from 'semantic-ui-react'
import { Col, Container, Hidden, Row } from 'react-grid-system'

import AppBar from 'features/AppBar'
import { Link } from 'react-router-dom'
import React from 'react'
import { red } from 'utils/colors'

const Point = ({ title, text }) => (
  <div>
    <h1>{title}</h1>
    <p>{text}</p>
  </div>
)

const AttentionBox = () => (
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
        textAlign: 'center',
      }}>
      <br />
      <br />
      <h1>I’ve tried it for myself. It changed my left. </h1>

      <h1>
        It might not work for you. You are two minutes away to figure this out.
      </h1>
      <br />
      <br />
    </div>
  </div>
)

export default () => (
  <div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
      <AttentionBox />
    </div>

    <Container fluid style={{ margin: '0', padding: '0' }}>
      <Row style={{ marginBottom: '0px' }}>
        <Col xs={12} md={6}>
          <div style={{ padding: '40px' }}>
            <h1 style={{ fontSize: '60px' }}>Life happens to be imbalance</h1>
            <br />
            <br />

            <h2>Eventually, it causes troubles.</h2>
          </div>
        </Col>
        <Hidden xs sm>
          <Col md={6} style={{ padding: '0' }}>
            <img
              style={{
                width: '100%',
              }}
              alt={'Background'}
              src={'/images/main-1.jpg'}
            />
          </Col>
        </Hidden>
      </Row>
      <Row style={{ marginTop: '0px' }}>
        <Hidden xs sm>
          <Col md={6} style={{ padding: '0' }}>
            <img
              style={{
                width: '100%',
              }}
              alt={'Background'}
              src={'/images/main-2.jpg'}
            />
          </Col>
        </Hidden>
        <Col md={6}>
          <div style={{ padding: '40px' }}>
            <h1
              style={{
                fontSize: '60px',
              }}>
              And we have NO solution
            </h1>
            <h3>But!</h3>
            <h3>
              Good solution is a matter of good questions. And this what we do
              have.
            </h3>
            <h3>Remember, you're just two minutes away.</h3>
            <br />
            <br />
            <div style={{ textAlign: 'center' }}>
              <Link to={'/quiz'}>
                <Button color={'orange'} size={'massive'}>
                  Start questioning your life
                </Button>
                <p>it's completely free</p>
                <br />
                <br />
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
)
