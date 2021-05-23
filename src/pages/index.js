import * as React from "react"
import  {Link}  from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithubAlt, FaTerminal } from "react-icons/fa";


// Import Components
import Portfolio from "../components/portfolio/portfolio"
// import Contact from "../../contact"

function IndexPage() {
  return (
    <div className='sm:container sm:w-11/12 sm:mx-auto  lg:mt-10 lg:py-6 lg:px-6  '>
    <div className="flex flex-col lg:mx-auto xl:flex-row xl:items-center xl:w-10/12 xl:p-10 ">
      {/* About Content */}
       <div className="order-last mx-4 text-center -mt-4 lg:mt-0 xl:text-left 2xl:px-8">
        <h1 className='text-4xl font-bold tracking-wider xl:mt-10 xl:tracking-widest'>
            <Link id="back-to-top-anchor">

             <span className='text-secondaryColor'>Jungo</span> Codes
            </Link>
          </h1>
          <h4 className="py-2 tracking-wider">Front-End Developer</h4>
          <div class="w-12 h-1 bg-secondaryColor rounded mt-2 mb-4 mx-auto xl:m-0"></div>
          <p className="leading-normal text-lg lg:m-8 xl:m-0 xl:pt-2 2xl:my-4">
            Meggings portland fingerstache lyft, post-ironic fixie m mi umami.
          </p>
          <p className="leading-normal text-lg lg:m-8 xl:m-0 xl:pt-2">
            Meggings portland fingerstache lyft, post-ironic fixie m mi umami
            everyday carry hexagon locavore art party. Locavore small batch
            listicle g m-to-table lumbersexual salvia messenger g book flannel
            truffaut craft beer drinking vinegar sartorial, disrupt fashion axe
            normcore meh butcher.
          </p>

          <div className="mt-4 flex justify-evenly text-xl lg:w-8/12 lg:mx-auto xl:justify-start 2xl:w-full">
          <Link
            to="http://twitter.com/"
            target="_blank"
            alt="Twitter Profile"
            title="Twitter"
            className="rounded-full bg-accentColor p-2 text-mainAccent lg:mr-2 2xl:mr-6"
          >
            <FaTwitter />
          </Link>{" "}
          <Link
            to="http://linkedin.com/"
            target="_blank"
            title="Linkedin"
            className="rounded-full bg-accentColor p-2 text-mainAccent lg:mr-2 2xl:mr-6"
          >
            <FaLinkedinIn/>
          </Link>{" "}
          <Link
            to="http://facebook.com/"
            target="_blank"
            title="Facebook"
            className="rounded-full bg-accentColor p-2 text-mainAccent lg:mr-2 2xl:mr-6"
          >
            <FaFacebookF />
          </Link>{" "}
          <Link
            to="http://instagram.com/"
            target="_blank"
            title="Instagram"
            className="rounded-full bg-accentColor p-2 text-mainAccent lg:mr-2 2xl:mr-6"
          >
            <FaInstagram />
          </Link>{" "}
          <Link
            to="http://github.com/"
            target="_blank"
            title="Github"
            className="rounded-full bg-accentColor p-2 text-mainAccent lg:mr-2 2xl:mr-6"
          >
            <FaGithubAlt />
          </Link>{" "}
          <Link
            to="http://semicolon.dev/"
            target="_blank"
            title="Semicolon"
            className=" rounded-full bg-accentColor p-2 text-mainAccent lg:mr-2 2xl:mr-6"
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

  </div>

  )
}

export default IndexPage
