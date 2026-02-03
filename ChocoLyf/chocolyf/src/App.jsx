import React from 'react'
import SmoothScroll from './SmoothScroll'
import Header from './components/Header'
import Hero from './sections/Hero'
import Taste from './sections/Taste'

const App = () => {
  return (
    <SmoothScroll>
      <Header />
      <Hero />
      <Taste />
    </SmoothScroll>
  )
}

export default App