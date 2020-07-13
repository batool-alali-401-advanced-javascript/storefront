import { createStore } from 'redux';

const initialState = {
    categories: [
      { name: 'electronics', displayName: 'Elecronics' },
      { name: 'food', displayName: 'Food' },
      { name: 'clothing', displayName: 'Clothing' },
    ],
    products: [
      { name: 'TV', category: 'electronics', price: 699.00, inStock: 5,
       image:'https://lh3.googleusercontent.com/proxy/sVQhAsf0CQTG2DqgMg_ao_1a30cQJ_JcYWkPCcbXFm7eo5cwWn7OIN9w3LKbeqZ4GJ3Ibdhg-Vbkr4K-UQS7nbMC92DJ0G4a7rlkU_RV91WfWL29sJdU' },
      { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15,
       image:'https://pluspng.com/img-png/radio-hd-png-radio-picture-png-image-500.png' },
      { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25,
      image: 'https://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8117.png' },
      { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10,
      image:'https://www.pngfind.com/pngs/m/14-143267_socks-png-background-image-sock-transparent-png.png' },
      { name: 'Apples', category: 'food', price: .99, inStock: 500,
      image:'https://e1.pngegg.com/pngimages/23/306/png-clipart-new-s-two-red-apples-thumbnail.png' },
      { name: 'Eggs', category: 'food', price: 1.99, inStock: 12,
      image:'https://w7.pngwing.com/pngs/439/922/png-transparent-chicken-egg-yolk-egg-eggshell-broken-egg-easter-eggs.png' },
      { name: 'Bread', category: 'food', price: 2.39, inStock: 90,
     image:'https://toppng.com/uploads/preview/bread-png-image-loaf-of-bread-11563103187ssm8yazedr.png' },
    ],
    activeCategory: '',
    cart:[],
  };

const reducer = (state = initialState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case 'SET_CURRENT_CATEGORY':
      newState.activeCategory = action.payload;
      break;
    case 'ADD_TO_CART':
      newState.cart = [...newState.cart, action.payload];
      break;
    default:
      break;
  }

  return newState;
};

export default createStore(reducer);
export { reducer };