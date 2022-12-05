import './App.css';
import {useEffect, useState} from "react";
import Card from './Card';

const paths = [{"src":"characters/Cheek-resized.png"}, {"src":"characters/Stormy-resized.png"}, {"src":"characters/Pusheen-resized.png"}, {"src":"characters/Sloth-resized.png"}, {"src":"characters/Pip-resized.png"}];

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
  const [choiceOne, setChoiceOne] = useState([]);
  const [choiceTwo, setChoiceTwo] = useState([]);

  const shuffleCards = () => {
    const shuffledCards = [...paths, ...paths]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}))

    setCards(shuffledCards);
    setTurns(0);
  };
 
  console.log(cards, turns);

  return (
    <div className="App">  
    <div className="game">
      {cards.map(card => (
        <Card
          key={card.id}
          path={card.src}
          back={"Pusheen-logo.png"}
        />
      ))}
            {/* <div className="flex-item">
              <Card path={paths[0]}/>
            </div>
            <div className="flex-item">
              <Card path={paths[1]}/>
            </div>
            <div className="flex-item">
              <Card path={paths[2]}/>
            </div>
            <div className="flex-item">
              <Card path={paths[3]}/>
            </div>
            <div className="flex-item">
              <Card path={paths[4]}/>
            </div>
            <div className="flex-item">
              <Card path={paths[5]}/>
            </div>
            <div className="flex-item">
              <Card path={paths[6]}/>
            </div>
            <div className="flex-item">
              <Card path={paths[7]}/>
            </div>
            <div className="flex-item">
              <Card path={paths[8]}/>
            </div>
            <div className="flex-item">
              <Card path={paths[9]}/>
            </div> */}
        </div> 
        <button onClick={shuffleCards}>Restart</button>
     </div>
  );
}



// function Randomize() {
//   paths.sort(() => Math.random() - 0.5)
// }

export default App;
