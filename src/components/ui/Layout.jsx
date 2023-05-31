import Navbar from '../nav/Navbar'
import Footer from '../nav/Footer'

const Layout = ({children}) => {
  return (
    <div className='w-screen h-screen relative flex flex-col'>
      <Navbar/>
      <div id="content" className="flex flex-col flex-1 gap-[10rem] w-full pt-[10rem] bg-zinc-200 overflow-y-scroll">
        {children}
        <Footer/>
      </div>
    </div>
  )
}

export default Layout