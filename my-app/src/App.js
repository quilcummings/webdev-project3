import logo from './logo.svg';
import './App.css';
import Card from './Card';

var paths = []

function App() {

  
  paths = ['characters/Cheek-resized.png', 'characters/Stormy-resized.png', 'characters/Pusheen-resized.png', 'characters/Sloth-resized.png', 'characters/Pip-resized.png'];
  paths.sort(() => Math.random() - 0.5);

  return (
    <div className="App">  
    <div class="flex-container">
            <div class ="flex-item">
              <Card path={paths[0]}/>
            </div>
            <div class ="flex-item">
              <Card path={paths[1]}/>
            </div>
            <div class ="flex-item">
              <Card path={paths[2]}/>
            </div>
            <div class ="flex-item">
              <Card path={paths[3]}/>
            </div>
            <div class ="flex-item">
              <Card path={paths[4]}/>
            </div>
            {Randomize()}
            <div class ="flex-item">
              <Card path={paths[0]}/>
            </div>
            <div class ="flex-item">
              <Card path={paths[1]}/>
            </div>
            <div class ="flex-item">
              <Card path={paths[2]}/>
            </div>
            <div class ="flex-item">
              <Card path={paths[3]}/>
            </div>
            <div class ="flex-item">
              <Card path={paths[4]}/>
            </div>
        </div>   
    </div>
  );
}

function Randomize() {
  paths.sort(() => Math.random() - 0.5)
}

export default App;
