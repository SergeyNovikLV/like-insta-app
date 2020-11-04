import React, { useState, useEffect } from 'react'
import { Container, Form, Button, Card, Alert } from 'react-bootstrap'
// import postFirestore from '../../firebase'


function UploadPost() {
  const [file, setFile] = useState(null);

  const types = ['image/png', 'image/jpeg']
  // const [postTitle, setPostTitle] = useState('');

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.types)) {
      setFile(selected);
    
    } else {
      setFile(null);
      
    }
  }

 
  return (
    <>
      <Container className='home-container'>
        <Card>
          <Card.Body>
              <h4 className='mb-4 justify-content-start'>New post</h4>
                <Form>
                <Form.Group>
                  <Form.Label>Choose file</Form.Label>
                  </Form.Group>
                  <Form.Group>
                  <Form.File 
                      onChange={changeHandler}
                      id="custom-file"
                      label="File is not selected"
                      custom
                    />
                   </Form.Group> 
                   {/* <div className='output'>
                      {error && <div className='error'> {error} </div>}
                    </div> */}
                  <Form.Group>
                    <Form.Label>Post title</Form.Label>
                    <Form.Control 
                     type='text' 
                      placeholder='Some title here'/> 
                  </Form.Group>
                  <div className='d-flex justify-content-end mt-2'>
                    <Button 
                   
                      variant='primary'
                      >Create
                    </Button>
                  </div>
              </Form>
              
              </Card.Body>
            </Card>
         
      </Container>
    </>
  )
}

export default UploadPost
