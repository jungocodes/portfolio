import * as React from "react"
import { Link } from "gatsby"
import {
  FaArrowLeft,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithubAlt,
  FaTerminal,
} from "react-icons/fa"
const Contact = () => {
  return (
    <div className="font-sans  body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Me
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Tell me about your needs, and let's start working together on the
            best solution for your users and business.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form name='contact-page' netlify netlify-honeypot="bot-field" hidden className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div class="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  class="w-full bg-accentColor bg-opacity-50 rounded focus:ring-2 focus:ring-secondaryColor text-base outline-none text-default py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div class="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  class="w-full bg-accentColor bg-opacity-50 rounded focus:ring-2 focus:ring-secondaryColor text-base outline-none text-default py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div class="relative">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Budget, deadlines, special requirements, extra details..."
                  class="w-full h-44 bg-accentColor bg-opacity-50 rounded focus:ring-2 focus:ring-secondaryColor text-base outline-none text-default py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                type="submit"
                class="flex mx-auto text-mainAccent bg-secondaryColor py-2 px-8 focus:outline-none hover:bg-accentColor hover:text-secondaryColor rounded text-lg"
              >
                Button
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-secondaryColor text-center">
              <Link
                to="/"
                className="w-2/12 text-base flex items-center md:text-sm text-green-500 font-bold no-underline hover:underline"
              >

                <FaArrowLeft className="mr-2" /> Back Home
              </Link>
              <p className="leading-normal my-5">
                49 Smith St.
                <br />
                Saint Cloud, MN 56301
              </p>
              <div className=" mt-8 flex justify-evenly text-xl lg:w-8/12 lg:mx-auto xl:justify-evenly xl:mt-6 xl:mb-4 2xl:w-full">
                <Link
                  to="http://twitter.com/"
                  target="_blank"
                  alt="Twitter Profile"
                  title="Twitter"
                  className="rounded-full bg-accentColor p-2 mr-2  text-mainAccent lg:hover:bg-secondaryColor lg:hover:text-mainAccent lg:mr-2 xl:mr-4  2xl:mr-6"
                >
                  <FaTwitter />
                </Link>{" "}
                <Link
                  to="http://linkedin.com/"
                  target="_blank"
                  title="Linkedin"
                  className="rounded-full bg-accentColor p-2 mr-2  text-mainAccent lg:hover:bg-secondaryColor lg:hover:text-mainAccent lg:mr-2 xl:mr-4  2xl:mr-6"
                >
                  <FaLinkedinIn />
                </Link>{" "}
                <Link
                  to="http://facebook.com/"
                  target="_blank"
                  title="Facebook"
                  className="rounded-full bg-accentColor p-2 mr-2  text-mainAccent lg:hover:bg-secondaryColor lg:hover:text-mainAccent lg:mr-2 xl:mr-4  2xl:mr-6"
                >
                  <FaFacebookF />
                </Link>{" "}
                <Link
                  to="http://instagram.com/"
                  target="_blank"
                  title="Instagram"
                  className="rounded-full bg-accentColor p-2 mr-2  text-mainAccent lg:hover:bg-secondaryColor lg:hover:text-mainAccent lg:mr-2 xl:mr-4  2xl:mr-6"
                >
                  <FaInstagram />
                </Link>{" "}
                <Link
                  to="http://github.com/"
                  target="_blank"
                  title="Github"
                  className="rounded-full bg-accentColor p-2 mr-2  text-mainAccent lg:hover:bg-secondaryColor lg:hover:text-mainAccent lg:mr-2 xl:mr-4  2xl:mr-6"
                >
                  <FaGithubAlt />
                </Link>{" "}
                <Link
                  to="http://semicolon.dev/"
                  target="_blank"
                  title="Semicolon"
                  className=" rounded-full bg-accentColor p-2 mr-2  text-mainAccent lg:hover:bg-secondaryColor lg:hover:text-mainAccent lg:mr-2 xl:mr-4  2xl:mr-6"
                >
                  <FaTerminal />
                </Link>{" "}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
