import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert, Container } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function Signin() {
  const emailRef = useRef() 
  const passwordRef = useRef()
  const { signin } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

 async function handleSubmit(e) {
    e.preventDefault()
    
    try {
      setError('')
      setLoading(true)
      await signin(emailRef.current.value, passwordRef.current.value)
      history.push('/')
    } catch {
      setError('Failed to sign in')
    }
    setLoading(false)
}
  
  return (
    <>
     <Container
        className='d-flex align-items-center justify-content-center'
        style={{ minHeight: '100vh' }} >
          <div className='w-100' style={{ maxWidth: '400px' }}>
          <Card>
            <Card.Body>
              <h4 className='mb-4 justify-content-start'>Sign in</h4>
        
              {error && <Alert variant='danger'>{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id='email'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email' ref={emailRef} required /> 
                </Form.Group>
              
                <Form.Group id='password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' ref={passwordRef} required /> 
                </Form.Group>

                <div className='d-flex justify-content-between mt-2'>
                <Link to='/forgot-password'>Forgot password</Link><Button disabled={loading} type='subbmit'>Sign In</Button>
                </div>
              </Form>
            </Card.Body>
            </Card>
        <div className='w-100 text-center mt-2'>
        <Link to='/signup'>Sign up</Link>
        </div>
        </div>
      </Container>
      
    </>
  )
}





