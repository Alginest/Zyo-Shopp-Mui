import {
  makeStyles,
  Typography,
  Grid,
  Container,
  CardMedia,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core'
import imageOne from '../../img/feature_prod_01.jpg'
import imageTwo from '../../img/feature_prod_02.jpg'
import imageThree from '../../img/feature_prod_03.jpg'
const useStyles = makeStyles((theme) => ({
  productsSec: {
    backgroundColor: '#d5e8f7',
  },
  containere: {
    marginTop: '100px',
    backgroundColor: '#d5e8f7',
  },
  textCenter: {
    textAlign: 'center',
  },

  smallText: {
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 100,
    fontSize: 20,
  },
  img: {
    height: 300,
    width: 400,
  },
  item: {
    textAlign: 'center',
  },
}))
const Categorys = () => {
  const classes = useStyles()
  return (
    <div className={classes.productsSec}>
      <Container className={classes.containere}>
        <Typography variant='h2' className={classes.textCenter}>
          Categories of The Month
        </Typography>
        <Typography variant='body1' className={classes.smallText} gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          libero nisi natus impedit animi modi.
        </Typography>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} md={6} lg={4} className={classes.item}>
            <Card>
              <CardMedia
                component='img'
                className={classes.img}
                image={imageOne}
                alt='green iguana'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Lizard
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} className={classes.item}>
            <Card>
              <CardMedia
                component='img'
                className={classes.img}
                image={imageTwo}
                alt='green iguana'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Lizard
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} className={classes.item}>
            <Card>
              <CardMedia
                component='img'
                className={classes.img}
                image={imageThree}
                alt='green iguana'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Lizard
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Categorys
