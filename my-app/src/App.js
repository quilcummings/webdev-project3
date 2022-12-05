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

function App() {



  // function checkMatch() {
  //   for(var i = 0; i < cards.length; i++)
  //   {
  //     for(var j = 0; j < cards.length; j++)
  //     {
  //       console.log(cards[i].props.flip);
  //       if (i != j && cards[i] - cards[j] == 5)
  //       {
  //         alert("MATCH");
  //       }
  //     }
  //   }
  // }


  // create all cards with random images
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...paths, ...paths]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }
  // fire shuffleCard function when the component initially mounts
  useEffect(() => {
    shuffleCards();
  }, [])

  // fire resetTurn function when the component mounts AND after the states of ChoiceOne and ChoiceTwo have been updated
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      // if cards match and if they're not the same card
      if (choiceOne.src === choiceTwo.src) {
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
      <div className="game">
        {cards.map(card => (
          <Card
            key={card.id}
            // We want to define image source as props 'card' instead of props 'path' in class Card so we can access it in handleClick and handleCard to see which card is clicked on.
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
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
