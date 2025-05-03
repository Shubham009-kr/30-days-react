import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Accordion from './components/accordion/Accordion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='font-[valorant] text-[#FF4655] text-[15vw] absolute z-[-1] fixed bottom-[0px] left-10'>VALORANT</h1>
      <Accordion />
    </>
  )
}

export default App
