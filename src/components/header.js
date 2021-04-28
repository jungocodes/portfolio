import * as React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header className='flex  justify-between h-20 w-full absolute top-4 z-10'>

        <div className="logo mx-6 sm:mx-10 lg:ml-40 xl:ml-8 2xl:ml-36">
          <Link to="/" className='text-xl font-bold tracking-wide uppercase from-black '>Jungo Codes</Link>
        </div>
        <div className="navbar ">
          <nav className='justify-between sm:mx-5 lg:-ml-56- my-0'>
            <Link to="/about" className='mr-5 lg:ml-9 2xl:mr-10 uppercase from-black'> About</Link>
            <Link to="/work" className='mr-5 lg:ml-9 2xl:mr-10 uppercase from-black'>Work</Link>
            <Link to="/contact" className='mr-5 lg:ml-9 2xl:mr-40 uppercase  from-black'>Contact</Link>
          </nav>
        </div>


  </header>
)

export default Header
