import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-awesome-modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

const AddMenSingles = ({ playerData, index }) => {
  const [PlayerFullName, setPlayerFullName] = useState("");
  const [PlayerSN, setPlayerSN] = useState("");
  const [PlayerRepresentation, setPlayerRepresentation] = useState("");
  const [PlayerSlot, setPlayerSlot] = useState();
  // const [singleForm, setSingleForm] = useState({});
  // const [MenSinglesPlayer, setMenSinglesPlayer] = useState([])


  const [visible, setVisible] = useState(false);


  const openEditModal = () => {
    setVisible(true);
  };
  const closeEditModal = () => {
    setVisible(false);
  };

  const data = {
      PlayerFullName : PlayerFullName,
    PlayerSN: PlayerSN,
    PlayerRepresentation : PlayerRepresentation,
    PlayerSlot: PlayerSlot,
  };

  const updatePlayerInfo = () => {
    console.log("data", data);

    axios.put("http://localhost:80/updateMenSingle", data).then((response) => {
      console.log("response", response);
    });
  };

  return (
    <div className=" container">
      <div className="flex flex-between mb-2x flex-middle fs-18 link">
        <div className="curP p-5x">
          <span>{playerData.PlayerSN}</span>
        </div>
        <div className="curP p-5x">{playerData.PlayerFullName}</div>
        <div className="curP p-5x">
          <span>{playerData.PlayerRepresentation}</span>
        </div>

        <div className="curP p-5x">
          <FontAwesomeIcon
            icon={faEdit}
            onClick={() => {
              openEditModal();
            }}
          />
          <Modal visible={visible} width="500" height="400" effect="fadeInUp">
            <FontAwesomeIcon
              icon={faWindowClose}
              onClick={closeEditModal}
              className="float-right m-5x"
            />
            <div>
              <Form>
                <Form.Group controlId="">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={playerData.PlayerFullName}
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
                    placeholder={playerData.PlayerSN}
                    onChange={(event) => {
                      return setPlayerSN(event.target.value);
                    }}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Club/School/College</Form.Label>
                  <Form.Control
                    type="text"
                    value={playerData.PlayerRepresentation}
                    onChange={(event) => {
                      return setPlayerRepresentation(event.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Assign Slot Number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Assign Slot Number for PLayer"
                    onChange={(event) => {
                      return setPlayerSlot(event.target.value);
                    }}
                  />
                </Form.Group>
              </Form>
            </div>

            <button className="btn btn-primary" onClick={updatePlayerInfo}>
              Update
            </button>
          </Modal>
        </div>
        <div className="curP pr-10x">
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>

      <hr></hr>
    </div>
  );
};

export default AddMenSingles;
