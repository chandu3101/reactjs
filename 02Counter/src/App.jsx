import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  /*js code*/
  //var counter = 10;
  // const addValue = () => {
  //   counter = counter + 1;
  //   console.log('clicked', counter);
  // }
  // const removeValue = () =>
  // {
  //   counter = counter - 1;
  //   console.log('clicked remove', counter)
  // }


  /*Use of hooks*/
  var [counter, setCounter] = useState(17); 
  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
    console.log('clicked add', counter);

  }
  const removeValue = () =>
  {
    counter = counter - 1;
    setCounter(counter)
    console.log('clicked remove', counter)
  }
  return (
    <>
      <h1>This is Counter Project</h1>
      <h4>Counter Value : {counter}</h4>
      <div id='addCounter'>
        <button onClick={addValue}>Add Counter : {counter}</button>
      </div>
      <div id='removeCounter'>
        <button onClick={removeValue}>Remove Counter : {counter}</button>
      </div>
    </>
  )
}

export default App
