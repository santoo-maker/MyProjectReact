import React, { useState } from 'react'
import NavBar from './NavBar'
import '../scss/addEvents.scss'
import {Form} from 'react-bootstrap'
import axios from 'axios'

export default function AddEvents() {

    const [GameTitle, setGameTitle] = useState("")
    const [Description, setDescription] = useState("")
    // const [validate, setValidate] = useState(false)

    console.log("gameTitle", GameTitle)

    const data = {
        GameTitle : GameTitle,
        Image : "Image.jpg",
        Description : Description
    }


    const addEvent = () => {
        
        axios.post("http://localhost:80/addEvent", data)
        .then (response => {
            console.log("response", response)

            if(response.data.message === "Fields Must not be Empty")
            {
                alert("Fields Must not be Empty")
            }
            else{
                alert("Event Added Successfully")
            }
        })

       
      
    }


    return (
        <div>
            <NavBar />
            <span className = "flex flex-center fs-20 mb-20x font-upper font-primary">Fill Up The Form</span>
            <div className = "container addEvents border border-success" >
            <Form>
                <Form.Group controlId="">
                    <Form.Label>Game Title</Form.Label>
                    <Form.Control type="text" placeholder="Title of your Event" onChange = {(event) => {return setGameTitle(event.target.value)}} />
                </Form.Group>
               
                <Form.Group>
                 
                     <Form.File id="" label="Select Image For Title" />
                     <span className = "suggestion-text">Please choose in jpg Format</span>
                </Form.Group>     
            
                <Form.Group controlId="">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder = "Details of your event including date, time, venue" onChange = {(event) => {return setDescription(event.target.value)}} />
                </Form.Group>

               
                </Form>

                <button  className = "btn btn-primary border border-success" onClick = {addEvent}>Add Event</button>
            </div>
        </div>
    )
}
