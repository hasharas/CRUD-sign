import React from 'react'
import  { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'

const Create = ()=> {
      const [firstName, setFirstName] = useState('');
      const [lastName, setLastName] = useState('');
      const [Email, setEmail] = useState(false);
      const postData = () => {
          console.log(firstName);
          console.log(lastName);
          console.log(Email);
      }

return (
      <div>
      <Form className="create-form">
        <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value) }/>
        </Form.Field>
        <Form.Field>
            <label>Email</label>
            <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value) } />
        </Form.Field>
        <Button onClick={postData} type='submit'>Submit</Button>
    </Form>
    </div>
 )
}

export default Create;