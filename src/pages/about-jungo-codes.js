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

const JungoArticle = () => (
  <div className="flex flex-wrap -mx-1 h-auto lg:w-full xl:w-10/12 xl:mx-auto">
    <Link
      to="http://instagram.com/"
      target="_blank"
      title="Instagram"
      className="rounded-full bg-secondaryColor p-2 mx-auto text-mainAccent lg:hover:bg-secondaryColor lg:hover:text-mainAccent lg:mr-2 xl:mr-4  2xl:mr-6"
    >
      <FaArrowLeft />
    </Link>{" "}
    <div className=" my-1 px-1 lg:my-4 lg:px-4 ">
      <article className="bg-mainAccent  overflow-hidden rounded-lg shadow-lg">
        {/* Feature Image */}
        <img
          alt="Placeholder"
          className="block w-full h-auto lg:h-96 "
          src="https://picsum.photos/600/400/?random"
        />

        <header className="flex flex-col items-center justify-center leading-tight p-4 md:p-6">
          <h1 className="font-bold text-3xl   lg:px-10 lg:mb-0">
            <span className="text-secondaryColor">Jungo</span> Codes
          </h1>
          <h2 className="py-2 tracking-wider">Simplicity Was The Goal</h2>

          <div class="w-12 h-1 bg-secondaryColor rounded mb-4 mx-auto xl:m-0"></div>
        </header>


        {/* Article Content */}
        <div className=" px-4  flex flex-col items-center -z-50 md:px-6 lg:px-14   xl:mb-4">
          <div className=" mb-4 text-default py-1 px-4 text-lg leading-relaxed  lg:px-10 lg:w-10/12  xl:px-20 2xl:px-28 ">
            <p className='xl:-mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              eveniet, dolorum voluptas incidunt, ipsam aut perferendis nam
              expedita adipisci consequuntur consequatur autem, eligendi quasi
              nemo ducimus quod ullam blanditiis possimus.
            </p>{" "}
            <br />
            <p className='xl:-mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              eveniet, dolorum voluptas incidunt, ipsam aut perferendis nam
              expedita adipisci consequuntur consequatur autem, eligendi quasi
              nemo ducimus quod ullam blanditiis possimus.
            </p>{" "}
            <br />
            <p className='xl:-mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              eveniet, dolorum voluptas incidunt, ipsam aut perferendis nam
              expedita adipisci consequuntur consequatur autem, eligendi quasi
              nemo ducimus quod ullam blanditiis possimus.
            </p>{" "}
            <br />
          </div>
        </div>

        <footer className="py-4 flex justify-evenly bg-secondaryColor w-full">
          <div className=" mt-4 flex justify-evenly text-xl lg:w-8/12 lg:mx-auto xl:justify-evenly xl:mt-6 xl:mb-4 2xl:w-full">
            <Link
              to="http://twitter.com/"
              target="_blank"
              alt="Twitter Profile"
              title="Twitter"
              className="rounded-full bg-accentColor p-2 text-secondaryColor lg:hover:bg-secondaryColor lg:hover:text-mainAccent lg:mr-2 xl:mr-4  2xl:mr-6"
            >
              <FaTwitter />
            </Link>{" "}
            <Link
              to="http://linkedin.com/"
              target="_blank"
              title="Linkedin"
              className="rounded-full bg-accentColor p-2 text-secondaryColor lg:hover:bg-secondaryColor lg:hover:text-mainAccent lg:mr-2 xl:mr-4 2xl:mr-6"
            >
              <FaLinkedinIn />
            </Link>{" "}
            <Link
              to="http://facebook.com/"
              target="_blank"
              title="Facebook"
              className="rounded-full bg-accentColor p-2 text-secondaryColor lg:hover:bg-secondaryColor lg:hover:text-mainAccent lg:mr-2 xl:mr-4  2xl:mr-6"
            >
              <FaFacebookF />
            </Link>{" "}
            <Link
              to="http://instagram.com/"
              target="_blank"
              title="Instagram"
              className="rounded-full bg-accentColor p-2 text-secondaryColor lg:hover:bg-secondaryColor lg:hover:text-mainAccent lg:mr-2 xl:mr-4  2xl:mr-6"
            >
              <FaInstagram />
            </Link>{" "}
            <Link
              to="http://github.com/"
              target="_blank"
              title="Github"
              className="rounded-full bg-accentColor p-2 text-secondaryColor lg:hover:bg-secondaryColor lg:hover:text-mainAccent lg:mr-2 xl:mr-4  2xl:mr-6"
            >
              <FaGithubAlt />
            </Link>{" "}
            <Link
              to="http://semicolon.dev/"
              target="_blank"
              title="Semicolon"
              className=" rounded-full bg-accentColor p-2 text-secondaryColor lg:hover:bg-secondaryColor lg:hover:text-mainAccent lg:mr-2 xl:mr-4  2xl:mr-6"
            >
              <FaTerminal />
            </Link>{" "}
          </div>
        </footer>
      </article>
    </div>
  </div>
)

export default JungoArticle
