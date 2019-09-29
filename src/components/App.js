import React from 'react';
import { connect } from 'react-redux';

import SearchForm from './SearchForm';
import ImageList from './ImageList';

const App = props => {
  return (
    <>
      <SearchForm />
      <ImageList images={props.images}> </ImageList>
    </>

  );
}

const mapStateToProps = (state) => {
  return {
    images: state.images,
  }
};

export default connect(mapStateToProps, {})(App);

