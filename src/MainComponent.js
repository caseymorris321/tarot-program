import React, { useState } from 'react';

const card1 = {
    name: 'The Fool',
    description: '',
    keywords: ''
}
const card2 = {
    name: 'The Magician',
    description: '',
    keywords: ''
}
const card3 = {
    name: 'The High Priestess',
    description: '',
    keywords: ''
}
const card4 = {
    name: 'The Empress',
    description: '',
    keywords: ''
}
const card5 = {
    name: 'The Emperor',
    description: '',
    keywords: ''
}
const card6 = {
    name: 'The Hierophant',
    description: '',
    keywords: ''
}
const card7 = {
    name: 'The Lovers',
    description: '',
    keywords: ''
}
const card8 = {
    name: 'The Chariot',
    description: '',
    keywords: ''
}
const card9 = {
    name: 'Strength',
    description: '',
    keywords: ''
}
const card10 = {
    name: 'The Hermit',
    description: '',
    keywords: ''
}
const card11 = {
    name: 'Wheel of Fortune',
    description: '',
    keywords: ''
}
const card12 = {
    name: 'Justice',
    description: '',
    keywords: ''
}
const card13 = {
    name: 'The Hanged Man',
    description: '',
    keywords: ''
}
const card14 = {
    name: 'Death',
    description: '',
    keywords: ''
}
const card15 = {
    name: 'Temperance',
    description: '',
    keywords: ''
}
const card16 = {
    name: 'The Devil',
    description: '',
    keywords: ''
}
const card17 = {
    name: 'The Tower',
    description: '',
    keywords: ''
}
const card18 = {
    name: 'The Star',
    description: '',
    keywords: ''
}
const card19 = {
    name: 'The Moon',
    description: '',
    keywords: ''
}
const card20 = {
    name: 'The Sun',
    description: '',
    keywords: ''
}
const card21 = {
    name: 'Judgment',
    description: '',
    keywords: ''
}
const card22 = {
    name: 'The World',
    description: '',
    keywords: ''
}
const card23 = {
    name: 'Ace of Wands',
    description: '',
    keywords: ''
}
const card24 = {
    name: 'Two of Wands',
    description: '',
    keywords: ''
}
const card25 = {
    name: 'Three of Wands',
    description: '',
    keywords: ''
}
const card26 = {
    name: 'Four of Wands',
    description: '',
    keywords: ''
}
const card27 = {
    name: 'Five of Wands',
    description: '',
    keywords: ''
}
const card28 = {
    name: 'Six of Wands',
    description: '',
    keywords: ''
}
const card29 = {
    name: 'Seven of Wands',
    description: '',
    keywords: ''
}
const card30 = {
    name: 'Eight of Wands',
    description: '',
    keywords: ''
}
const card31 = {
    name: 'Nine of Wands',
    description: '',
    keywords: ''
}
const card32 = {
    name: 'Ten of Wands',
    description: '',
    keywords: ''
}
const card33 = {
    name: 'Page of Wands',
    description: '',
    keywords: ''
}
const card34 = {
    name: 'Knight of Wands',
    description: '',
    keywords: ''
}
const card35 = {
    name: 'Queen of Wands',
    description: '',
    keywords: ''
}
const card36 = {
    name: 'King of Wands',
    description: '',
    keywords: ''
}
const card37 = {
    name: 'Ace of Cups',
    description: '',
    keywords: ''
}
const card38 = {
    name: 'Two of Cups',
    description: '',
    keywords: ''
}
const card39 = {
    name: 'Three of Cups',
    description: '',
    keywords: ''
}
const card40 = {
    name: 'Four of Cups',
    description: '',
    keywords: ''
}
const card41 = {
    name: 'Five of Cups',
    description: '',
    keywords: ''
}
const card42 = {
    name: 'Six of Cups',
    description: '',
    keywords: ''
}
const card43 = {
    name: 'Seven of Cups',
    description: '',
    keywords: ''
}
const card44 = {
    name: 'Eight of Cups',
    description: '',
    keywords: ''
}
const card45 = {
    name: 'Nine of Cups',
    description: '',
    keywords: ''
}
const card46 = {
    name: 'Ten of Cups',
    description: '',
    keywords: ''
}
const card47 = {
    name: 'Page of Cups',
    description: '',
    keywords: ''
}
const card48 = {
    name: 'Knight of Cups',
    description: '',
    keywords: ''
}
const card49 = {
    name: 'Queen of Cups',
    description: '',
    keywords: ''
}
const card50 = {
    name: 'King of Cups',
    description: '',
    keywords: ''
}
const card51 = {
    name: 'Ace of Swords',
    description: '',
    keywords: ''
}
const card52 = {
    name: 'Two of Swords',
    description: '',
    keywords: ''
}
const card53 = {
    name: 'Three of Swords',
    description: '',
    keywords: ''
}
const card54 = {
    name: 'Four of Swords',
    description: '',
    keywords: ''
}
const card55 = {
    name: 'Five of Swords',
    description: '',
    keywords: ''
}
const card56 = {
    name: 'Six of Swords',
    description: '',
    keywords: ''
}
const card57 = {
    name: 'Seven of Swords',
    description: '',
    keywords: ''
}
const card58 = {
    name: 'Eight of Swords',
    description: '',
    keywords: ''
}
const card59 = {
    name: 'Nine of Swords',
    description: '',
    keywords: ''
}
const card60 = {
    name: 'Ten of Swords',
    description: '',
    keywords: ''
}
const card61 = {
    name: 'Page of Swords',
    description: '',
    keywords: ''
}
const card62 = {
    name: 'Knight of Swords',
    description: '',
    keywords: ''
}
const card63 = {
    name: 'Queen of Swords',
    description: '',
    keywords: ''
}
const card64 = {
    name: 'King of Swords',
    description: '',
    keywords: ''
}
const card65 = {
    name: 'Ace of Pentacles',
    description: '',
    keywords: ''
}
const card66 = {
    name: 'Two of Pentacles',
    description: '',
    keywords: ''
}
const card67 = {
    name: 'Three of Pentacles',
    description: '',
    keywords: ''
}
const card68 = {
    name: 'Four of Pentacles',
    description: '',
    keywords: ''
}
const card69 = {
    name: 'Five of Pentacles',
    description: '',
    keywords: ''
}
const card70 = {
    name: 'Six of Pentacles',
    description: '',
    keywords: ''
}
const card71 = {
    name: 'Seven of Pentacles',
    description: '',
    keywords: ''
}
const card72 = {
    name: 'Eight of Pentacles',
    description: '',
    keywords: ''
}
const card73 = {
    name: 'Nine of Pentacles',
    description: '',
    keywords: ''
}
const card74 = {
    name: 'Ten of Pentacles',
    description: '',
    keywords: ''
}
const card75 = {
    name: 'Page of Pentacles',
    description: '',
    keywords: ''
}
const card76 = {
    name: 'Knight of Pentacles',
    description: '',
    keywords: ''
}
const card77 = {
    name: 'Queen of Pentacles',
    description: '',
    keywords: ''
}
const card78 = {
    name: 'King of Pentacles',
    description: '',
    keywords: ''
}

const tarotCards = [
    card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17, card18, card19, card20, card21, card22, card23, card24, card25, card26, card27, card28, card29, card30, card31, card32, card33, card34, card35, card36, card37, card38, card39, card40, card41, card42, card43, card44, card45, card46, card47, card48, card49, card50, card51, card52, card53, card54, card55, card56, card57, card58, card59, card60, card61, card62, card63, card64, card65, card66, card67, card68, card69, card70, card71, card72, card73, card74, card75, card76, card77, card78
]


function TarotCardGenerator() {
    const [selectedCards, setSelectedCards] = useState({});
    const [inputValue, setInputValue] = useState("");
    const [randomCard, setRandomCard] = useState(null);
    const [selectedIndices, setSelectedIndices] = useState([]);


    const handleInputChange = (event) => {
        const value = event.target.value;
        const isValidInput = (/^$|(0|[1-9]\d{0,1})$/.test(value) && value >= 2 && value <= 78) || value === "" || value === "1";
        isValidInput ? setInputValue(value) : setInputValue(inputValue);
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
            setSelectedIndices(indices);
            setInputValue(""); // Clear the input box
        }
    };


    const handleGenerateRandomCard = () => {
        const availableIndices = tarotCards
            .map((_, index) => index)
            .filter((index) => !selectedIndices.includes(index));
        if (availableIndices.length > 0) {
            const index = availableIndices[Math.floor(Math.random() * availableIndices.length)];
            setRandomCard(tarotCards[index]);
            setSelectedCards([]);
            setSelectedIndices([...selectedIndices, index]);
        }
    };


    return (
        <div>
            <button onClick={handleGenerateRandomCard}>Select Random Card</button>
            <div>or<br /></div>
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
            <button onClick={handleSelectCards}>Select Cards</button>

            {selectedCards.length > 0 && (
                <div>
                    {selectedCards.map((card) => (
                        <div key={card.name}>
                            <h2>{card.name}</h2>
                            <img src={card.image} alt={card.name} />
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>
            )}
            {randomCard && (
                <div>
                    <h2>{randomCard.name}</h2>
                    <img src={randomCard.image} alt={randomCard.name} />
                    <p>{randomCard.description}</p>
                </div>
            )}
        </div>
    );
}


export default TarotCardGenerator;

