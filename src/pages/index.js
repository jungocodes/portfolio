import * as React from "react"
import  {Link}  from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithubAlt, FaTerminal } from "react-icons/fa";


// Import Components
import Portfolio from "../components/portfolio/portfolio"
import MainContact from '../components/mainContact'

function IndexPage() {
  return (
    <div className='font-sans sm:container sm:w-11/12 sm:mx-auto  lg:mt-10 lg:py-6 lg:px-6  ' id='back-top'>
    <div className="flex flex-col lg:mx-auto xl:flex-row xl:items-center xl:w-10/12 xl:p-10 ">
      {/* About Content */}
       <div className="order-last mx-4 text-center -mt-4  ">
        <h1 className='text-4xl font-bold tracking-wider lg:mt-0
                       xl:text-left xl:text-5xl xl:mt-10 xl:tracking-widest
                       2xl:px-0'
          >
            <Link id="back-to-top-anchor">

             <span className='text-secondaryColor'>Jungo</span> Codes
            </Link>
          </h1>
          <h4 className="py-2 tracking-wider xl:text-left">Front-End Developer</h4>
          <div class="w-12 h-1 bg-secondaryColor rounded mt-2 mb-4 mx-auto  xl:m-0"></div>
          <p className="leading-normal text-lg mb-4 lg:-mb-4 xl:text-left xl:mt-2 xl:mb-2 xl:pt-2 2xl:my-4">
            I'm Dennis Rivera, a front-end developer based in Atlanta, GA.
          </p>
          <p className="py-6 -mt-4 lg:mt-4 xl:mt-2 xl:text-left 2xl:-mt-4">
          I take into account both sides of the project, users and business to meet the needs of both. Applying analytical thinking, user research and evaluation of the best method and solution, resulting in functional UI designs and 100% sure of its implementation, this thanks to the experience in development acquired in all these years.
			</p>

          <div className=" mt-4 flex justify-evenly text-xl lg:w-8/12 lg:mx-auto xl:justify-evenly 2xl:relative 2xl:right-32">
          <Link
            to="http://twitter.com/"
            target="_blank"
            alt="Twitter Profile"
            title="Twitter"
            className="rounded-full bg-accentColor p-2 text-mainAccent lg:hover:bg-secondaryColor lg:hover:text-mainAccent lg:mr-2 xl:mr-12 "
          >
            <FaTwitter />
          </Link>{" "}
          <Link
            to="http://linkedin.com/"
            target="_blank"
            title="Linkedin"
            className="rounded-full bg-accentColor p-2 text-mainAccent lg:hover:bg-secondaryColor lg:hover:text-mainAccent lg:mr-2 xl:mr-12"
          >
            <FaLinkedinIn/>
          </Link>{" "}
          <Link
            to="http://facebook.com/"
            target="_blank"
            title="Facebook"
            className="rounded-full bg-accentColor p-2 text-mainAccent lg:hover:bg-secondaryColor lg:hover:text-mainAccent lg:mr-2 xl:mr-12"
          >
            <FaFacebookF />
          </Link>{" "}
          <Link
            to="http://instagram.com/"
            target="_blank"
            title="Instagram"
            className="rounded-full bg-accentColor p-2 text-mainAccent lg:hover:bg-secondaryColor lg:hover:text-mainAccent lg:mr-2 xl:mr-12"
          >
            <FaInstagram />
          </Link>{" "}
          <Link
            to="http://github.com/"
            target="_blank"
            title="Github"
            className="rounded-full bg-accentColor p-2 text-mainAccent lg:hover:bg-secondaryColor lg:hover:text-mainAccent lg:mr-2 xl:mr-12"
          >
            <FaGithubAlt />
          </Link>{" "}
          <Link
            to="http://semicolon.dev/"
            target="_blank"
            title="Semicolon"
            className=" rounded-full bg-accentColor p-2 text-mainAccent lg:hover:bg-secondaryColor lg:hover:text-mainAccent lg:mr-2 xl:mr-12"
          >
            <FaTerminal />
          </Link>{" "}
        </div>

      </div>

      <div className="mx-auto xl:mt-12">
        <StaticImage className='lg:w-72 xl:w-96' src='../images/Shadow.png' />
      </div>



    </div>

  {/* Portfolio Section */}
  <Portfolio />
<MainContact />
  </div>

  )
}

export default IndexPage
