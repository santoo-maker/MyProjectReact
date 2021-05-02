import { React, useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import _ from "lodash";

export default function MenSingleGame() {
  const [MenSinglesPlayer, setMenSinglesPlayer] = useState([]);
  const [checkedWin, setCheckedWin] = useState(false)
  const [checkedLoss, setCheckedLoss] = useState(false)

  // const [ShowVS , setShowVS] = useState("")
  // var ShowVs = false

  // const Index = index  + 1

  // {
  //     if(Index % 2 !== 0)
  //     {
  //        ShowVs = true
  //     }
  // }

  console.log("MenSinglesPlayer", MenSinglesPlayer);

  useEffect(() => {
    axios.get("http://localhost:80/getMenSinglesPlayer").then((response) => {
      setMenSinglesPlayer(response.data);
    });
  }, []);

  const sortedPlayer = _.sortBy(MenSinglesPlayer, ["PlayerSlot"]);

  //   return (
  //     <div>
  //       {(sortedPlayer || []).map((player, index) => (
  //         <div key={index}>{player.PlayerFullName}</div>
  //       ))}
  //     </div>
  //   );

  console.log("sortedPlayer", sortedPlayer)

  if(checkedWin === true){
      console.log("checkWin", checkedWin)
  }

  return (
    <div className="border border-success mt-10x">
      {sortedPlayer.map((data, index) => (
        <div key={index}>
          <div>
            {index % 2 === 0 && (
              <Table striped bordered hover size="sm">
                <tbody width="100px">
                  <tr>
                    <td>{MenSinglesPlayer[index].PlayerSN}</td>

                    <td>
                      {sortedPlayer[index].PlayerFullName} (
                      {sortedPlayer[index].PlayerRepresentation})
                    </td>
                    <td>
                        <input type = "checkbox" onChange = {e => {return setCheckedWin(e.target.checked)}} /> Win
                    </td>
                    <td>
                        <input type = "checkbox" /> Loss
                    </td>
                    
                  </tr>
                </tbody>
              </Table>
            )}
          </div>

          <div>
            {index % 2 == 0 && <span className="flex flex-center">VS</span>}
          </div>

          <div>
            {index % 2 !== 0 && (
              <Table striped bordered hover size="sm">
                <tbody width="100px">
                  <tr>
                    <td>{MenSinglesPlayer[index].PlayerSN}</td>

                    <td>
                      {sortedPlayer[index].PlayerFullName} (
                      {sortedPlayer[index].PlayerRepresentation})
                    </td>
                    <td>
                        <input type = "checkbox" /> Win
                    </td>
                    <td>
                        <input type = "checkbox" /> Loss
                    </td>
                  </tr>
                </tbody>
              </Table>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
