import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">  
    <div class="flex-container">
            <div class ="flex-item" id="first-child">
              <Card path='characters/Cheek-resized.png'/>
            </div>
            <div class ="flex-item" id="second-child">
              <Card path='characters/Stormy-resized.png'/>
            </div>
            <div class ="flex-item" id="third-child">
              <Card path='characters/Cheek-resized.png'/>
            </div>
            <div class ="flex-item" id="fourth-child">
              <Card path='characters/Pusheen-resized.png'/>
            </div>
            <div class ="flex-item" id="fifth-child">
              <Card path='characters/Sloth-resized.png'/>
            </div>
            <div class ="flex-item" id="sixth-child">
              <Card path='characters/Pip-resized.png'/>
            </div>
            <div class ="flex-item" id="seventh-child">
              <Card path='characters/Sloth-resized.png'/>
            </div>
            <div class ="flex-item" id="eighth-child">
              <Card path='characters/Pusheen-resized.png'/>
            </div>
            <div class ="flex-item" id="ninth-child">
              <Card path='characters/Stormy-resized.png'/>
            </div>
            <div class ="flex-item" id="tenth-child">
              <Card path='characters/Pip-resized.png'/>
            </div>
        </div>   
      
     
    </div>
  );
}

export default App;
