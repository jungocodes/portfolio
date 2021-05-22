import * as React from "react"
import  {Link}  from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithubAlt, FaTerminal } from "react-icons/fa";





import "../styles/main.css"

// import HideOnScroll from '../components/HideOnScroll'
// import BackToTop from '../components/BackToTop'

// Import Components
// import Portfolio from "../components/portfolio"
// import Contact from "../../contact"

function IndexPage() {
  return (
    // Container
    <div className="flex flex-col">
      {/* About Content */}
       <div className="order-last mx-4 text-center -mt-4">
        <h1 className='text-4xl font-bold tracking-wider'>
            <Link id="back-to-top-anchor">

             <span className='text-secondaryColor'>Jungo</span> Codes
            </Link>
          </h1>
          <h4 className="py-2 tracking-wider">Front-End Developer</h4>
          <div class="w-12 h-1 bg-secondaryColor rounded mt-2 mb-4 mx-auto"></div>
          <p className="leading-normal text-lg">
            Meggings portland fingerstache lyft, post-ironic fixie m mi umami
            everyday carry hexagon locavore art party. Locavore small batch
            listicle g m-to-table lumbersexual salvia messenger g book flannel
            truffaut craft beer drinking vinegar sartorial, disrupt fashion axe
            normcore meh butcher.
          </p>

          <div className="mt-4 flex justify-evenly text-xl ">
          <Link
            to="http://twitter.com/"
            target="_blank"
            alt="Twitter Profile"
            title="Twitter"
            className="rounded-full bg-accentColor p-2 text-mainAccent"
          >
            <FaTwitter />
          </Link>{" "}
          <Link
            to="http://linkedin.com/"
            target="_blank"
            title="Linkedin"
            className="rounded-full bg-accentColor p-2 text-mainAccent"
          >
            <FaLinkedinIn/>
          </Link>{" "}
          <Link
            to="http://facebook.com/"
            target="_blank"
            title="Facebook"
            className="rounded-full bg-accentColor p-2 text-mainAccent"
          >
            <FaFacebookF />
          </Link>{" "}
          <Link
            to="http://instagram.com/"
            target="_blank"
            title="Instagram"
            className="rounded-full bg-accentColor p-2 text-mainAccent"
          >
            <FaInstagram />
          </Link>{" "}
          <Link
            to="http://github.com/"
            target="_blank"
            title="Github"
            className="rounded-full bg-accentColor p-2 text-mainAccent"
          >
            <FaGithubAlt />
          </Link>{" "}
          <Link
            to="http://semicolon.dev/"
            target="_blank"
            title="Semicolon"
            className=" rounded-full bg-accentColor p-2 text-mainAccent"
          >
            <FaTerminal />
          </Link>{" "}
        </div>

      </div>

      <div className="">
        <StaticImage src='../images/Shadow.png' />
      </div>


    </div>
  )
}

export default IndexPage
