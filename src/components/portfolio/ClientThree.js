import * as React from "react"
import  {Link}  from "gatsby"
import { FaReadme, FaEye, FaGithubAlt } from "react-icons/fa";

const ClientThree = () => {
    return (
        <div class="flex flex-wrap -mx-1  lg:w-3/6 xl:ml-2">


<div class=" my-1 px-1 w-full lg:my-4 lg:px-4 ">


    <article class="bg-mainAccent overflow-hidden rounded-lg shadow-lg">


            <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random"/>


        <header class="flex items-center justify-between leading-tight p-4 md:p-6">
        <h2 className='font-bold text-3xl'><span className='text-secondaryColor'>Jungo</span> Codes</h2>
        </header>

        <div className=' px-4  flex flex-col items-center -z-50 md:px-6'>

      <p className='mb-4 text-default py-1 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eveniet, dolorum voluptas incidunt, ipsam aut perferendis nam expedita adipisci consequuntur consequatur autem, eligendi quasi nemo ducimus quod ullam blanditiis possimus.</p>
    </div>

        <footer class="mx-6 my-6 py-4 flex justify-evenly">
        <Link
          to="http://twitter.com/"
          target="_blank"
          alt="Project Repo"
          title="Github"
          className=" p-2 text-secondaryColor flex items-center uppercase lg:hover:text-default"
        >
          <FaGithubAlt className='mr-3 text-lg'/>Code
        </Link>{" "}
        <Link
          to="http://linkedin.com/"
          target="_blank"
          title="Live Preview"
          className=" p-2 text-secondaryColor flex items-center uppercase lg:hover:text-default"
        >
          <FaEye className='mr-3 text-lg'/>Live
        </Link>
        <Link
          to="http://linkedin.com/"
          target="_blank"
          title="About Project"
          className=" p-2 text-secondaryColor flex items-center uppercase lg:hover:text-default"
        >
          <FaReadme className='mr-3 text-lg'/>Read
        </Link>
        </footer>

    </article>


</div>

</div>
    )
}

export default ClientThree
