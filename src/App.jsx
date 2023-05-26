import { useState } from 'react'
import './App.css'
import Layout from './components/ui/Layout'
import Home from './features/Home'
import About from './features/About'


function App() {
  return (
    <Layout>
      <Home/>
      <About/>
    </Layout>
  )
}

export default App
