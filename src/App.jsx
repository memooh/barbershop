import { useState } from 'react'

import Hero from './components/Hero/Hero'
import PersonalService from './components/PersonalService/PersonalService'
import OurServices from './components/OurServices/OurServices'
import BarberSec from './components/BarberSec/BarberSec'
import ChooseUs from './components/ChooseUs/ChooseUs'
import ReviewComponent from './components/ReviewComponent/ReviewComponent'
import InfoCards from './components/QuickConnect/QuickConnect'
import Footer from './components/Footer/Footer'

import './App.css'

function App() {
  return (
    <>
      <Hero />
      <InfoCards />
      <PersonalService />
      <OurServices />
      <BarberSec />
      <ChooseUs />
      <ReviewComponent />
      <Footer />
    </>
  )
}

export default App
