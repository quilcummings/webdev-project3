import './App.css';
import { useEffect, useState } from "react";
import Card from './Card';

const paths = [
  { "src": "characters/Cheek-resized.png", matched: false },
  { "src": "characters/Stormy-resized.png", matched: false },
  { "src": "characters/Pusheen-resized.png", matched: false },
  { "src": "characters/Sloth-resized.png", matched: false },
  { "src": "characters/Pip-resized.png", matched: false }
];

var matches = 0;

function App() {

  // create all cards with random images
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  

  const shuffleCards = () => {
    const shuffledCards = [...paths, ...paths]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setChoiceOne(null);
    setChoiceTwo(null);  
    setCards(shuffledCards);
    setTurns(0);
    document.getElementById("win").innerHTML = "";
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
    
  }
  // fire shuffleCard function when the component initially mounts
  useEffect(() => {
    shuffleCards();
  }, [])

  const winCondition = () => {
    //alert("you win");

    document.getElementById("win").innerHTML = "YOU WON";

  }

  // fire resetTurn function when the component mounts AND after the states of ChoiceOne and ChoiceTwo have been updated
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      // if cards match and if they're not the same card
      if (choiceOne.src === choiceTwo.src && choiceOne.id !== choiceTwo.id) {

        matches++
        if(matches%5===0)
        {
          setTimeout(() => winCondition(), 800);
        }
        //console.log(matches);

        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        // reset choiceOne and choiceTwo to null
        
        resetTurn()
        
      } else {
        console.log("No Match...");
        // wait a bit before turning them back
        setTimeout(() => resetTurn(), 1500);
      }
    }
  }, [choiceOne, choiceTwo])

  console.log(cards);

  
  return (
    

    <div className="App">

      <div id="win"></div>

      <div className="game">
        {cards.map(card => (
          <Card
            key={card.id}
            // We want to define image source as props 'card' instead of props 'path' in class Card so we can access it in handleClick and handleCard to see which card is clicked on.
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <button onClick={shuffleCards}>Restart</button>
    </div>
  );
}



// function Randomize() {
//   paths.sort(() => Math.random() - 0.5)
// }

export default App;
