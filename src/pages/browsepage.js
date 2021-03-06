import React, { Component } from 'react';
import ItemContainer from '../browsePageComponents/itemscontainer.js';
import { itemDataCreator, maxPageSetter, navLinkUpdater, searched, onFocus } from '../actions/actions.js';
import PaginationContainer from '../browsePageComponents/paginationcontainer';
import { connect } from 'react-redux';
import { PAGEAMOUNT } from '../constants/otherConstant.js';
import { push } from 'connected-react-router';
import { basicContainerStyle } from '../styles/otherStyles.js'

import axios from 'axios';
import { dataEndpoint, localendpoint, dataLocalEndpoint } from '../config/ptc-config.js';
import { COMBINEDPRODUCTGROUPS } from '../extra/hardcodedFiles/combinedProductGroups.js';
import { PRODUCTGROUPS } from '../extra/hardcodedFiles/productgroups.js';
import { CATEGORIES } from '../extra/hardcodedFiles/categories.js';
import { translate } from '../translationComponents/translationHelper.js';


class BrowsePage extends Component {

  componentDidMount() {
    this.loadInitalData()
    this.navLinkUpdater()
    this.props.dispatch(onFocus(false));
  }

  componentWillUnmount() {
    this.props.dispatch(onFocus(false));

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
    CATEGORIES.forEach(categorie => {
      if (parseInt(categorie.code, 10) === this.props.category) {
        PRODUCTGROUPS.forEach(productGroup => {
          if (productGroup.category === categorie.code) {
            productGroup.productgroupsitem.forEach(productgroupitem => {
              if (productgroupitem.productgroup === this.props.productGroup) {
                this.props.dispatch(navLinkUpdater({ category: translate(categorie.names), categoryCode: parseInt(categorie.code, 10), productgroup: parseInt(categorie.code, 10) !== 6 ? translate(productgroupitem.names) : null, productGroupCode: parseInt(productgroupitem.productgroup) }));
              }
            })
          }
        })
      }
    })
  }


  loadInitalData = () => {
    this.props.dispatch(searched(false))
    const params = { pageNumber: this.props.pageNumber, productGroup: this.returnProductGroupOrCombinedProductGroup(COMBINEDPRODUCTGROUPS, this.props.productGroup), pageAmount: PAGEAMOUNT }
    axios.post(dataEndpoint, { params })
      .then(data => {
        //UNCONTROLLEDAPIINPUTHANDLING
        // console.log(data.data.docs[0])

        this.props.dispatch(itemDataCreator(data.data.docs))
        this.props.dispatch(maxPageSetter(Math.ceil(data.data.numFound / PAGEAMOUNT)))
        if (this.props.pageNumber > this.props.maxPageNumber || typeof this.props.pageNumber !== 'number') {
          this.props.dispatch(push('1'))
          window.location.reload();
        }
      });
  }

  render() {
    return (
      <div style={basicContainerStyle}
      >
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
