import React from 'react'
import { Header } from './components/Header'
import { MainContent } from './components/MainContent'
import { Footer } from './components/Footer'
import { findByLabelText } from '@testing-library/react'

export const App = () => {

  const styles = {
    display: "flex",
    flexDirection: 'column'
  }
  return(
    <div style={styles}>
    
      <Header />
      <MainContent />
      <Footer />
   
    </div>
  )
} 
