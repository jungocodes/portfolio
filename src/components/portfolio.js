import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import GitHubIcon from "@material-ui/icons/GitHub"
import WebIcon from '@material-ui/icons/Web';
import BookmarkIcon from '@material-ui/icons/Bookmark';

import "../styles/main.css"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      PortfolioOne: file(relativePath: { eq: "PortfolioOne.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      },
      ProjectTwo: file(relativePath: { eq: "BannerTwo.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `)
  return (
    <div className="portfolio__container">

<div className="portfolio">
        <h2 className="portfolio__title">
          <Link id='portfolio'>
          Recent Work
          </Link>
        </h2>

    </div>

      <div className="portfolio__projects">
          {/* Project One */}
      <Card elevation={5} className='projects feature'>
      <CardActionArea href='http://google.com'>
        <CardMedia className='card__img' >
        <GatsbyImage image={data.PortfolioOne.childImageSharp.gatsbyImageData} />
        </CardMedia>
        <CardContent className='card__content'>
          <h2>
            Jungo Codes
          </h2>
          <p>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </p>
        </CardContent>
      </CardActionArea>
      <CardActions className='project__btns'>
        <Button size="small"  href='https://github.com' target='_blank' >
        <GitHubIcon /> Code
        </Button>
        <Button size="small"  href='https://github.com' target='_blank'>
          <WebIcon/> Site
        </Button>
        <Button size="small" color="primary" href='https://github.com' target='_blank'>
          <BookmarkIcon/> Read
        </Button>
      </CardActions>
    </Card>
   <div className="small__showcase">
        {/* Project Two */}
    <Card elevation={5} className='projects'>
      <CardActionArea>
        <CardMedia className='card__img'>
        <GatsbyImage image={data.ProjectTwo.childImageSharp.gatsbyImageData} />
        </CardMedia>
        <CardContent className='card__content'>
          <h2>
            Jungo Codes
          </h2>
          <p>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </p>
        </CardContent>
      </CardActionArea>
      <CardActions className='project__btns'>
        <Button size="small"  href='https://github.com' target='_blank' >
        <GitHubIcon /> Code
        </Button>
        <Button size="small"  href='https://github.com' target='_blank'>
          <WebIcon/> Site
        </Button>
        <Button size="small" color="primary" href='https://github.com' target='_blank'>
          <BookmarkIcon/> Read
        </Button>
      </CardActions>
    </Card>
    {/* Project Three */}
    <Card elevation={5} className='projects'>
      <CardActionArea>
        <CardMedia className='card__img'>
        <GatsbyImage image={data.ProjectTwo.childImageSharp.gatsbyImageData} />
        </CardMedia>
        <CardContent className='card__content'>
          <h2>
            Jungo Codes
          </h2>
          <p>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </p>
        </CardContent>
      </CardActionArea>
      <CardActions className='project__btns'>
        <Button size="small"  href='https://github.com' target='_blank' >
        <GitHubIcon /> Code
        </Button>
        <Button size="small"  href='https://github.com' target='_blank'>
          <WebIcon/> Site
        </Button>
        <Button size="small" color="primary" href='https://github.com' target='_blank'>
          <BookmarkIcon/> Read
        </Button>
      </CardActions>
    </Card>
   </div>

      </div>
    </div>

  )
}

export default Portfolio
