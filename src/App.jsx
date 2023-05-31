
import Layout from './components/ui/Layout'
import Home from './features/Home'
import About from './features/About'
import Support from './features/Support'
import Services from './features/Services'
import Pricing from './features/Pricing'


function App() {
  return (
    <Layout>
      <Home/>
      <About/>
      <Support/>
      <Services/>
      <Pricing/>
    </Layout>
  )
}

export default App
