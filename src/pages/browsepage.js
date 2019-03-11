import React, { Component } from 'react';
import ItemContainer from '../browsePageComponents/itemscontainer.js';
import { itemDataCreator } from '../actions/actions.js';
import PaginationContainer from '../browsePageComponents/paginationcontainer';
import { connect } from 'react-redux';

import axios from 'axios';


class BrowsePage extends Component {

  componentDidMount() {
    this.loadInitalData()
  }

  loadInitalData = () => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=dbb619d6178c8ecdfc83dc6e69d51737&language=en-US&page=1`)
    .then(data => {
      this.props.dispatch(itemDataCreator(data.data))
      });
  }

  render() {
    return (
      <div style={basicContainerStyle}>
        <ItemContainer />
        <PaginationContainer
        page = {this.props.match.params.page}
        />
      </div>
    );
  }
}

const basicContainerStyle = {
  "minHeight": "80vh",
  "background": "white",
  "display": "flex",
  "flexDirection": "column",
  "alignItems": "center",
  "textAlign": "center",
  "justifyContent": "center"
}

export default connect()(BrowsePage);
