import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div><input type="text" /></div>
      <div><input type="text" /></div>
    </div>
  )
}

export default App
