import './App.css';
import Card from './Card';

let paths = [];
export let cards;



function App() {

  paths = ['characters/Cheek-resized.png', 'characters/Stormy-resized.png', 'characters/Pusheen-resized.png', 'characters/Sloth-resized.png', 'characters/Pip-resized.png', 'characters/Cheek-resized.png', 'characters/Stormy-resized.png', 'characters/Pusheen-resized.png', 'characters/Sloth-resized.png', 'characters/Pip-resized.png'];
  paths.sort(() => Math.random() - 0.5);

  // create all cards with random images
  cards = [];
  for (let i =0; i< paths.length; i++){
    cards.push(
    <Card path={paths[i]} key={i} back={"Pusheen-logo.png"}/>
    );
  }

  return (
    
    <div className="App">  
    <div className="game">
      {cards}
    </div>   
    </div>
  );
}



// function Randomize() {
//   paths.sort(() => Math.random() - 0.5)
// }

export default App;
