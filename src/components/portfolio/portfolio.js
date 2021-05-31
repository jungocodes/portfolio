import * as React from 'react'


import JungoCodes from './jungoCodes'
import ClientTwo from './ClientTwo'
import ClientThree from './ClientThree'
const Portfolio = () => {

  return (


<div className='mt-8 lg:w-full xl:w-11/12 xl:mx-auto '>

    {/* Client 1*/}
    <JungoCodes/>
    {/* Small Showcase */}
    <div className='lg:flex lg:flex-row justify-evenly'>
    <ClientTwo  />
    <ClientThree />
    </div>

  </div>


  )
}

export default Portfolio
