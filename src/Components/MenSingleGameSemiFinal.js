import axios from 'axios'
import {React, useEffect, useState}from 'react'
import { Navbar } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import _ from "lodash";

export default function MenSingleGameSemiFinal() {

    const [MenSinglesPlayerWinner, setMenSinglesPlayerWinner] = useState([]);
    const [Disabled, setDisabled] = useState([false, false]);
    const [Refresh, setRefresh] = useState(false)
    const data = {
        Status : "Semifinalist"
    }
useEffect(() => {
  
    console.log("datatata", data)

    axios.post("http://localhost:80/getMenSinglesPlayerWinner", data)
    .then((response) => {
        console.log("reesponseSemifinal", response.data)
        setMenSinglesPlayerWinner(response.data)
    })
}, [])

const sortedWinner = _.sortBy(MenSinglesPlayerWinner, ["PlayerSlot"])

console.log("sortedWinner", sortedWinner)

const addPlayer = (winnerData, index) => () => {
    console.log(winnerData, index);
   

    const data = {

        PlayerSlot : winnerData.PlayerSlot,
        Status : "Finalist"
      }

      console.log("data", data)

    axios
    .put("http://localhost:80/dashboard/players_entry/menssingles/WinnerUpdate", data)
    .then((response) => {
        console.log("responeWinner", response)
        
        if(response.data.message === "successfully added winner Player"){

            setRefresh(true)
            console.log("seetrefresh true bhayo")
        }
    });
    const disabled = [...Disabled];

    if(index % 2 === 0)
    {
        disabled[index] = [true];
        disabled[index +1] = [true]
        
    }

    if(index % 2 !== 0){
        disabled[index] = [true];
        disabled[index - 1] = [true]
    }

   
    setDisabled(disabled);
    
  };

    return (
        

    <div className="border border-primary mt-10x">
        {

            (sortedWinner || []).map((playerData, index) => (
                
                <div key = {index}>
                    
                    <div>
                        <Table striped bordered size = "sm" >
                                    <tbody>
                                        <tr>
                                            <td>{sortedWinner[index].PlayerSlot}</td>
                                            <td width = "300px">{sortedWinner[index].PlayerFullName} ({sortedWinner[index].PlayerRepresentation})</td>
                                            <td>
                    <button
                      className="btn btn-success"
                      disabled={Disabled[index]}
                      onClick={addPlayer(playerData, index)}
                    >
                      Win
                    </button>
                  </td>
                                        </tr>
                                    </tbody>
                                </Table>
                    {
                        index % 2 === 0 &&
                        <span className = "flex flex-center">VS</span>
                    }
                    
                    </div>

                   
                    
                </div>

            
               
            ))
        
        }

    </div>
            
      
    )
}
