import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/Components/Header';
import Footer from './assets/Components/Footer';
import { Outlet } from 'react-router-dom'


function App() {
 
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />

    </>
  )
}

export default App
