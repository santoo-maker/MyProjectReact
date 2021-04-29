import {React, useState} from 'react'
import { Form } from 'react-bootstrap'
import NavBar from './NavBar'
import axios from 'axios'

export default function AddMenSinglesForm() {

    const [PlayerFullName, setPlayerFullName] = useState("")
    const [PlayerSN, setPlayerSN] = useState("")
    const [PlayerRepresentation, setPlayerRepresentation] = useState("");
    const [singleForm, setSingleForm] = useState({});

    console.log(PlayerFullName, PlayerSN, PlayerRepresentation)

    const data = {

        PlayerFullName : PlayerFullName,
        PlayerSN : PlayerSN,
        PlayerRepresentation : PlayerRepresentation
    }



    const addPlayer = () => {

        console.log("data", data)
        axios.post("http://localhost:80/dashboard/players_entry/menssingles", data)
        .then (response => {
            console.log("response", response)

            if(response.data.message === "successfully added player")
            {
                alert(`You have successfully added the player for Men Singles for slot number ${response.data.PlayerSN}`)
            }

            else
            {
                alert(`you have entered the one SN number for two players which is ${response.data.PlayerSN} `)
            }

        })
     
        singleForm.reset();
    
    }


    return (
        <div>
            <NavBar />

            <span className = "flex flex-center fs-20 mb-20x font-upper font-primary">Players Entry Form</span>
            <div className = "container addEvents border border-success" >
            <Form ref = {(form) => setSingleForm(form) }>
                <Form.Group controlId="">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Player Full Name" onChange = {(event) => {return setPlayerFullName(event.target.value)}} />
                </Form.Group>

               
                {/* <Form.Group>
                 
                     <Form.File id="" label="Select Image For Title" />
                     <span className = "suggestion-text">Please choose in jpg Format</span>
                </Form.Group>      */}

                 <Form.Group>
                   <Form.Label>Id.</Form.Label>
                   <Form.Control type = "text" placeholder = "SN number" onChange = {(event)=> {return setPlayerSN(event.target.value)}}  />
                </Form.Group>     

                <Form.Group>
                   <Form.Label>Club/School/College</Form.Label>
                   <Form.Control type = "text" placeholder = "Player Representation" onChange = {(event)=> {return setPlayerRepresentation(event.target.value)}}  />
                </Form.Group>   

    

               
                </Form>

                <button  className = "btn btn-primary border border-success" onClick = {addPlayer}>Add Player</button>
                
            </div>
        </div>
    )
}
