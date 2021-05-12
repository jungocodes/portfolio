import React from 'react'
import { Link } from 'gatsby'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import '../styles/main.css'

const portfolio = () => {
return (
    <div className='portfolio__container'>
            <div className="portfolio">
            <h2 className='portfolio__title'>
                <Link id="portfolio">Recent Work</Link>
            </h2>
            </div>

            <div className="portfolio__content">
            <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <h2>
            Lizard
          </h2>
          <p>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
        </div>
    )
}
export default portfolio