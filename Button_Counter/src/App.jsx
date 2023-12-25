import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [evenCount, setCountEven] = useState(2);
  const [oddCount, setCountOdd] = useState(1);

  function oddfun(){
    //oddCounter = oddCount + 1;
    setCountOdd(oddCount + 1);
  }
  function evenfun(){
    setCountEven(evenCount + 2);
  }

  return (
    <>
      <h1>Odd Even Button Clicked Counter History</h1>
      <div class='btn1'>
        <button onClick={oddfun}>Button 1 -- {oddCount}</button>
      </div>
      <div class='btn2'>
        <button onClick={evenfun}>Button 2 -- {evenCount}</button>
      </div>
      <div class='btn3'>
        <button onClick={oddfun}>  Button 3 -- {oddCount}</button>
      </div>
      <div class='btn4'>
        <button onClick={evenfun}>Button 4 -- {evenCount}</button>
      </div>
    </>
  )
}

export default App
