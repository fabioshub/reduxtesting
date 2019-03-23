import React, { Component } from 'react';
import ItemContainer from '../browsePageComponents/itemscontainer.js';
import { itemDataCreator, maxPageSetter, navLinkUpdater } from '../actions/actions.js';
import PaginationContainer from '../browsePageComponents/paginationcontainer';
import { connect } from 'react-redux';
import { PAGEAMOUNT } from '../constants/otherConstant.js';
import { push } from 'connected-react-router';
import { basicContainerStyle } from '../styles/otherStyles.js'

import axios from 'axios';
import { dataEndpoint } from '../config/ptc-config.js';
import { COMBINEDPRODUCTGROUPS } from '../extra/hardcodedFiles/combinedProductGroups.js';
import { PRODUCTGROUPS } from '../extra/hardcodedFiles/productgroups.js';


class BrowsePage extends Component {

  componentDidMount() {
    this.loadInitalData()
    this.navLinkUpdater()
  }

  //TEST THIS !!
  returnProductGroupOrCombinedProductGroup = (COMBINEDPRODUCTGROUPSFILE, productGroup) => {
    if (COMBINEDPRODUCTGROUPSFILE.hasOwnProperty(productGroup)) {
      return COMBINEDPRODUCTGROUPSFILE[productGroup];
    }
    else {
      return productGroup;
    }
  }

  navLinkUpdater = () => {
    let navLink = '';
    PRODUCTGROUPS.forEach(productgroup => {
      if (parseInt(productgroup.category, 10) === this.props.category) {
        navLink += productgroup.names.NLD
        productgroup.productgroupsitem.forEach(productgroupitem => {
          if (productgroupitem.productgroup === this.props.productGroup) {
            navLink += '...'
            navLink += productgroupitem.name
          }
        })
      }
    })
    this.props.dispatch(navLinkUpdater(navLink));
  }


  loadInitalData = () => {
    if (COMBINEDPRODUCTGROUPS.hasOwnProperty(this.props.productGroup)) {
      const params = { pageNumber: this.props.pageNumber, productGroup: COMBINEDPRODUCTGROUPS[this.props.productGroup], pageAmount: PAGEAMOUNT }
      axios.post(dataEndpoint, { params })
        .then(data => {
          this.props.dispatch(itemDataCreator(data.data.docs))
          this.props.dispatch(maxPageSetter(Math.ceil(data.data.numFound / PAGEAMOUNT)))
          // CHECK IF URL IS ABOVE MAXPAGE
          if (this.props.pageNumber > this.props.maxPageNumber || typeof this.props.pageNumber !== 'number') {
            this.props.dispatch(push('1'))
            window.location.reload();
          }
        });
    }
    else {
      const params = { pageNumber: this.props.pageNumber, productGroup: this.props.productGroup, pageAmount: PAGEAMOUNT }
      axios.post(dataEndpoint, { params })
        .then(data => {
          this.props.dispatch(itemDataCreator(data.data.docs))
          this.props.dispatch(maxPageSetter(Math.ceil(data.data.numFound / PAGEAMOUNT)))
          if (this.props.pageNumber > this.props.maxPageNumber || typeof this.props.pageNumber !== 'number') {
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

const mapStateToprops = (state, ownProps) => {
  return {
    pageNumber: parseInt(ownProps.match.params.page, 10),
    productGroup: ownProps.match.params.productgroup,
    maxPageNumber: state.main.maxpagenumber,
    category: parseInt(ownProps.match.params.category, 10),
  }
}

export default connect(mapStateToprops)(BrowsePage);
