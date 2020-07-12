import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import SingleProduct from './oneProduct';

function Products(props) {
 
  
  const filteredProducts = props.products.filter(
    (product) => product.category === props.activeCategory,
  );

  
  let theProducts = [];

  for (let i = 0; i < filteredProducts.length; i++) {
    let product = filteredProducts[i];

    theProducts.push(
      <SingleProduct
        key={i}
        name={product.name}
        img={product.image}
        price={product.price}
      />,
    );
  }

  return (
    <Grid id='products' container className='products' spacing={5}>
      <Grid item xs={12}>
        <Grid container justify='center' spacing={5}>
          {theProducts}
        </Grid>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
  activeCategory: state.activeCategory,
});

export default connect(mapStateToProps)(Products);