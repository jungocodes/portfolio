import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineRocket,
  AiOutlineMail,
  AiOutlineCode
} from "react-icons/ai"

const Profile = () => {
  const data = useStaticQuery(graphql`
    query {
      Profile: file(relativePath: { eq: "Shadow.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `)
  return (

        <div className="max-w-full px-4 flex-col flex mt-10 lg:flex-row lg:justify-evenly xl:max-w-6xl xl:mx-auto">
          <div className="text-center mt-4 lg:mt-36 lg:w-4/6 lg:text-left lg:mx-20 2xl:justify-evenly">
            <h1 className=" text-3xl mb-4 lg:mb-0 lg:mt-16 lg:pb-4 lg:text-6xl">
              <span className="font-bold focused-title ">Jungo</span> Codes
            </h1>
            <h4 className='mb-4 lg:mb-0 lg:text-2xl'>Front-End Developer</h4>
            <div className="w-12 h-1   divider mx-auto rounded mt-2 mb-4 lg:mx-0"></div>
            <p className="leading-relaxed text-lg mb-8 sm:mb-12 sm:px-10  lg:px-0">
              Meggings portland fingerstache lyft, post-ironic fixie man bun
              banh mi umami everyday carry hexagon locavore direct trade art
              party. Locavore small batch listicle gastropub farm-to-table
              lumbersexual salvia messenger bag. Coloring book flannel truffaut
              craft beer drinking vinegar sartorial, disrupt fashion axe
              normcore meh butcher.
            </p>

            <div className='flex justify-evenly mx-auto relative bottom-8 sm:bottom-4 lg:right-28 lg:px-14'>
            <button className="flex  jusify-evenly flex-shrink-1 text-white border-0 py-2 px-2 focus:outline-none rounded text-lg mt-10 shadow-lg sm:mt-0  lg:px-8" >
            <AiOutlineMail className='text-3xl pr-2' /> Hire Me
            </button>

            <button className="flex  jusify-evenly shadow-lg flex-shrink-1 text-white border-0 py-2 px-2 focus:outline-none rounded text-lg mt-10 sm:mt-0 lg:px-8" >
            <AiOutlineCode className='text-3xl pr-2' /> Portfolio
            </button>

            </div>
          </div>
          {/* Profile Image */}
          <div className="order-first mx-auto mt-6 lg:order-last lg:-mx-2 lg:relative lg:flex lg:flex-col justify-center lg:w-5/12  lg:top-24 2xl:top-14">
            <GatsbyImage image={data.Profile.childImageSharp.gatsbyImageData} />
            {/* Social Media Profiles */}
            <div className="social-profiles text-2xl flex justify-evenly items-center relative bottom-4 lg:mx-10 2xl:text-3xl">
              <Link
                to="http://twitter.com/"
                target="_blank"
                alt="Twitter Profile"
                title="Twitter"
                className="social-icons mr-3"
              >
                <AiOutlineTwitter />
              </Link>{" "}
              {/* End of Twitter */}
              <Link
                to="http://linkedin.com/"
                target="_blank"
                title="Linkedin"
                className="social-icons mr-3"
              >
                <AiOutlineLinkedin />
              </Link>{" "}
              {/* End of Linkedin */}
              <Link
                to="http://facebook.com/"
                target="_blank"
                title="Facebook"
                className="social-icons mr-3"
              >
                <AiOutlineFacebook />
              </Link>{" "}
              {/* End of Facebook */}
              <Link
                to="http://instagram.com/"
                target="_blank"
                title="Instagram"
                className="social-icons mr-3"
              >
                <AiOutlineInstagram />
              </Link>{" "}
              {/* End of Instagram */}
              <Link
                to="http://github.com/"
                target="_blank"
                title="Github"
                className="social-icons mr-3"
              >
                <AiOutlineGithub />
              </Link>{" "}
              {/* End of Github */}
              <Link
                to="http://semicolon.dev/"
                target="_blank"
                title="Semicolon"
                className="social-icons mr-0"
              >
                <AiOutlineRocket />
              </Link>{" "}
              {/* End of Semicolon */}
            </div>
          </div>
        </div>
  )
}

export default Profile
