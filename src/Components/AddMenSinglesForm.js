import { React, useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import NavBar from "./NavBar";
import axios from "axios";
import AddMenSingles from "./AddMenSingles";
import { useHistory } from "react-router-dom";

export default function AddMenSinglesForm() {
  const [PlayerFullName, setPlayerFullName] = useState("");
  const [PlayerSN, setPlayerSN] = useState("");
  const [PlayerRepresentation, setPlayerRepresentation] = useState("");
  const [singleForm, setSingleForm] = useState({});
  const [MenSinglesPlayer, setMenSinglesPlayer] = useState([]);
  const [TieSheetTie, setTieSheetTie] = useState(false);

  const history = useHistory();

  const data = {
    PlayerFullName: PlayerFullName,
    PlayerSN: PlayerSN,
    PlayerRepresentation: PlayerRepresentation,
  };

 

  useEffect(() => {
    axios.get("http://localhost:80/getMenSinglesPlayer").then((response) => {
      setMenSinglesPlayer(response.data);
      console.log("mens", MenSinglesPlayer)
    });
  }, []);

  const addPlayer = () => {
    console.log("data", data);
    axios
      .post("http://localhost:80/dashboard/players_entry/menssingles", data)
      .then((response) => {
        console.log("response", response);

        // if(response.data.message === "successfully added player")
        // {
        //     alert(`You have successfully added the player for Men Singles for slot number ${response.data.PlayerSN}`)
        // }

        // else
        // {
        //     alert(`you have entered the one SN number for two players which is ${response.data.PlayerSN} `)
        // }
    
      });

    singleForm.reset();
  };

  const makeTieSheet = () => {
    const TotalPlayers = MenSinglesPlayer.length;
    if (TotalPlayers <= 8) {
      setTieSheetTie(true);
    }
  };

  const goToMenSinglesTieSheet = () => {
    history.push("/dashboard/players_entry/menssingles/tie-sheet");
  };

  return (
    <div>
      <NavBar />

      <span className="flex flex-center fs-20 mb-20x font-upper font-primary">
        Players Entry Form
      </span>
      <div className="container addEvents border border-success">
        <Form ref={(form) => setSingleForm(form)}>
          <Form.Group>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Player Full Name"
              onChange={(event) => {
                return setPlayerFullName(event.target.value);
              }}
            />
          </Form.Group>

          {/* <Form.Group>
                 
                     <Form.File id="" label="Select Image For Title" />
                     <span className = "suggestion-text">Please choose in jpg Format</span>
                </Form.Group>      */}

          <Form.Group>
            <Form.Label>Id.</Form.Label>
            <Form.Control
              type="text"
              placeholder="SN number"
              onChange={(event) => {
                return setPlayerSN(event.target.value);
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Club/School/College</Form.Label>
            <Form.Control
              type="text"
              placeholder="Player Representation"
              onChange={(event) => {
                return setPlayerRepresentation(event.target.value);
              }}
            />
          </Form.Group>
        </Form>

        <button
          className="btn btn-primary border border-success"
          onClick={addPlayer}
        >
          Add Player
        </button>
      </div>
      {MenSinglesPlayer.length > 0 && (
        <div className="container border border-primary mt-10x">
          <span className="fs-20 flex flex-center mt-20x mb-20x">
            Players For Mens Singles
          </span>
          <div>
            {(MenSinglesPlayer || []).map((playerData, index) => (
              <div key = {index}>
                  {
                      console.log("MMM", playerData)
                  }
                <AddMenSingles playerData={playerData} index={index} />
              </div>
            ))}
          </div>

          <button
            className="btn btn-primary flex flex-center"
            onClick={makeTieSheet}
          >
            Make Tie sheet
          </button>
        </div>
      )}
      {
        MenSinglesPlayer.length === 0 && (
        <div>
          <span className=" flex flex-center fs-20 mt-20x">
            No players has been inserted
          </span>
        </div>
      )
      }

      <div>{TieSheetTie && goToMenSinglesTieSheet()}</div>
    </div>
  );
}
