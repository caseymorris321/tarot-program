import React, { useState, useMemo, useEffect } from 'react';
import tarotCards from './TarotCards';
import tarotDeckCover from './images/TarotDeckCover.webp';
import loadingImage from './images/loading.png';
import loadingMultipleImage from './images/loadings.png';
import './TarotCardGenerator.css';

function TarotCardGenerator() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [randomCard, setRandomCard] = useState(null);
  const [isGeneratingCard, setIsGeneratingCard] = useState(false);
  const [isDrawingMultipleCards, setIsDrawingMultipleCards] = useState(false);
  const [firstCardGenerated, setFirstCardGenerated] = useState(false);
  const [showNewReadingButton, setShowNewReadingButton] = useState(false);
  const [includeReversed, setIncludeReversed] = useState(false);
  const [showDescription, setShowDescription] = useState(false);


  const handleInputChange = (event) => {
    setInputValue(parseInt(event.target.value));
  };

  const handleSelectCards = () => {
    if (!inputValue) {
      alert('Please enter the number of cards.');
      return;
    }

    const numCards = parseInt(inputValue);

    if (numCards <= 0 || numCards > tarotCards.length) {
      alert('Invalid number of cards. Please enter a value between 1 and ' + tarotCards.length);
      return;
    }

    setIsGeneratingCard(true);
    setIsDrawingMultipleCards(numCards > 1);

    setTimeout(() => {
      const indices = new Set();
      const cards = [];

      while (cards.length < numCards) {
        const index = Math.floor(Math.random() * tarotCards.length);
        if (!indices.has(index)) {
          const newCard = { ...tarotCards[index] };
          if (includeReversed && Math.random() < 0.5) {
            newCard.isReversed = true;
          } else {
            newCard.isReversed = false;
          }
          cards.push({ ...newCard, showDescription: false });
          indices.add(index);
        }
      }

      setSelectedCards(cards);
      setRandomCard(null);
      setInputValue('');
      setFirstCardGenerated(true);
      setShowNewReadingButton(true);

      setIsGeneratingCard(false);
      setShowDescription(false); // Reset showDescription state
    }, 2000);
  };

  const handleGenerateRandomCard = () => {
    setIsGeneratingCard(true);
    setIsDrawingMultipleCards(false);

    setTimeout(() => {
      const currentCardIndex = randomCard ? tarotCards.findIndex((card) => card.name === randomCard.name) : -1;

      let newIndex = Math.floor(Math.random() * tarotCards.length);
      while (newIndex === currentCardIndex) {
        newIndex = Math.floor(Math.random() * tarotCards.length);
      }

      const newRandomCard = { ...tarotCards[newIndex] };
      if (includeReversed && Math.random() < 0.5) {
        newRandomCard.isReversed = true;
        newRandomCard.name = `${newRandomCard.name} (Reversed)`;
      } else {
        newRandomCard.isReversed = false;
      }
      setRandomCard({ ...newRandomCard, showDescription: false });
      setSelectedCards([]);
      setFirstCardGenerated(true);
      setShowNewReadingButton(true);

      setIsGeneratingCard(false);
      setShowDescription(false); // Reset showDescription state
    }, 2000);
  };


  const handleNewReading = () => {
    setSelectedCards([]);
    setRandomCard(null);
    setFirstCardGenerated(false);
    setShowNewReadingButton(false);
  };

  const renderedSelectedCards = useMemo(() => {
    if (selectedCards.length === 1) {
      const card = selectedCards[0];
      const cardName = card.isReversed ? `${card.name} (Reversed)` : card.name;

      return (
        <div className={`card ${card.isReversed ? 'reversed' : ''}`} key={card.name}>
          <h2>{cardName}</h2>
          <div className="image-container">
            <img src={card.image} alt={card.name} className="card-image" />
          </div>
          {card.description && (
            <>
              <p className="card-description">
                {showDescription ? (card.isReversed ? card.reversedDescription : card.description) : ''}
              </p>
              <button
                className="button show-description-button"
                onClick={() => toggleShowDescription(card)}
              >
                {card.showDescription ? 'Hide Description' : 'Show Description'}
              </button>
            </>
          )}
        </div>
      );
    }

    return selectedCards.map((card) => {
      const cardName = card.isReversed ? `${card.name} (Reversed)` : card.name;

      return (
        <div className={`card ${card.isReversed ? 'reversed' : ''}`} key={card.name}>
          <h2>{cardName}</h2>
          <div className="image-container">
            <img src={card.image} alt={card.name} className="card-image" />
          </div>
          {card.description && (
            <>
              <p className="card-description">
                {card.showDescription ? (card.isReversed ? card.reversedDescription : card.description) : ''}
              </p>
              <button
                className="button show-description-button"
                onClick={() => toggleShowDescription(card)}
              >
                {card.showDescription ? 'Hide Description' : 'Show Description'}
              </button>
            </>
          )}
        </div>
      );
    });
  }, [selectedCards, showDescription]);

  const toggleShowDescription = (card) => {
    setSelectedCards((prevCards) =>
      prevCards.map((prevCard) => {
        if (prevCard.name === card.name) {
          return { ...prevCard, showDescription: !prevCard.showDescription };
        }
        return prevCard;
      })
    );
  };

  return (
    <div className="container">
      <div className="h1-container">
        <h1 className="h1">Tarot Card Generator</h1>
      </div>
      {!firstCardGenerated ? (
        <div className="cover-image-container">
          <button className="button start-button" onClick={() => setFirstCardGenerated(true)}>
            Start Reading
          </button>
          <img src={tarotDeckCover} alt="Tarot Deck Cover" className="cover-image" width="512" height="512" />
          <a href="https://paypal.me/tarotgenerator?country.x=US&locale.x=en_US" className="button donate-button">
            Donate
          </a>
        </div>
      ) : (
        <div className="content">
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="reversedCheckbox"
              checked={includeReversed}
              onChange={(event) => setIncludeReversed(event.target.checked)}
            />
            <label htmlFor="reversedCheckbox">Include Reversed Cards</label>
          </div>

          <button className="button random-button" onClick={handleGenerateRandomCard}>
            Draw Random Card
          </button>
          <span className="or-divider">or</span>
          <div className="input-container">
            <label className="input-label">
              Enter number of cards:&nbsp;
              <input
                className="input-field"
                type="number"
                value={inputValue}
                onChange={handleInputChange}
                min="1"
                max="78"
              />
            </label>
            <button className="button select-button" onClick={handleSelectCards}>
              Draw Random Cards
            </button>
          </div>

          {isGeneratingCard ? (
            <div className="loading-page">
              <img
                src={isDrawingMultipleCards ? loadingMultipleImage : loadingImage}
                alt="Loading"
                className="loading-image"
              />
            </div>
          ) : (
            <>
              {renderedSelectedCards.length > 0 && <div className="card-container">{renderedSelectedCards}</div>}
              {randomCard && (
                <div className={`card random-card ${randomCard.isReversed ? 'reversed' : ''}`}>
                  <h2>{randomCard.name}</h2>
                  <div className="image-container">
                    <img src={randomCard.image} alt={randomCard.name} className="card-image" />
                  </div>
                  {randomCard.description && (
                    <>
                      <p className="card-description">
                        {randomCard.showDescription ? (randomCard.isReversed ? randomCard.reversedDescription : randomCard.description) : ''}
                      </p>
                      <button
                        className="button show-description-button"
                        onClick={() => setRandomCard({ ...randomCard, showDescription: !randomCard.showDescription })}
                      >
                        {randomCard.showDescription ? 'Hide Description' : 'Show Description'}
                      </button>
                    </>
                  )}
                </div>
              )}
              {showNewReadingButton && (
                <button className="button new-reading-button" onClick={handleNewReading}>
                  New Reading
                </button>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default TarotCardGenerator;
