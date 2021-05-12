import * as React from "react"
import '../styles/main.css'

// Import Components
import Profile from '../components/profile'
import Portfolio from '../components/portfolio'

const IndexPage = () => (
 <div className='wrapper'>
   <Profile />
   <Portfolio />
 </div>
)

export default IndexPage
