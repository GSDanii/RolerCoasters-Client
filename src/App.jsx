import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { useState } from 'react'

import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import AppRoutes from './routes/AppRoutes'
import UserMessage from './components/UserMessage/UserMessage'

function App() {

  return (

    <>
      <Navigation />

      <AppRoutes />

      <Footer />

      <UserMessage />
    </>
  )
}

export default App
