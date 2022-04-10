import React, { FC } from "react"
import "./modal.css"
type IProps = {
    show: boolean
    charInfo: ResultChar
    onClose: any
}

type ResultChar = {
    name: string
    status: string
    species: string
    gender: string
    origin: {
        name: string
    }
    location: {
        name: string
    }
    image: string
}

const Modal:FC<IProps> = (props) =>{
    if(!props.show){
        return null
    }

return (
    <div className="modal">
        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">{props.charInfo.name}</h4>
            </div>
            <div className="modal-body">
                <strong> Status: </strong>{props.charInfo.status}<br/>
                <strong> Specie: </strong>{props.charInfo.species}<br/>
                <strong> Gender: </strong>{props.charInfo.gender}<br/>
                <strong> Origin: </strong>{props.charInfo.origin.name}<br/>
                <strong> Location: </strong>{props.charInfo.location.name}<br/>
            </div>
            <div className="modal-footer">
                <button className="button" onClick={props.onClose}>Close</button>
            </div>
        </div>
    </div>
)
}

// br es salto de linea
export default Modal;












//https://medium.com/tinyso/how-to-create-a-modal-component-in-react-from-basic-to-advanced-a3357a2a716a