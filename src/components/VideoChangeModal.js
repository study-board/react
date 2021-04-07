import React, {useState} from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
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

const VideoChangeModal = (props) => {

    const {isOpen, closeModal, afterOpenModal, changeVideo, currentURL} = props;
    
    const [VideoURL, setVU] = useState(currentURL);

    const submitVideoChange = (e) => {
        e.preventDefault();
        changeVideo(VideoURL);
        closeModal();
    }
    
    return (

        <Modal
            isOpen={isOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Change background video"
        >

            <h2>Change the background video</h2>

            <form onSubmit={submitVideoChange}>

                <table>
                    
                    <tbody>

                        <tr>
                            <td><label htmlFor="video_url">Video URL</label></td>
                            <td><input style={{width: "calc(100% - 10px)"}} onBlur={(e) => {setVU(e.target.value)}} type="url" /></td>
                        </tr>

                        <tr className="small">
                            <td><i>We support</i></td>
                            <td align="right">
                                <i>{ config.newVideoSupportedSites.map((v,i) => (<a className="spaced" href={v.url} key={i} target="_blank" rel="noreferrer">{v.displayName}</a>)) }</i>
                            </td>
                        </tr>

                    </tbody>

                </table>

                <h3>Your video will look like this (without the controls)</h3>

                <ReactPlayer url={VideoURL} volume={0} muted={true} playing={false} /> <br/>

                <input type="submit" className="good button" value="Go" />
                <button className="bad button" onClick={closeModal}>Close</button>    

            </form>  

        </Modal>

    )
}

export default VideoChangeModal
