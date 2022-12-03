import './App.css';
import React, { useState } from 'react';
import Card from './Card';
import MemoryCard from './MemoryCard';
import { Randomize } from './Random'

let paths = [];

function App() {
// define states
  const [grid, setGrid] = useState(Randomize());
  const [matched, setMatched] = useState([]);
  const [selected, setSelected] = useState([]);
// reset states when game is rested
  const startOver = () => {
    setMatched([]);
    setSelected([]);
    setGrid(Randomize());
  }

  const handleClickCard = (event) => {
    // logic for persisting the card(s) if matched otherwise hide them
    const cardPosition = parseInt(event.target.getAttribute("data-content-index"));
    // user cannot select more than two cards
    if (selected.length > 1) return;

    // 'cardPosition' is NaN, when user click the same card frequently
    // if (isNaN(cardPosition))  return;

    if (
      selected.indexOf(cardPosition) === -1 &&
      matched.indexOf(cardPosition) === -1
    ) {
      // user clicks the first or second card
      if (!selected.length) {
        // first card is selected
        let selection = [cardPosition];
        setGrid(
          grid.map((ele) =>
            ele.id === cardPosition || matched.indexOf(ele.id) > -1
              ? { ...ele, revealed: true }
              : { ...ele }
          )
        );
        setSelected(selection);
      } else if (selected.length === 1) {
        // second card is selected
        let prevSelection = selected[0];
        let selection = [prevSelection, cardPosition];
        setSelected(selection);
        if (grid[prevSelection].image === grid[cardPosition].image) {
          // cards have matched
          const paired = matched.concat(...selection);
          setGrid(
            grid.map((ele) =>
              paired.indexOf(ele.id) > -1
                ? { ...ele, revealed: true }
                : { ...ele, revealed: false }
            )
          );
          setMatched(paired);
          setSelected([]);
		  // alert box to reset game   
          if (paired.length === 5) {
            setTimeout(() => {
              alert(
                "Yayy. You have solved the game. Would you like to play again?"
              );
              startOver();
            }, 2000);
          }
        } else {
          // show only matched and previously selected card. Hide selection after 2s
          setGrid(
            grid.map((ele) =>
              selection.indexOf(ele.id) > -1 || selected.indexOf(ele.id) > -1
                ? { ...ele, revealed: true }
                : { ...ele, revealed: false }
            )
          );
          setTimeout(() => {
            setGrid(
              grid.map((ele) =>
                matched.indexOf(ele.id) > -1
                  ? { ...ele, revealed: true }
                  : { ...ele, revealed: false }
              )
            );
            setSelected([]);
          }, 2000);
        }
      }
    }
  };

  // paths = ['characters/Cheek-resized.png', 'characters/Stormy-resized.png', 'characters/Pusheen-resized.png', 'characters/Sloth-resized.png', 'characters/Pip-resized.png', 'characters/Cheek-resized.png', 'characters/Stormy-resized.png', 'characters/Pusheen-resized.png', 'characters/Sloth-resized.png', 'characters/Pip-resized.png'];
  // paths.sort(() => Math.random() - 0.5);

  // // create all cards with random images
  // const cards = [];
  // for (let i =0; i< paths.length; i++){
  //   cards.push(
  //   <Card path={paths[i]} key={i}/>
  //   );
  // }



  return (
    <div className="App">  
    <div className="game">
      {grid.map((content, index) => (
        <MemoryCard
        key={content.image + index}
        data={content}
        handleClickCard = {handleClickCard}
        />
      ))}
      </div>
      {/* {cards} */}
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
    // </div>
  );
}

// function Randomize() {
//   paths.sort(() => Math.random() - 0.5)
// }

export default App;
