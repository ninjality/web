import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Title from '../components/Title'
import { Button } from '../components/Button'
import { Input, Textarea } from '../components/Input'
import { Form, Group } from '../components/Form'
import { AccessibleLabel } from '../components/ScreenReader'

const FORM_ENDPOINT = 'https://jumprock.co/mail/ninjality'
const FORM_REDIRECT = 'https://ninjality.com/contact-sent'

class Contact extends Component {
  render() {
    return (
      <Container>
        <Helmet title="Contact">
          <link rel="canonical" href="https://ninjality.com/contact" />
          <meta name="description" content="Contact the Ninjality team." />
        </Helmet>
        <Title hasBackButton>Send Us An Email</Title>
        <Form action={FORM_ENDPOINT} method="post">
          <input
            type="text"
            name="trapit"
            value=""
            style={{ display: 'none' }}
          />
          <input type="hidden" name="replyto" value="%email" />
          <input type="hidden" name="after" value={FORM_REDIRECT} />

          <Group>
            <AccessibleLabel htmlFor="nameInput">Name</AccessibleLabel>
            <Input
              type="text"
              name="name"
              id="nameInput"
              placeholder="Name"
              required
            />
          </Group>

          <Group>
            <AccessibleLabel htmlFor="emailInput">Email</AccessibleLabel>
            <Input
              type="text"
              name="email"
              id="emailInput"
              placeholder="Email"
              required
            />
          </Group>

          <Group>
            <AccessibleLabel htmlFor="messageInput">Message</AccessibleLabel>
            <Textarea
              name="message"
              id="messageInput"
              placeholder="Message"
              required
            />
          </Group>

          <Group>
            <Button type="submit">Send</Button>
          </Group>
        </Form>
      </Container>
    )
  }
}

export default Contact
