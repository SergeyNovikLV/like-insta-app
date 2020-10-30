import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert, Container } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
  const emailRef = useRef() 
  // const passwordRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
 

 async function handleSubmit(e) {
    e.preventDefault()
    
    try {
      setMessage('')
      setError('')
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage('Check your inbox')
    } catch {
      setError('Failed to reset password')
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
             {message && <Alert variant='success'>{message}</Alert>}
             <Form onSubmit={handleSubmit}>
               <Form.Group id='email'>
                 <Form.Label>Email</Form.Label>
                 <Form.Control type='email' ref={emailRef} required /> 
               </Form.Group>
          
               <div className='d-flex justify-content-between mt-2'>
               <Link to='/signin'>Sign in</Link> <Button disabled={loading} type='subbmit'>Reset password</Button>
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
