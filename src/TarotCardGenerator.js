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


  useEffect(() => {
    // Preload the tarotDeckCover image
    const image = new Image();
    image.src = tarotDeckCover;
  }, []);

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
          cards.push(newCard);
          indices.add(index);
        }
      }

      setSelectedCards(cards);
      setRandomCard(null);
      setInputValue('');
      setFirstCardGenerated(true);
      setShowNewReadingButton(true);

      setIsGeneratingCard(false);
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
      } else {
        newRandomCard.isReversed = false;
      }
      setRandomCard(newRandomCard);
      setSelectedCards([]);
      setFirstCardGenerated(true);
      setShowNewReadingButton(true);

      setIsGeneratingCard(false);
    }, 2000);
  };



  const handleNewReading = () => {
    setSelectedCards([]);
    setRandomCard(null);
    setFirstCardGenerated(false);
    setShowNewReadingButton(false);
  };

  const openCardInNewTab = (card) => {
    const newTab = window.open('', '_blank');
    newTab.document.open();
    newTab.document.write(`
      <html>
        <head>
          <title>${card.name}</title>
          <style>
            body {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
              font-family: Arial, sans-serif;
            }
            .card {
              padding: 20px;
              border: 1px solid #ccc;
              text-align: center;
            }
           .card h2 {
              margin-top: 0;
            }
            .card img {
              max-width: 100%;
              height: auto;
              ${card.isReversed ? 'transform: rotateX(180deg);' : ''}
            }
            .card p {
              margin: 10px 0;
            }
          </style>
        </head>
        <body>
          <div class="card">
            <h2>${card.name}</h2>
            <img src="${card.image}" alt="${card.name}">
            <p>${card.isReversed ? card.reversedDescription : card.description}</p>
            <p><strong>Keywords:</strong> ${card.isReversed ? card.reversedKeywords : card.keywords}</p>
          </div>
        </body>
      </html>
    `);
    newTab.document.close();
  };


  const renderedSelectedCards = useMemo(
    () =>
      selectedCards.map((card) => (
        <div
          className={`card ${card.isReversed ? 'reversed' : ''}`}
          key={card.name}
          onClick={() => openCardInNewTab(card)}
        >
          <h2>{card.name}</h2>
          <div className="image-container">
            <img src={card.image} alt={card.name} className="card-image" />
          </div>
          <p className="card-description">
            {card.isReversed ? card.reversedDescription : card.description}
          </p>
          <p className="card-keywords">
            <strong>Keywords:</strong> {card.isReversed ? card.reversedKeywords : card.keywords}
          </p>
        </div>
      )),
    [selectedCards]
  );


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
              <input className="input-field" type="number" value={inputValue} onChange={handleInputChange} min="1" max="78" />
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
                <div
                  className={`card random-card ${randomCard.isReversed ? 'reversed' : ''}`}
                  onClick={() => openCardInNewTab(randomCard)}
                >
                  <h2>{randomCard.name}</h2>
                  <div className="image-container">
                    <img src={randomCard.image} alt={randomCard.name} className="card-image" />
                  </div>
                  <p className="card-description">
                    {randomCard.isReversed ? randomCard.reversedDescription : randomCard.description}
                  </p>
                  <p className="card-keywords">
                    <strong>Keywords:</strong> {randomCard.isReversed ? randomCard.reversedKeywords : randomCard.keywords}
                  </p>
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
