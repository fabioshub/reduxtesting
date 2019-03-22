import React, { Component } from 'react';
import ItemContainer from '../browsePageComponents/itemscontainer.js';
import { itemDataCreator, maxPageSetter } from '../actions/actions.js';
import PaginationContainer from '../browsePageComponents/paginationcontainer';
import { connect } from 'react-redux';
import { PAGEAMOUNT } from '../constants/otherConstant.js';
import {push} from 'connected-react-router';
import {basicContainerStyle} from '../styles/otherStyles.js'

import axios from 'axios';
import { dataEndpoint } from '../config/ptc-config.js';
import { COMBINEDPRODUCTGROUPS } from '../extra/hardcodedFiles/combinedProductGroups.js';


class BrowsePage extends Component {

  componentDidMount() {
    this.loadInitalData()
  }

  loadInitalData = () => {
    if (COMBINEDPRODUCTGROUPS.hasOwnProperty(this.props.productGroup)) {
      const params = {pageNumber: this.props.pageNumber, productGroup: COMBINEDPRODUCTGROUPS[this.props.productGroup], pageAmount: PAGEAMOUNT}
      axios.post(dataEndpoint, { params })
      .then(data => {
        this.props.dispatch(itemDataCreator(data.data.docs))
        this.props.dispatch(maxPageSetter(Math.ceil(data.data.numFound/PAGEAMOUNT)))
        // CHECK IF URL IS ABOVE MAXPAGE
        if (this.props.pageNumber > this.props.maxPageNumber || typeof this.props.pageNumber !== 'number' ) {
          this.props.dispatch(push('1'))
          window.location.reload();
        }
        });
    }
    else {
      const params = {pageNumber: this.props.pageNumber, productGroup: this.props.productGroup, pageAmount: PAGEAMOUNT}
      axios.post(dataEndpoint, { params })
      .then(data => {
        this.props.dispatch(itemDataCreator(data.data.docs))
        this.props.dispatch(maxPageSetter(Math.ceil(data.data.numFound/PAGEAMOUNT)))
        if (this.props.pageNumber > this.props.maxPageNumber || typeof this.props.pageNumber !== 'number' ) {
          this.props.dispatch(push('1'))
          window.location.reload();
        }
        });
    }
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



// set push and return page number

const mapStateToprops = (state, ownProps) => ({
  pageNumber: parseInt(ownProps.match.params.page, 10),
  productGroup: ownProps.match.params.productgroup,
  maxPageNumber: state.main.maxpagenumber
})

export default connect(mapStateToprops)(BrowsePage);
