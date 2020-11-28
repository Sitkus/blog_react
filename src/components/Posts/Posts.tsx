import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useStyles from './Posts.style';
import PostContext from '../../PostContext';

// Material UI
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Posts = () => {
  const classes = useStyles();
  const { postName, setPostName } = useContext(PostContext);

  const [posts, setPosts] = useState([
    {
      title: 'Lizard',
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      image: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
      href: '/lizard'
    },
    {
      title: 'Lizard',
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      image: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
      href: '/killa'
    },
    {
      title: 'Lizard',
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      image: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
      href: '/vanilla'
    }
  ]);

  return (
    <>
      {
        posts.map((post, index) => (
          <Grid item key={index}>
            <Card className={classes.root}>
              {/* <CardActionArea> */}
                <CardMedia
                  className={classes.media}
                  image={post.image}
                  title={post.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {post.description}
                  </Typography>
                </CardContent>
              {/* </CardActionArea> */}
              <CardActions>
                <Link onClick={() => setPostName(post.href)} to={post.href} className={classes.link}>
                  <Button size="medium" color="primary">
                    Read More...
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))
      }
    </>
  );
}

export default Posts;