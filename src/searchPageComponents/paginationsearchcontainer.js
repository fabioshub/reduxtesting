import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import PaginatorSearch from './paginatorsearch.js';
import { itemDataCreator, resetCurrentItemData } from '../actions/actions.js';
import { withRouter } from 'react-router-dom';
import { PAGEAMOUNT } from '../constants/otherConstant.js';

import axios from 'axios';
import { suggestItemsProviderLocalEndPoint, suggestItemsProviderEndPoint } from '../config/ptc-config.js';


class paginationSearchContainer extends Component {
    updateCurrentPage = (newPage) => {
        if (newPage > 0) {
            this.props.dispatch(push(`${newPage}`))
            this.fetchItemData(newPage)
        }
    }

    fetchItemData(page) {
        //needed to delete current items in redux store
        this.props.dispatch(resetCurrentItemData);
        const params = { pageNumber: page, sort: this.props.sort, searchTerm: this.props.searchTerm, pageAmount: PAGEAMOUNT }
        axios.post(suggestItemsProviderLocalEndPoint, { params })
            .then(data => {
                //UNCONTROLLEDAPIINPUTHANDLING
                this.props.dispatch(itemDataCreator(data.data.docs))
            });

    }


    render() {
        return (
            <PaginatorSearch
                updateCurrentPage={this.updateCurrentPage}
                currentpage={this.props.currentpage}
                maxPageNumber={this.props.maxPageNumber}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        currentpage: parseInt(ownProps.match.params.page, 10),
        productGroup: ownProps.match.params.productgroup,
        maxPageNumber: state.main.maxpagenumber,
        url: ownProps.match.params.url,
        searchTerm: ownProps.match.params.searchterm,
        sort: ownProps.match.params.sort
    }
}

export default withRouter(connect(mapStateToProps)(paginationSearchContainer));