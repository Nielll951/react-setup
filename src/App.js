import React, {useState} from 'react';
import './App.css';

//Import Components
import Nav from './components/Nav';
import Video from './components/Video';

function App() {
  //Write JS here
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);

  const incrementor = () => {
    setCounter(counter + 1)
    console.log(counter);
  };
  const toggler = () => {
    setToggle((prev) => !prev);
  };
 
  return (
    <div className="App">
     <h1>Hello react</h1>
     <button onClick={incrementor}>Increment</button>
     <h2>{counter}</h2>
    </div>
  );
}

export default App;
