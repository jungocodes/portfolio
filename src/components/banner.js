import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {  GatsbyImage} from "gatsby-plugin-image"

const Banner = () => {
    const data = useStaticQuery(graphql`
        query{
          BannerOne: file(relativePath: { eq: "BannerOne.jpeg" }) {
               childImageSharp {
                 gatsbyImageData(layout: CONSTRAINED)
               }
             }
             BannerTwo: file(relativePath: { eq: "BannerTwo.jpeg" }) {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED)
                }
              }
              BannerThree: file(relativePath: { eq: "BannerThree.jpeg" }) {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED)
                }
              }
       }

`)
    return (
        <div className="container- flex items-center from-white relative h-screen">
            {/* Top Image */}
            <div className="-z-5 lg:w-1/5 md:w-4/12 relative left-20  md:bottom-32 2xl:bottom-48">
            <GatsbyImage image={data.BannerTwo.childImageSharp.gatsbyImageData} className='rounded' />
            </div>
            {/* Banner Title */}
      <div className="text-7xl uppercase tracking-widest font-bold absolute w-full left-0 top-2/4 transform -translate-y-2/4 text-center mix-blend-difference z-10 lg:tracking-widest 2xl:text-8xl main-title">
        Jungo Codes
      </div>
      {/* Middle Image */}
      <div className=" -z-5 lg:w-6/12 m-auto ">
            <GatsbyImage image={data.BannerOne.childImageSharp.gatsbyImageData} className='rounded' />
      </div>
      {/* Bottom Image */}
      <div className=" -z-5 w-2/12 lg:w-1/5 relative right-16 md:top-32 lg:top-24 2xl:top-48">
      <GatsbyImage image={data.BannerThree.childImageSharp.gatsbyImageData} className='rounded' />
      </div>
    </div>
    )


}

export default Banner
