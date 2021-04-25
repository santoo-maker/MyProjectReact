import React from 'react'
import NavBar from './NavBar'
import '../scss/addEvents.scss'
import {Form} from 'react-bootstrap'

export default function AddEvents() {
    return (
        <div>
            <NavBar />
            <div className = "container addEvents border border-success" >
            <Form>
                <Form.Group controlId="">
                    <Form.Label>Game Title</Form.Label>
                    <Form.Control type="text" placeholder="Title of your Event" />
                </Form.Group>
               
                <Form.Group>
                 
                     <Form.File id="" label="Select Image For Title" />
                     <span className = "suggestion-text">Please choose in jpg Format</span>
                </Form.Group>     
            
                <Form.Group controlId="">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder = "Details of your event including date, time, venue" />
                </Form.Group>

               
                </Form>

                <button  className = "btn btn-primary border border-success">Add Event</button>
            </div>
        </div>
    )
}
