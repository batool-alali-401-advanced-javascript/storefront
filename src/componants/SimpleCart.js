import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

function Products(props) {
  

  console.log('CART,' , props.cart)


  return (
      <ul>
          {props.cart.map(item => (
            <li
            key={item.name}
            >
             {item.name}
          </li>
        ))}
       </ul>
  );
}

const mapStateToProps = (state) => ({
//   products: state.products,
//   activeCategory: state.activeCategory,
    cart:state.cart
});

export default connect(mapStateToProps)(Products);