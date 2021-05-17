import * as React from "react"
import  {Link}  from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import TwitterIcon from "@material-ui/icons/Twitter"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import ForumIcon from "@material-ui/icons/Forum"

import "../styles/profile.css"

function profile() {

  return (
    <div className="profile__container">
      <div className="profile">
        <div className="profile__content">
          <h1 className="profile__title">
            <Link id="back-to-top-anchor">
             <span>Jungo</span> Codes
            </Link>
          </h1>
          <h4 className="profile__desc">Front-End Developer</h4>
          <div className="divider"></div>
          <p className="profile__about">
            Meggings portland fingerstache lyft, post-ironic fixie m mi umami
            everyday carry hexagon locavore art party. Locavore small batch
            listicle g m-to-table lumbersexual salvia messenger g book flannel
            truffaut craft beer drinking vinegar sartorial, disrupt fashion axe
            normcore meh butcher.
          </p>

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
          <Link
            to="http://linkedin.com/"
            target="_blank"
            title="Linkedin"
            className="social-icons"
          >
            <LinkedInIcon />
          </Link>{" "}
          <Link
            to="http://facebook.com/"
            target="_blank"
            title="Facebook"
            className="social-icons"
          >
            <FacebookIcon />
          </Link>{" "}
          <Link
            to="http://instagram.com/"
            target="_blank"
            title="Instagram"
            className="social-icons"
          >
            <InstagramIcon />
          </Link>{" "}
          <Link
            to="http://github.com/"
            target="_blank"
            title="Github"
            className="social-icons"
          >
            <GitHubIcon />
          </Link>{" "}
          <Link
            to="http://semicolon.dev/"
            target="_blank"
            title="Semicolon"
            className="social-icons "
          >
            <ForumIcon />
          </Link>{" "}
        </div>
        </div>
      </div>

      <div className="profile__image">
        <StaticImage src='../images/Shadow.png' />


      </div>
    </div>
  )
}

export default profile
