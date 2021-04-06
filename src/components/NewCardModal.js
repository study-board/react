import React, {useState} from 'react';
import Modal from 'react-modal';
import config from '../config/config';

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
    const [EFSrc, setEFSrc] = useState("assets/cards/modal_example.html");

    const submitNewCardForm = (e) => {

        e.preventDefault();
        closeModal();
        updateCards(
            cards.concat({
                url: EFSrc,
                removable: true,
                width: EFWidth,
                height: EFHeight
            })
        )

    };

    const updateSimulation = (e) => {

        if (e.target.checkValidity()) {
            setEFSrc(e.target.value);
        } else {
            setEFSrc("assets/cards/modal_example.html#invalid")
        }

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
                        <td><input value={EFSrc} required={true} onChange={updateSimulation} type="url" id="new" /></td>

                    </tr>

                    <tr>

                        <td class="examples" colSpan={2}>

                            Examples: 
                            { config.exampleCards.map((c) => (
                                <button className="link-button" onClick={(e) => {
                                    c.height && setEFHeight(c.height);
                                    c.width && setEFWidth(c.width);
                                    c.src && setEFSrc(c.src);
                                    e.preventDefault();
                                }}>{c.displayName}</button>
                            )) }

                        </td>

                    </tr>

                    <tr>

                        <td><label htmlFor="width">Width of card</label></td>
                        <td><input required={true} type="range" id="width" step={1} value={EFWidth} min={100} max={900} onInput={(e) => setEFWidth(e.target.value)} /></td>

                    </tr>

                    <tr>

                        <td><label htmlFor="height">Height of card</label></td>
                        <td><input required={true} type="range" id="height" step={1} value={EFHeight} min={100} max={700} onInput={(e) => setEFHeight(e.target.value)} /></td>

                    </tr>

                </tbody>

            </table>

            <h3>Card simulation</h3>

            <iframe
                className="example-frame"
                src={EFSrc} 
                style={{
                    height: EFHeight + "px",
                    width: EFWidth + "px"
                }}
                title="Example Frame"
            />

            {/* <div
                className="example-frame"
                style={{
                    height: EFHeight + "px",
                    width: EFWidth + "px"
                }}
            >
                <div>
                    <b>This is how your card will look.</b><br />
                    <code style={{fontSize: "0.8rem"}}>
                        Width: {EFWidth}px<br />
                        Height: {EFHeight}px <br/>
                    </code>
                </div>
            </div> <br /> */}
            
            <input type="submit" className="good button" value="Go" />
            <button className="bad button" onClick={closeModal}>Close</button>

        </form>
        
    </Modal>

    )
}

export default NewCardModal
