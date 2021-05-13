import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Toolbar from '@material-ui/core/Toolbar';

import TwitterIcon from "@material-ui/icons/Twitter"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import CodeIcon from "@material-ui/icons/Code"
import MailIcon from "@material-ui/icons/Mail"
import ForumIcon from '@material-ui/icons/Forum';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import "../styles/main.css"

import HideOnScroll from '../components/HideOnScroll'
import BackToTop from '../components/BackToTop'

// Import Components

import Portfolio from "../components/portfolio"

function IndexPage() {
  const  data = useStaticQuery(graphql`
  query {
    Profile: file(relativePath: { eq: "Shadow.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`)

  return (
    <>
        <div className="wrapper">
       <HideOnScroll>
      <div className="profile__container">

<div className="profile">
      <div className="profile__content" >
        <h1 className="profile__title" >
          <Link id='back-to-top-anchor' >
          <span>Jungo</span> Codes
          </Link>
        </h1>
        <h4 className="profile__desc">Front-End Developer</h4>
        <div className="divider"></div>
        <p className="profile__about">
          Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi
          umami everyday carry hexagon locavore direct trade art party. Locavore
          small batch listicle gastropub farm-to-table lumbersexual salvia
          messenger bag. Coloring book flannel truffaut craft beer drinking
          vinegar sartorial, disrupt fashion axe normcore meh butcher.
        </p>

        <div className="profile__btns">
        <Button variant="contained" className='profile__btn'>
        <MailIcon /> Hire Me
        </Button>
        <Button variant="contained" className='profile__btn' href='#portfolio'>
        <CodeIcon /> Portfolio
        </Button>


        </div>
      </div>

    </div>
      {/* Profile Image */}
      <div className="profile__image">
        <GatsbyImage image={data.Profile.childImageSharp.gatsbyImageData} className='img' />
        {/* Social Media Profiles */}
        <div className="social__profiles">
          <Link
            to="http://twitter.com/"
            target="_blank"
            alt="Twitter Profile"
            title="Twitter"
            className="social-icons"
          >
            <TwitterIcon />
          </Link>{" "}
          {/* End of Twitter */}
          <Link
            to="http://linkedin.com/"
            target="_blank"
            title="Linkedin"
            className="social-icons"
          >
            <LinkedInIcon />
          </Link>{" "}
          {/* End of Linkedin */}
          <Link
            to="http://facebook.com/"
            target="_blank"
            title="Facebook"
            className="social-icons"
          >
            <FacebookIcon />
          </Link>{" "}
          {/* End of Facebook */}
          <Link
            to="http://instagram.com/"
            target="_blank"
            title="Instagram"
            className="social-icons"
          >
            <InstagramIcon />
          </Link>{" "}
          {/* End of Instagram */}
          <Link
            to="http://github.com/"
            target="_blank"
            title="Github"
            className="social-icons"
          >
            <GitHubIcon />
          </Link>{" "}
          {/* End of Github */}
          <Link
            to="http://semicolon.dev/"
            target="_blank"
            title="Semicolon"
            className="social-icons "
          >
            <ForumIcon />
          </Link>{" "}
          {/* End of Semicolon */}
        </div>
      </div>

    </div>
      </HideOnScroll>
    <Portfolio />
    </div>






    <Toolbar id="back-to-top-anchor" />

    <BackToTop>
        <Fab size="large" aria-label="scroll back to top">
          <KeyboardArrowUpIcon/>
        </Fab>
      </BackToTop>
    </>
  )

}



export default IndexPage
