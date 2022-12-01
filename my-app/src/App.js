import './App.css';
import Card from './Card';

let paths = []

function App() {

  
  paths = ['characters/Cheek-resized.png', 'characters/Stormy-resized.png', 'characters/Pusheen-resized.png', 'characters/Sloth-resized.png', 'characters/Pip-resized.png', 'characters/Cheek-resized.png', 'characters/Stormy-resized.png', 'characters/Pusheen-resized.png', 'characters/Sloth-resized.png', 'characters/Pip-resized.png'];
  paths.sort(() => Math.random() - 0.5);

  // if we want to refacter it later, the following code also works!
  const cards = [];
  for (let i =0; i< paths.length; i++){
    cards.push(
    <div className="flex-item">
    <Card path={paths[i]} key={i}/>
    </div>
    );
  }

  return (
    <div className="App">  
    <div className="flex-container">
      {cards}
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
    </div>
  );
}

function Randomize() {
  paths.sort(() => Math.random() - 0.5)
}

export default App;
