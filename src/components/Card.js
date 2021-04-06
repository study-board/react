import React from 'react'
import Draggable from 'react-draggable'

const Card = (props) => (

    <Draggable>
        <div className="card">
            <div className="drag-marker"></div>
            <iframe width={props.width} height={props.height} title={props.title} src={props.url}></iframe>
        </div>
    </Draggable>

)

export default Card