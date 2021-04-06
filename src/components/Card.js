import React from 'react'
import Draggable from 'react-draggable'
import {FaWindowClose} from 'react-icons/fa';

const Card = (props) => (

    <Draggable>
        <div className="card">
            {props.permanent || (<button onClick={props.removeAction} className="close-marker"><FaWindowClose /></button>)}
            <div className="drag-marker"></div>
            <iframe width={props.width} height={props.height} title={props.title} src={props.url}></iframe>
        </div>
    </Draggable>

)

export default Card