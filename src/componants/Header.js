import React from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Categories from './Categories';

function Header(props) {

  return (
    <div className='header'>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography variant='h6' className='header-left'>
            Store Front
          </Typography>
          <div className='header-right'>
            <Categories />
            <IconButton
              edge='start'
              color='inherit'
              onClick={() => props.dispatch({ type: 'RESET_STORE' })}
            >
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Header);