import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">  
    <div class="flex-container">
            <div class ="flex-item" id="first-pair">
              <Card path='characters/Cheek-resized.png'/>
            </div>
            <div class ="flex-item" id="second-pair">
              <Card path='characters/Stormy-resized.png'/>
            </div>
            <div class ="flex-item" id="first-pair">
              <Card path='characters/Cheek-resized.png'/>
            </div>
            <div class ="flex-item" id="third-pair">
              <Card path='characters/Pusheen-resized.png'/>
            </div>
            <div class ="flex-item" id="fourth-pair">
              <Card path='characters/Sloth-resized.png'/>
            </div>
            <div class ="flex-item" id="fifth-pair">
              <Card path='characters/Pip-resized.png'/>
            </div>
            <div class ="flex-item" id="fourth-pair">
              <Card path='characters/Sloth-resized.png'/>
            </div>
            <div class ="flex-item" id="third-pair">
              <Card path='characters/Pusheen-resized.png'/>
            </div>
            <div class ="flex-item" id="second-pair">
              <Card path='characters/Stormy-resized.png'/>
            </div>
            <div class ="flex-item" id="fifth-pair">
              <Card path='characters/Pip-resized.png'/>
            </div>
        </div>   
      
     
    </div>
  );
}

export default App;
