import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Title from '../components/Title'
import { Alert } from '../components/Alert'

class Error404 extends Component {
  render() {
    return (
      <Container>
        <Helmet title="Error 404" />
        <Title>Error 404</Title>
        <Alert>
          Sorry, this page does not exist. <Link to="/">Go to home page</Link>.
        </Alert>
      </Container>
    )
  }
}

export default Error404
