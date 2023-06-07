import React, { useState } from 'react';
import tarotCards from './TarotCards';
import './TarotCardGenerator.css'; // Import the CSS file for styling


function TarotCardGenerator() {
    const [selectedCards, setSelectedCards] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [randomCard, setRandomCard] = useState(null);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSelectCards = () => {
        
        if (inputValue) {
            const numCards = parseInt(inputValue);
            const cards = [];
            const indices = [];
            while (cards.length < numCards) {
                const index = Math.floor(Math.random() * tarotCards.length);
                if (!indices.includes(index)) {
                    cards.push(tarotCards[index]);
                    indices.push(index);
                }
            }
            setSelectedCards(cards);
            setRandomCard(null);
            setInputValue("");
            document.documentElement.style.setProperty('--num-cards', numCards);
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
    };


    return (
        <div className="container">
          <h1>Tarot Card Generator</h1>
          <div className="content">
            <button className="button" onClick={handleGenerateRandomCard}>Select Random Card</button>
            <div>or<br /></div>
            <div className="input-container">
              <label>
                Enter number of cards:{" "}
                <input
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
              <button className="button" onClick={handleSelectCards}>Select Cards</button>
            </div>
            {selectedCards.length > 0 && (
              <div className="card-container" style={{ '--num-cards': selectedCards.length }}>
                {selectedCards.map((card) => (
                  <div className="card" key={card.name}>
                    <h2>{card.name}</h2>
                    <img src={card.image} alt={card.name} />
                    <p>{card.description}</p>
                    <p>Keywords: {card.keywords}</p>
                  </div>
                ))}
              </div>
            )}
            {randomCard && (
              <div className="card">
                <h2>{randomCard.name}</h2>
                <img src={randomCard.image} alt={randomCard.name} />
                <p>{randomCard.description}</p>
              </div>
            )}
          </div>
        </div>
      );
    }
    
    
export default TarotCardGenerator;