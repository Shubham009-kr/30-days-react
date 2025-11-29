import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BaseCards from './Components/Cards/BaseCards'
import DeveloperCard from './Components/Cards/DeveloperCard'
import Grid from './Components/Grid/Grid'
import ContentSection from './Components/Layout/ContentSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContentSection />
    </>
  )
}

export default App
