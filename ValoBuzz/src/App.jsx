import { useState } from 'react'
import Characters from './components/Characters'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Characters />
    </>
  )
}

export default App
