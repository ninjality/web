import React, { Component } from 'react'
import Container from '../components/Container'
import { Button } from '../components/Button'
import { Input, Textarea } from '../components/Input'
import { Form, Group } from '../components/Form'

class Contact extends Component {
  render() {
    return (
      <Container>
        <Form action="https://jumprock.co/mail/ninjality" method="post">
          <input type="text" name="trapit" value="" style={{ display: 'none' }} />
          <input type="hidden" name="replyto" value="%email" />
          <input type="hidden" name="after" value="https://ninjality.com/contact-sent" />

          <Group>
            <Input type="text" name="name" placeholder="Name" required />
          </Group>

          <Group>
            <Input type="text" name="email" placeholder="Email" required />
          </Group>

          <Group>
            <Textarea name="message" placeholder="Message" required />
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
