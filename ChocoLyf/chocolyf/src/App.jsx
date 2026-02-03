import React from 'react'
import SmoothScroll from './SmoothScroll'
import Header from './components/Header'
import Hero from './sections/Hero'

const App = () => {
  return (
    <SmoothScroll>
      <Header />
      <Hero />
    </SmoothScroll>
  )
}

export default App