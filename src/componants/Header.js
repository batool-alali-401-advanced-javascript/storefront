import React from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Categories from './Categories';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
// import PopupState from '@material-ui/core/PopupState';

function Header(props) {
  const StyledBadge = withStyles(() => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid #f50057`,
      padding: '0 4px',
    },
  }))(Badge);
  return (
    <div className='header'>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography variant='h6' className='header-left'>
            Store Front
          </Typography>
          <div className='header-right'>
            <Categories />


            {/* <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
                  {props.cart.length}
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    {props.cart.map(item=>{
                      <MenuItem onClick={popupState.close} key={item.name}>{item.name}</MenuItem>
                    })}
                    
                  </Menu>
                </React.Fragment>
              )}
            </PopupState> */}
            
            <IconButton
              edge='start'
              color='inherit'
              // onClick={() => props.dispatch({ type: 'RESET_STORE' })}
            >
              <StyledBadge badgeContent={props.cart.length} color='secondary'>
                <ShoppingCartIcon />
              </StyledBadge>
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