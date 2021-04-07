import React from 'react'
import Draggable from 'react-draggable'
import {FaWindowClose} from 'react-icons/fa';

const Card = (props) => {

    const handleDrag = (e) => {

        console.dir(e);

        props.updateCards(
            props.cards.map((c) => {

                if (c !== props.card) {
                    return c;
                }

                return {
                    ...c,
                    x: (e.x - props.card.width + e.offsetX)/window.screen.width,
                    y: (e.y - props.card.height - e.offsetY)/window.screen.height
                }

            })
        );
        
    }

    console.dir({
        x: props.card.x ? props.card.x * window.screen.width : 0,
        y: props.card.y ? props.card.y * window.screen.height : props.index * 10
    })

    return (
        <Draggable
            defaultPosition={{
                x: props.card.x ? props.card.x * window.screen.width : 0,
                y: props.card.y ? props.card.y * window.screen.height : props.index * 10
            }}
            onStop={handleDrag}
        >
            <div className="card">
                {props.card.permanent || (<button onClick={props.removeAction} className="close-marker"><FaWindowClose /></button>)}
                <div className="drag-marker"></div>
                <iframe width={props.card.width} height={props.card.height} title={props.card.title} src={props.card.url}></iframe>
            </div>
        </Draggable>
    )

}

export default Card