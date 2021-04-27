import * as React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header className='container flex items-center justify-between h-20 w-full absolute top-0 z-10'>

        <div className="logo ml-60">
          <Link to="/" className='font-bold tracking-wide uppercase from-black'>Jungo Codes</Link>
        </div>
        <div className="navbar">
          <nav className='justify-between mx-5 my-0'>
            <Link to="/about" className='mr-9 uppercase from-black'> About</Link>
            <Link to="/work" className='mr-9 uppercase from-black'>Work</Link>
            <Link to="/contact" className='mr-9 uppercase last:mr-0  from-black'>Contact</Link>
          </nav>
        </div>


  </header>
)

export default Header
