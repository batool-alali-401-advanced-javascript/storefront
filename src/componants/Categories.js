import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function Categories(props) {
  let theCategories = [];

  for (let i = 0; i < props.categories.length; i++) {
    let category = props.categories[i];
    theCategories.push(
      <Button
        key={i}
        onClick={(e) => {
          const action = {
            type: 'SET_CURRENT_CATEGORY',
            payload: category.name,
          };
          props.dispatch(action);
        }}
      >
        {category.displayName || category.name}
      </Button>,
    );
  }

  return (
    <ButtonGroup
      id='categories'
      variant='text'
      color='secondary'
      aria-label='text primary button group'
    >
      {theCategories}
    </ButtonGroup>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(Categories);