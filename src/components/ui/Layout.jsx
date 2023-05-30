import Navbar from '../nav/Navbar'

const Layout = ({children}) => {
  return (
    <div className='w-screen h-screen relative'>
      <Navbar/>
      <div className="w-full h-full">
        {children}
      </div>
      
    </div>
  )
}

export default Layout