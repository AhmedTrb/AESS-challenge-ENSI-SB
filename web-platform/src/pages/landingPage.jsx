import React from 'react'
import HeroSection from '../components/hero'
import Goals from '../components/goals'
import Features from '../components/features'
import Solution from '../components/solution'
import Footer from '../components/footer'
import Notification from '../components/notification'

const LandingPage = () => {
  return (
    <div>
    <HeroSection />
    <Solution />
    <Goals />
    <Features />
    <Notification />
    <Footer />
    </div>
      
  )
}

export default LandingPage