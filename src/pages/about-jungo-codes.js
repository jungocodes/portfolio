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




	<div className="container w-full md:max-w-3xl mx-auto pt-20 font-sans leading-normal tracking-normal">
  <img
          alt="Placeholder"
          className="block w-full h-auto lg:h-96 "
          src="https://picsum.photos/600/400/?random"
        />

		<div className="w-full px-4 mt-4 md:px-6 text-xl text-gray-800 leading-normal">

			{/* <!--Title-->*/}
			<div className="font-sans">
				<p className="text-base md:text-sm text-green-500 font-bold"> <Link to="/" className="text-base flex items-center md:text-sm text-green-500 font-bold no-underline hover:underline"> <FaArrowLeft className='mr-2' /> Back Home </Link></p>
						<h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">Welcome to Minimal Blog</h1>
			</div>


			{/* <!--Post Content--> */}


			{/* <!--Lead Para--> */}
			<p className="py-6">
				👋 Welcome fellow <a className="text-green-500 no-underline hover:underline" href="https://www.tailwindcss.com">Tailwind CSS</a> and miminal monochrome blog fan. This starter template provides a starting point to create your own minimal monochrome blog using Tailwind CSS and vanilla Javascript.
			</p>

			<p className="py-6">The basic blog page layout is available and all using the default Tailwind CSS classes (although there are a few hardcoded style tags). If you are going to use this in your project, you will want to convert the classes into components.</p>


			<p className="py-6">Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus purus, in mattis tortor sollicitudin pretium. Phasellus at diam posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi diam, pulvinar ut molestie eget, eleifend ac magna. Sed at lorem condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend turpis vel erat bibendum scelerisque. Maecenas id risus dictum, rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae molestie quam fermentum. Donec ac pretium diam. Suspendisse sed odio risus. Nunc nec luctus nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec nulla eget sem dictum elementum.</p>

			<ol>
				<li className="py-3">Maecenas accumsan lacus sit amet elementum porta. Aliquam eu libero lectus. Fusce vehicula dictum mi. In non dolor at sem ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi sit amet tellus scelerisque tortor semper posuere.</li>
				<li className="py-3">Morbi varius posuere blandit. Praesent gravida bibendum neque eget commodo. Duis auctor ornare mauris, eu accumsan odio viverra in. Proin sagittis maximus pharetra. Nullam lorem mauris, faucibus ut odio tempus, ultrices aliquet ex. Nam id quam eget ipsum luctus hendrerit. Ut eros magna, eleifend ac ornare vulputate, pretium nec felis.</li>
				<li className="py-3">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc vitae pretium elit. Cras leo mauris, tristique in risus ac, tristique rutrum velit. Mauris accumsan tempor felis vitae gravida. Cras egestas convallis malesuada. Etiam ac ante id tortor vulputate pretium. Maecenas vel sapien suscipit, elementum odio et, consequat tellus.</li>
			</ol>






			{/* <!--/ Post Content--> */}

		</div>




		{/* <!--Subscribe--> */}
		<div className="container bg-secondaryColor text-accentColor px-4 mt-8">
			<div className="font-sans rounded-lg shadow-xl p-4 text-center">
        <h3 className="font-bold break-normal text-lg ">Let's create</h3>
				<h2 className="font-bold break-normal text-4xl ">Work Together</h2>
				<div className="w-full text-center pt-4">
        <Link className="flex-1 mt-4 block w-6/12 mx-auto md:inline-block appearance-none bg-accentColor text-secondaryColor text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400">Hire Me</Link>
				</div>
        <div className=" mt-8 flex justify-evenly text-xl lg:w-8/12 lg:mx-auto xl:justify-evenly xl:mt-6 xl:mb-4 2xl:w-full">
          <Link
            to="http://twitter.com/"
            target="_blank"
            alt="Twitter Profile"
            title="Twitter"
            className="rounded-full bg-accentColor p-2 mr-2  text-secondaryColor lg:hover:bg-secondaryColor lg:hover:text-mainAccent lg:mr-2 xl:mr-4  2xl:mr-6"
          >
            <FaTwitter />
          </Link>{" "}
          <Link
            to="http://linkedin.com/"
            target="_blank"
            title="Linkedin"
            className="rounded-full bg-accentColor p-2 mr-2 text-secondaryColor lg:hover:bg-secondaryColor lg:hover:text-mainAccent lg:mr-2 xl:mr-4 2xl:mr-6"
          >
            <FaLinkedinIn />
          </Link>{" "}
          <Link
            to="http://facebook.com/"
            target="_blank"
            title="Facebook"
            className="rounded-full bg-accentColor p-2 mr-2  text-secondaryColor lg:hover:bg-secondaryColor lg:hover:text-mainAccent lg:mr-2 xl:mr-4  2xl:mr-6"
          >
            <FaFacebookF />
          </Link>{" "}
          <Link
            to="http://instagram.com/"
            target="_blank"
            title="Instagram"
            className="rounded-full bg-accentColor p-2 mr-2  text-secondaryColor lg:hover:bg-secondaryColor lg:hover:text-mainAccent lg:mr-2 xl:mr-4  2xl:mr-6"
          >
            <FaInstagram />
          </Link>{" "}
          <Link
            to="http://github.com/"
            target="_blank"
            title="Github"
            className="rounded-full bg-accentColor p-2 mr-2  text-secondaryColor lg:hover:bg-secondaryColor lg:hover:text-mainAccent lg:mr-2 xl:mr-4  2xl:mr-6"
          >
            <FaGithubAlt />
          </Link>{" "}
          <Link
            to="http://semicolon.dev/"
            target="_blank"
            title="Semicolon"
            className=" rounded-full bg-accentColor p-2 mr-2  text-secondaryColor lg:hover:bg-secondaryColor lg:hover:text-mainAccent lg:mr-2 xl:mr-4  2xl:mr-6"
          >
            <FaTerminal />
          </Link>{" "}
        </div>
			</div>
		</div>


    </div>


)

export default JungoArticle
