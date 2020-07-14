import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Header from './componants/Header';
import Footer from './componants/Footer';

import CurrentCategory from './componants/activeCatigory';
import Products from './componants/Products';
import Cart from './componants/SimpleCart';
import './componants/style.scss';

export default function App() {
  return (
    <CssBaseline>
      <Header />
      <Cart/>
      <Container maxWidth='lg' className='main-content'>
        <CurrentCategory />
        <Products />
      </Container>
      <Footer />
    </CssBaseline>
  );
}