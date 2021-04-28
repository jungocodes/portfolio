import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser"

const Image = () => {
    const data = useStaticQuery(graphql`
             query{
                file(relativePath: { eq: "gatsby-astronaut.png" }) {
                    childImageSharp {
                      gatsbyImageData(layout: FULL_WIDTH)
                    }
                  }
            }

    `)
    return  <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
}

export default Image