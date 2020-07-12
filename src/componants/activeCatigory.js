import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import './style.scss'

function ActiveCategory(props) {
  return (
    <div className='current-category'>
      <Typography variant='h2' align='center' gutterBottom >
        {props.activeCategory.toUpperCase()}
      </Typography>
    </div>
  );
}

const mapStateToProps = (state) => ({
    activeCategory: state.activeCategory,
});

export default connect(mapStateToProps)(ActiveCategory);