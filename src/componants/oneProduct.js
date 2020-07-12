import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = 
{

media: {
  height: 0,
  paddingTop: '56.25%', 
  marginTop:'30'
}
  };


function SingleProduct(props) {
  return (
    <Grid item className='single-product'>
      <Card>
        <CardMedia
          className='card-image'
          image={props.img}
          title={props.name}
          style={styles.media}
        />
        <CardContent>
          <Typography align='center' variant='h5' component='h2'>
            {props.name}
          </Typography>
          <Typography align='center' color='textSecondary'>
            ${props.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small' >
            Add To Cart
          </Button>
          <Button size='small' >
            View Details
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default SingleProduct;