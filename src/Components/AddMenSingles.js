import {React, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faTrash, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-awesome-modal';

 const AddMenSingles = ({playerData}) => {

    const [visible, setVisible] = useState(false)

    const openEditModal = () => {

        setVisible(true)
    }
    const closeEditModal = () => {

        setVisible(false)
    }


    return (
        <div className=" container">
             
        <div className="flex flex-between mb-2x flex-middle fs-18 link" >

           
            <div className = "p-5x">
                <span >{playerData.PlayerSN}</span>
            </div>
            <div>
                {playerData.PlayerFullName} 
            </div>
            <div className="p-5x">
    
                <span>{playerData.PlayerRepresentation}</span>
            </div>
           
            <div className="curP">
                <FontAwesomeIcon icon={faEdit} onClick = {openEditModal} />
                <Modal visible={visible} width="400" height="300" effect="fadeInUp">
                    <FontAwesomeIcon icon ={faWindowClose} onClick = {closeEditModal} className = "float-right" />
                    <div>
                        
                    
                    </div>
                </Modal>
            </div>
            <div  className="curP">
                <FontAwesomeIcon icon={faTrash} />
            </div>
        </div>

        <hr></hr>
    </div>
    )
}

export default AddMenSingles
