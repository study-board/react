
import { useState } from 'react';

import Card from './components/Card';
import NewCardModal from './components/NewCardModal';
import VideoChangeModal from './components/VideoChangeModal';

import ReactPlayer from 'react-player';
import config from './config/config';

import 'typeface-inter';
import './styles/styles.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {FaRegPlusSquare, FaVideo, FaShare} from 'react-icons/fa';

function App() {

  let defaultCards, defaultBgVideoURL;
  const searchParams = new URLSearchParams(window.location.search);

  if (searchParams.get("cards")) {
    defaultCards = JSON.parse(atob(searchParams.get("cards")));
  } else {
    defaultCards = config.defaultCards;
  }

  if (searchParams.get("video")) {
    defaultBgVideoURL = atob(searchParams.get("video"));
  } else {
    defaultBgVideoURL = config.defaultBgVideoURL;
  }

  const [cards, updateCards] = useState(defaultCards);
  const [backgroundVideoUrl, updateBgURL] = useState(defaultBgVideoURL);

  const [isAddCardModalOpen, setACModal] = useState(false);
  const afterOpenAC = () => {};

  const [isVideoModalOpen, setVideoModal] = useState(false);
  const afterOpenVM = () => {};

  const shareCardConfiguration = (e) => {

    e.preventDefault();

    let newSearch = new URLSearchParams();
    
    newSearch.append(
      "video",
      btoa(backgroundVideoUrl)
    );

    newSearch.append(
      "cards",
      btoa(JSON.stringify(cards))
    );

    navigator.share({
      url: "https://" + document.location.hostname + "?" + newSearch.toString(),
      text: `Check out my StudyBoard with ${cards.length} cards!`,
      title: `StudyBoard with ${cards.length} cards`
    });

  };

  return (
    <div className="App">

      <ToastContainer />

      <NewCardModal
        cards={cards}
        updateCards={updateCards}
        isOpen={isAddCardModalOpen}
        closeModal={() => {setACModal(false)}}
        afterOpenModal={afterOpenAC}
      />

      <VideoChangeModal

        isOpen={isVideoModalOpen}
        closeModal={() => {setVideoModal(false)}}
        afterOpenModal={afterOpenVM}
        changeVideo={updateBgURL}
        currentURL={backgroundVideoUrl} 

      />

      <div className="background-video">

        <ReactPlayer width={"100%"} height={"100%"} url={backgroundVideoUrl} volume={0} muted={true} controls={false} playing={true} />

      </div>

      <div className="cardsContainer">

        { cards.map((card, index) => (localStorage.getItem(card.showOnce) ? null : (

          <Card
            width={card.width}
            height={card.height}
            title={card.title}
            url={card.url}
            key={index}
            permanent={card.permanent}
            removeAction={ () => {
              if (card.showOnce) {
                localStorage.setItem(card.showOnce, true);
              }
              updateCards(cards.filter((c) => (c !== card)));
              toast.warn("Removed card", config.toastOptions);
            } }
          />

        ))) }

      </div>

      <div className="btm-right-btns">
        <button className="button good" onClick={() => {setVideoModal(true)}}><FaVideo/> Change video</button>
        <button className="button good" onClick={() => {setACModal(true)}}><FaRegPlusSquare /> Add new card</button>
        <button className="button blue" onClick={shareCardConfiguration}><FaShare /> Share</button>       
      </div>

    </div>
  );


}

export default App;
