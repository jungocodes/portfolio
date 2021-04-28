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
       }

`)
    return (
        <div className="container- flex items-center from-white relative h-screen">
      <div className="text-7xl uppercase tracking-wider font-bold from-white absolute w-full left-0 top-2/4 transform -translate-y-2/4 text-center mix-blend-difference z-9 lg:tracking-wider 2xl:tracking-widest xl:text-8xl ">
        Jungo Codes
      </div>
      <div className="main-image">

            <GatsbyImage image={data.BannerOne.childImageSharp.gatsbyImageData} />

      </div>
    </div>
    )


}

export default Banner
