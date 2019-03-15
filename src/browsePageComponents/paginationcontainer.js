import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paginator from './paginator.js';
import { itemDataCreator, resetCurrentItemData } from '../actions/actions.js';
import { withRouter } from 'react-router-dom';
import { PAGEAMOUNT } from '../constants/otherConstant.js';

import axios from 'axios';


class paginationContainer extends Component {

    updateCurrentPage = (newPage) => {
        if (newPage > 0 ) {
            this.props.history.push(`/browse/${this.props.productGroup}/${newPage}`)
            this.fetchItemData(newPage)
        }
    }

    fetchItemData(page) {
        //needed to delete current items in redux store
        this.props.dispatch(resetCurrentItemData);
        const params = {pageNumber: page, productGroup: this.props.productGroup, pageAmount: PAGEAMOUNT}
        axios.post(`http://localhost:58080/data`, { params })
        .then(data => {
          this.props.dispatch(itemDataCreator(data.data.docs))
          });
    }
    

    render() {
        return (
            <Paginator 
            updateCurrentPage={this.updateCurrentPage}
            currentpage={this.props.currentpage}

            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    
    return {
     currentpage: parseInt(ownProps.match.params.page, 10),
     productGroup: ownProps.match.params.productgroup
    }
}

export default withRouter(connect(mapStateToProps)(paginationContainer));