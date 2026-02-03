import React from 'react'
import SmoothScroll from './SmoothScroll'
import Header from './components/Header'
import Hero from './sections/Hero'
import Taste from './sections/Taste'
import Quality from './sections/Quality'

const App = () => {
  return (
    <SmoothScroll>
      <Header />
      <Hero />
      <Taste />
      <Quality />
    </SmoothScroll>
  )
}

export default App