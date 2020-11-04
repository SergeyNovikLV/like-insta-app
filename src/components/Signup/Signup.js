import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert, Container } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import Logo from '../Icons/Logo'

export default function Signup() {
  const emailRef = useRef() 
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

 async function handleSubmit(e) {
    e.preventDefault()
    
    if (passwordRef.current.value !==
      passwordConfirmRef.current.value) {
        return setError('Password do not match')
      }
    
    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push('/')
    } catch {
      setError('Failed to create an account')
    }
    setLoading(false)
}
  
  return (
    <>
     <Container
        className='d-flex align-items-center flex-column justify-content-center'
        style={{ minHeight: '100vh' }} >
           <Logo />
           <h2 className='text-center mt-1 mb-1'>PhotoZ</h2>
            <div className='w-100 mt-1' style={{ maxWidth: '400px' }}>
          <Card>
            <Card.Body>
              <h4 className='mb-4 justify-content-start'>Sign up</h4>
        
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

                <Form.Group id='password-confirm'>
                  <Form.Label>Password confirmation</Form.Label>
                  <Form.Control type='password' ref={passwordConfirmRef} required /> 
                </Form.Group>
                <div className='d-flex justify-content-end mt-2'>
                  <Button disabled={loading} type='subbmit'>Sign Up</Button>
                </div>
              </Form>
            </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
              <Link to='/signin'>Log in</Link>
            </div>
          </div>
      </Container>
      
    </>
  )
}





