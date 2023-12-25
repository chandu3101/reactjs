import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  var counter = 0;
  var [counter, setCount] = useState(counter)

  function addNotification(){debugger
    counter = counter + 1;
    setCount(counter);
    onebyone.style.display = 'inline-block';
    allNotification.style.display = 'inline-block';
  }

  // const addNotification = () =>{debugger
  //   counter = counter + 1;
  //   setCount(counter);
  // }
  if (counter < 0) {
    onebyone.style.display = 'none';
    allNotification.style.display = 'none';
  }

  function removeNotification(){
    counter = counter - 1;
    if(counter > 0)
      setCount(counter);
    else{
      counter = 0;
      setCount(counter);
      onebyone.style.display = 'none';
      allNotification.style.display = 'none';
    }
  }
  function removeAllNotification(){
    counter = 0;
    setCount(counter);
    onebyone.style.display='none';
    allNotification.style.display = 'none';
  }

  return (
    <>
     <h1>Notification Count ==== {counter}</h1>c
     <div>
      <button id='addNotification' onClick={addNotification}>Add Notification {counter}</button>
     </div>
     <div>
      <button id='onebyone' onClick={removeNotification}>Remove Notification one by one {counter}</button>
     </div>
     <div>
      <button id='allNotification' onClick={removeAllNotification}>Remove all notification {counter}</button>
     </div>
    </>
  )
}

export default App
