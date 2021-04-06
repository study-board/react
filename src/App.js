
import Card from './components/Card';
import NewCardModal from './components/NewCardModal';

import ReactPlayer from 'react-player';
import config from './config/config';

import { useState } from 'react';

import 'typeface-inter';
import './styles/styles.css';

function App() {

  const [cards, updateCards] = useState(config.defaultCards);
  const [backgroundVideoUrl, updateBgURL] = useState(config.defaultBgVideoURL);

  const [isModalOpen, setIsOpen] = useState(false);

  const afterOpenModal = () => {};
  const openModal = () => {setIsOpen(true)};
  const closeModal = () => {setIsOpen(false)};

  return (
    <div className="App">

      <NewCardModal
        cards={cards}
        updateCards={updateCards}
        isOpen={isModalOpen}
        closeModal={closeModal}
        afterOpenModal={afterOpenModal}
      />

      <div className="background-video">

        <ReactPlayer width={"100%"} height={"100%"} url={backgroundVideoUrl} volume={0} muted={true} controls={false} playing={true} />

      </div>

      <div className="cardsContainer">

        { cards.map((card, index) => (

          <Card width={card.width} height={card.height} title={card.title} url={card.url} key={index} removable={card.removeable} />

        )) }

      </div>

      <button className="newCard" onClick={openModal}>Add new card</button>

    </div>
  );


}

export default App;
