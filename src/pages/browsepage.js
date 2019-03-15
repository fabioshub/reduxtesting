import React, { Component } from 'react';
import ItemContainer from '../browsePageComponents/itemscontainer.js';
import { itemDataCreator } from '../actions/actions.js';
import PaginationContainer from '../browsePageComponents/paginationcontainer';
import { connect } from 'react-redux';
import { PAGEAMOUNT } from '../constants/otherConstant.js';

import axios from 'axios';


class BrowsePage extends Component {

  componentDidMount() {
    this.loadInitalData()
  }

  loadInitalData = () => {
    const params = {pageNumber: this.props.pageNumber, productGroup: this.props.productGroup, pageAmount: PAGEAMOUNT}
    axios.post(`http://localhost:58080/data`, { params })
    .then(data => {
      this.props.dispatch(itemDataCreator(data.data.docs))
      });
      
  }

  render() {
    return (
      <div style={basicContainerStyle}>
        <ItemContainer />
        <PaginationContainer
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



const mapStateToprops = (state, ownProps) => ({
  pageNumber: parseInt(ownProps.match.params.page, 10),
  productGroup: ownProps.match.params.productgroup
})

export default connect(mapStateToprops)(BrowsePage);
