import { Button, Divider } from 'semantic-ui-react'
import { Col, Container, Hidden, Row, Visible } from 'react-grid-system'

import { Link } from 'react-router-dom'
import React from 'react'

export default () => (
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
)
