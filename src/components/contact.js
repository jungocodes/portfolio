import React from "react"
import { Link } from "gatsby"

import TextField from "@material-ui/core/TextField"
import Button from '@material-ui/core/Button';

import TwitterIcon from "@material-ui/icons/Twitter"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import ForumIcon from "@material-ui/icons/Forum"
import SendIcon from '@material-ui/icons/Send';

import "../styles/contact.css"

const contact = () => {
  return (
    <div className='contact__container'>
        <div className="contact__content">
        <h4>
         Let's create
        </h4>
        <h2>
          <span>Work</span> Together
        </h2>
        <p>Tell me about your needs, and let's start working together on the best solution for your users and business.</p>

        <div className="social__profiles digital__footprint">
          <div className='contact__content'>
          <h3>
         My digital print
        </h3>
        <h2>
          <span>Let's</span> Connect
        </h2>
          </div>
          <div className="social__profiles contact__social">
          <Link
            to="http://t witter.com/"
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

      <form noValidate autoComplete="on" >
      <TextField
    id="outlined-secondary"
    label="Enter Name"
    variant="outlined"
    fullWidth
  />
        <TextField
    id="outlined-secondary"
    label="Email Address"
    variant="outlined"
    fullWidth
  />

<TextField
          id="outlined-textarea"
          label="About Your Project"
          placeholder="Budget, deadlines, special requirements, extra details..."
          multiline
          variant="outlined"
          fullWidth
        />

<Button
        variant="contained"
        endIcon={<SendIcon />}
        className='form__btn'
      >
        Let's work!
      </Button>
      </form>
    </div>
  )
}

export default contact
