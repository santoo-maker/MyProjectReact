import { React, useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import _ from "lodash";

export default function MenSingleGame() {
  const [MenSinglesPlayer, setMenSinglesPlayer] = useState([]);
 
  const [LossPlayer, setLossPlayer] = useState({});
  const [Disabled, setDisabled] = useState([false, false]);
  const [Refresh, setRefresh] = useState(false)
  const [Lost, setLost] = useState("")

  const data1 = {
    Status : "Semifinalist"
}


  useEffect(() => {
      const index = localStorage.getItem('index')
      console.log("localIndex",index)
    axios.get("http://localhost:80/getMenSinglesPlayer").then((response) => {
      setMenSinglesPlayer(response.data);

 

    });
  }, []);

  const sortedPlayer = _.sortBy(MenSinglesPlayer, ["PlayerSlot"]);

  console.log("LossPlayer", LossPlayer.PlayerRepresentation);


  const addPlayer = (winnerData, index) => () => {
    console.log(winnerData, index);
   

    const data = {

        PlayerFullName : winnerData.PlayerFullName,
        PlayerSN : winnerData.PlayerSN,
        PlayerRepresentation : winnerData.PlayerRepresentation,
        PlayerSlot : winnerData.PlayerSlot,
        Status : "Semifinalist"
      }

      console.log("data", data)

    axios
    .post("http://localhost:80/dashboard/players_entry/menssingles/Winner", data)
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

  const lossPlayer = (looserData, index) => () => {
    const disabled = [...Disabled];

    disabled[index] = true;

    setDisabled(disabled);
  }

  console.log("Disabled", Disabled);

  return (
    <div className="border border-primary mt-10x mb-10x">
      {sortedPlayer.map((playerData, index) => (
        <div key={index}>
          <div>
            <Table striped bordered hover variant = "" size="sm">
              <tbody width="100px">
                <tr>
                  <td>{sortedPlayer[index].PlayerSlot}</td>

                  <td width = "310px">
                    {sortedPlayer[index].PlayerFullName} (
                    {sortedPlayer[index].PlayerRepresentation})
                  </td>
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

            {index % 2 == 0 && <span className="flex flex-center">VS</span>}
          </div>
        </div>
      ))}
    </div>
  );
}
