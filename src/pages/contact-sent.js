import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Title from '../components/Title'
import { SuccessAlert } from '../components/Alert'

class ContactSent extends Component {
  render() {
    return (
      <Container>
        <Helmet title="Contact">
          <meta name="robots" content="noindex" />
        </Helmet>
        <Title hasBackButton>Send Us An Email</Title>
        <SuccessAlert>
          Your message has been sent! We'll get back to you as soon as possible.
        </SuccessAlert>
      </Container>
    )
  }
}

export default ContactSent
