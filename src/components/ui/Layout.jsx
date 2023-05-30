import Navbar from '../nav/Navbar'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
  return (
    <div className='w-screen h-screen relative'>
      <Navbar/>
      <div className="w-full h-full">
        {children}
        <Footer/>
      </div>
      
    </div>
  )
}

export default Layout