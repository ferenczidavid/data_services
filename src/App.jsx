import './App.css'
import Layout from './components/ui/Layout'
import Home from './features/Home'
import About from './features/About'
import Support from './features/Support'
import Services from './features/Services'


function App() {
  return (
    <Layout>
      <Home/>
      <About/>
      <Support/>
      <Services/>
    </Layout>
  )
}

export default App
