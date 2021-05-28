import * as React from "react"
import  {Link}  from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FaReadme, FaEye, FaGithubAlt } from "react-icons/fa";


const jungoCodes = () => {
    return (

<div className="font-sans flex flex-wrap -mx-1 lg:w-full">


<div className=" my-1 px-1 w-full lg:my-4 lg:px-4 ">


    <article className="bg-mainAccent overflow-hidden rounded-lg shadow-lg">


            <StaticImage alt="Placeholder" className="block h-auto w-full" src='../../images/ProjectJungo.png'/>


        <header className="flex items-center justify-between leading-tight p-4 md:p-6">
        <h2 className='font-bold text-3xl lg:px-10'><span className='text-secondaryColor'>Jungo</span> Codes</h2>
        </header>

        <div className=' px-4  flex flex-col items-center -z-50 md:px-6'>

      <p className='mb-4 text-default py-1 lg:px-10 text-lg leading-relaxed'>A simple and clean website which focuses on content instead of fancy animations. making it easy for the user to navigate through the site saving them time from navigating through many pages. View links below to learn about the code, visit the site live, or read about the process of making this site.</p>
    </div>

        {/* This footer contains navigation links for user to view code, visit the live site, or read about the process of development */}
        <footer className="py-4 flex justify-evenly bg-secondaryColor w-full">
        <Link
          to="https://github.com/jungocodes/portfolio"
          target="_blank"
          alt="Project Repo"
          title="Github"
          className=" p-2 text-mainAccent flex items-center uppercase lg:hover:text-accentColor"
        >
          <FaGithubAlt className='mr-3 text-lg'/>Code
        </Link>
        <Link
          to="http://linkedin.com/"
          target="_blank"
          title="Live Preview"
          className=" p-2 text-mainAccent flex items-center uppercase lg:hover:text-accentColor"
        >
          <FaEye className='mr-3 text-lg'/>Live
        </Link>
        <Link
          to="/about-jungo-codes"
          target="_blank"
          title="About Project"
          className=" p-2 text-mainAccent flex items-center uppercase lg:hover:text-accentColor"
        >
          <FaReadme className='mr-3 text-lg '/>Read
        </Link>
        </footer>

    </article>


</div>

</div>





    )
}

export default jungoCodes
