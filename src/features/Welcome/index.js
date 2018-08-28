import { AppBar } from 'features/AppBar'
import Attention from 'features/Welcome/Attention'
import CallToAction from 'features/Welcome/CallToAction'
import React from 'react'

export const Welcome = () => (
  <React.Fragment>
    <AppBar />
    <br />
    <br />
    <br />
    <Attention />
    <br />
    <br />
    <br />
    <CallToAction />
  </React.Fragment>
)
