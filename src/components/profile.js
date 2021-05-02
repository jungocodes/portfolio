import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import {  GatsbyImage} from "gatsby-plugin-image"
import { AiOutlineTwitter,  AiOutlineGithub, AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineRocket   } from 'react-icons/ai'

const Profile = () => {
  const data = useStaticQuery(graphql`
        query{
          Profile: file(relativePath: { eq: "Shadow.png" }) {
               childImageSharp {
                 gatsbyImageData(layout: CONSTRAINED)
               }
             }

       }

`)
    return (
      <div class="container px-5 py-24 mx-auto flex flex-col">
      <div class="lg:w-4/6 mx-20 ">

        <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:mt-0 text-left sm:text-left lg:bottom-0">
          <h1 className='lg:pb-4 text-5xl'> <span className='font-bold focused-title'>Jungo</span>  Codes</h1>
          <h4>Front-End Developer</h4>
          <div class="w-12 h-1  divider rounded mt-2 mb-4"></div>
            <p class="leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
          </div>
          <div class=" flex flex-col items-center mt-6 -mx-2 relative lg:left-64  lg:bottom-6">
          <GatsbyImage image={data.Profile.childImageSharp.gatsbyImageData} />
          {/* Social Media Profiles */}
          <div className='social-profiles text-3xl flex justify-center items-center'>
            <Link to='http://twitter.com/' target='_blank' alt='Twitter Profile' title='Twitter' className='social-icons mr-3'>
                <AiOutlineTwitter  />
            </Link> {/* End of Twitter */}
            <Link to='http://linkedin.com/' target='_blank' title='Linkedin' className='social-icons mr-3'>
                <AiOutlineLinkedin  />
            </Link> {/* End of Linkedin */}
            <Link to='http://facebook.com/' target='_blank' title='Facebook'className='social-icons mr-3'>
                <AiOutlineFacebook  />
            </Link> {/* End of Facebook */}
            <Link to='http://instagram.com/' target='_blank' title='Instagram'className='social-icons mr-3'>
                <AiOutlineInstagram  />
            </Link> {/* End of Instagram */}
            <Link to='http://github.com/' target='_blank' title='Github' className='social-icons mr-3'>
                <AiOutlineGithub  />
            </Link> {/* End of Github */}
            <Link to='http://semicolon.dev/' target='_blank' title='Semicolon'className='social-icons mr-0'>
                <AiOutlineRocket  />
            </Link> {/* End of Semicolon */}

        </div>
          </div>


        </div>
      </div>
    </div>
    )

}

export default Profile
