import { useState } from 'react'

import './App.css'

function App() {

  const [dice, setDice] = useState(0)

  return (
    <div className="App">
      <h1>Dice Roller</h1>
      <p>Roll the dice</p>
      <button onClick={() => setDice(Math.floor(Math.random() * 6) + 1)}>
        Roll
      </button>
      <p>You rolled a {dice}</p>

    </div>
  )
}

export default App
