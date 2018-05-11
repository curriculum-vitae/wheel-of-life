import { Button, Divider, Image } from 'semantic-ui-react'
import { Col, Container, Hidden, Row, Visible } from 'react-grid-system'

import { AppBar } from 'features/AppBar'
import { Link } from 'react-router-dom'
import React from 'react'
import { red } from 'utils/colors'

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
      }}>
      <Row>
        <Col xs={12} md={4}>
          <Image
            style={{
              float: 'right',
              marginBottom: '12px',
            }}
            src={
              'https://www.wikihow.com/images/thumb/3/38/Draw-a-Cartoon-Face-%28Emotions%29-Step-01.jpg/aid689960-v4-728px-Draw-a-Cartoon-Face-%28Emotions%29-Step-01.jpg'
            }
            size={'small'}
            circular
          />
        </Col>
        <Col xs={12} md={6}>
          <div>
            <h1>«Hey! I’ve tried it for myself and it changed my life! </h1>
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

export const Welcome = () => (
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
      <Visible xs sm>
        <Divider />
      </Visible>
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
