import React, {useState} from 'react';
import Modal from 'react-modal';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      backgroundColor: "#FFF",
      boxShadow: "10px 10px 105px -45px rgba(0,0,0,0.75)",
      border: "1px solid #b3b3b3"
    }
};

const NewCardModal = (props) => {

    const {cards, updateCards, isOpen, closeModal, afterOpenModal} = props;
    
    const [EFHeight, setEFHeight] = useState(300);
    const [EFWidth, setEFWidth] = useState(500);

    const submitNewCardForm = (e) => {

        e.preventDefault();
        closeModal();
        updateCards(
            cards.concat({
                url: document.getElementById("new").value,
                removable: true,
                width: EFWidth,
                height: EFHeight
            })
        )

    }
    
    return (

        <Modal
            isOpen={isOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Add new card"
        >

        <h2>Add a new card</h2>

        <form onSubmit={submitNewCardForm}>

            <table>

                <tbody>

                    <tr>

                        <td><label htmlFor="new">Card embed URL</label></td>
                        <td><input required={true} type="url" id="new" /></td>

                    </tr>

                    <tr>

                        <td><label htmlFor="width">Width of card</label></td>
                        <td><input required={true} type="range" id="width" step={1} value={500} min={100} max={900} onInput={(e) => setEFWidth(e.target.value)} /></td>

                    </tr>

                    <tr>

                        <td><label htmlFor="height">Height of card</label></td>
                        <td><input required={true} type="range" id="height" step={1} value={300} min={100} max={700} onInput={(e) => setEFHeight(e.target.value)} /></td>

                    </tr>

                </tbody>

            </table>

            <div
                className="example-frame"
                style={{
                    height: EFHeight + "px",
                    width: EFWidth + "px"
                }}
            >
                <div>
                    <b>This is how your card will look.</b><br />
                    <code>
                        Width: {EFWidth}px<br />
                        Height: {EFHeight}px <br/>
                    </code>
                </div>
            </div> <br />
            
            <input type="submit" className="good button" value="Go" />
            <button className="bad" onClick={closeModal}>Close</button>

        </form>
        
    </Modal>

    )
}

export default NewCardModal
