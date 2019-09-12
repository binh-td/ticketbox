import React from "react"
import { Form, Button } from 'react-bootstrap'

const LoginForm = props => {
  return (
    <div style={{ width: '500px', height: '500px' }} >
      <Form>
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" onChange={props.usernameOnchange} value={props.username} />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={props.passwordOnchange} value={props.password} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={props.submit} >
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default LoginForm
