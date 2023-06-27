import React, { useState } from 'react';
import tarotCards from './TarotCards';
import tarotDeckCover from './images/TarotDeckCover.png';
import './TarotCardGenerator.css';

function TarotCardGenerator() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [randomCard, setRandomCard] = useState(null);
  const [firstCardGenerated, setFirstCardGenerated] = useState(false);
  const [showNewReadingButton, setShowNewReadingButton] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSelectCards = () => {
    if (inputValue) {
      const numCards = parseInt(inputValue);

      if (numCards <= 0 || numCards > tarotCards.length) {
        alert("Invalid number of cards. Please enter a value between 1 and " + tarotCards.length);
        return;
      }

      const cards = [];
      const indices = new Set();

      while (cards.length < numCards) {
        const index = Math.floor(Math.random() * tarotCards.length);
        if (!indices.has(index)) {
          cards.push(tarotCards[index]);
          indices.add(index);
        }
      }

      setSelectedCards(cards);
      setRandomCard(null);
      setInputValue("");
      setFirstCardGenerated(true);
      setShowNewReadingButton(true);
    }
  };

  const handleGenerateRandomCard = () => {
    const currentCardIndex = randomCard ? tarotCards.findIndex((card) => card.name === randomCard.name) : -1;

    let newIndex = Math.floor(Math.random() * tarotCards.length);
    while (newIndex === currentCardIndex) {
      newIndex = Math.floor(Math.random() * tarotCards.length);
    }

    const newRandomCard = tarotCards[newIndex];
    setRandomCard(newRandomCard);
    setSelectedCards([]);
    setFirstCardGenerated(true);
    setShowNewReadingButton(true);
  };

  const handleNewReading = () => {
    setSelectedCards([]);
    setRandomCard(null);
    setFirstCardGenerated(false);
    setShowNewReadingButton(false);
  };

  return (
    <div className="container">
      <div className="h1-container">
        <h1 className="h1">Tarot Card Generator</h1>
      </div>
      {!firstCardGenerated ? (
        <div className="cover-image-container">
          <button className="button start-button" onClick={() => setFirstCardGenerated(true)}>Start Reading</button>
          <img src={tarotDeckCover} alt="Tarot Deck Cover" className="cover-image" />
        </div>
      ) : (
        <div className="content">
          <button className="button random-button" onClick={handleGenerateRandomCard}>Draw Random Card</button>
          <span className="or-divider">or</span>
          <div className="input-container">
            <label className="input-label">
              Enter number of cards:&nbsp;
              <input
                className="input-field"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSelectCards();
                  }
                }}
              />
            </label>
            <button className="button select-button" onClick={handleSelectCards}>Draw Random Cards</button>
          </div>
          {selectedCards.length > 0 && (
            <div className="card-container">
              {selectedCards.map((card) => (
                <div className="card" key={card.name}>
                  <h2>{card.name}</h2>
                  <img src={card.image} alt={card.name} className="card-image" />
                  <p className="card-description">{card.description}</p>
                  <p className="card-keywords"><strong>Keywords:</strong> {card.keywords}</p>
                </div>
              ))}
            </div>
          )}
          {randomCard && (
            <div className="card random-card">
              <h2>{randomCard.name}</h2>
              <img src={randomCard.image} alt={randomCard.name} className="card-image" />
              <p className="card-description">{randomCard.description}</p>
              <p className="card-keywords"><strong>Keywords:</strong> {randomCard.keywords}</p>
            </div>
          )}
          {showNewReadingButton && (
            <button className="button new-reading-button" onClick={handleNewReading}>New Reading</button>
          )}
        </div>
      )}
    </div>
  );
}

export default TarotCardGenerator;
