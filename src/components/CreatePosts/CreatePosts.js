import React from 'react'
import {
  Card,
  Button,
  Container

 } from 'react-bootstrap'; 

export default function CreatePosts({ image, text }) {
  return (
  <Container>
    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>New post</Card.Title>
        <img className='post-image' src={image} alt='post' />
        <Card.Text>
        <span>SN</span>
        </Card.Text>
        <Card.Text>
        {text}
        </Card.Text>
       
      </Card.Body>
      <Button variant="primary">Go somewhere</Button>
    </Card>
    </Container>

  )
}
