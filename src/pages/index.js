import * as React from "react"



// import Fab from '@material-ui/core/Fab';
// import Toolbar from '@material-ui/core/Toolbar';


// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import "../styles/main.css"

// import HideOnScroll from '../components/HideOnScroll'
// import BackToTop from '../components/BackToTop'

// Import Components
import Profile from '../components/profile'
import Portfolio from "../components/portfolio"
import Contact from "../components/contact"

function IndexPage() {
  return (
    <div className="wrapper">
    <Profile />
    <Portfolio />
   <Contact />

    </div>
  )
}

export default IndexPage
