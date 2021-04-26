import * as React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header className='h-20 w-full absolute top-0 z-10 px-10'>
      <div className='flex items-center justify-between h-20'>
        <div className="logo">
          <Link to="/" className='font-bold tracking-wide from-black'>Jungo Codes</Link>
        </div>
        <div className="navbar">
          <nav className='justify-between mx-5 my-0'>
            <Link to="/about"> About</Link>
            <Link to="/work">Work</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>

  </header>
)

export default Header
