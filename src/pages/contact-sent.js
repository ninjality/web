import React, { Component } from 'react'
import Container from '../components/Container'
import { SuccessAlert } from '../components/Alert'

class ContactSent extends Component {
  render() {
    return (
      <Container>
        <SuccessAlert>
          Your message has been sent! We'll get back to you as soon as possible.
        </SuccessAlert>
      </Container>
    )
  }
}

export default ContactSent
