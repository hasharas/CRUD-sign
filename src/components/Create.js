import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const Create = () => (
      <Form className="create-form">
        <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
            <label>Email</label>
            <input type='email' placeholder='Email' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
    </Form>
)

export default Create;