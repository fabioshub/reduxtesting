import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import Paginator from './paginator.js';
import { itemDataCreator, resetCurrentItemData } from '../actions/actions.js';
import { withRouter } from 'react-router-dom';
import { PAGEAMOUNT } from '../constants/otherConstant.js';
import { COMBINEDPRODUCTGROUPS } from '../extra/hardcodedFiles/combinedProductGroups.js';

import axios from 'axios';
import { dataEndpoint, dataLocalEndpoint } from '../config/ptc-config.js';


class paginationContainer extends Component {

    componentDidUpdate() {
        this.fetchItemData();
    }

    updateCurrentPage = (newPage) => {
        if (newPage > 0) {
            this.props.dispatch(push(`${newPage}`))
            this.fetchItemData(newPage)
        }
    }

    returnProductGroupOrCombinedProductGroup = (COMBINEDPRODUCTGROUPSFILE, productGroup) => {
        if (COMBINEDPRODUCTGROUPSFILE.hasOwnProperty(productGroup)) {
            return COMBINEDPRODUCTGROUPSFILE[productGroup];
        }
        else {
            return productGroup;
        }
    }

    fetchItemData() {
        //needed to delete current items in redux store
        this.props.dispatch(resetCurrentItemData);
        if (COMBINEDPRODUCTGROUPS.hasOwnProperty(this.props.productGroup)) {
            const params = { pageNumber: this.props.currentpage, productGroup: this.returnProductGroupOrCombinedProductGroup(COMBINEDPRODUCTGROUPS, this.props.productGroup), pageAmount: PAGEAMOUNT }
            console.log(params)
            axios.post(dataEndpoint, { params })
                .then(data => {
                    //UNCONTROLLEDAPIINPUTHANDLING
                    this.props.dispatch(itemDataCreator(data.data.docs))
                });
        }
        else {
            const params = { pageNumber: this.props.currentpage, productGroup: this.returnProductGroupOrCombinedProductGroup(COMBINEDPRODUCTGROUPS, this.props.productGroup), pageAmount: PAGEAMOUNT }
            axios.post(dataEndpoint, { params })
                .then(data => {
                    //UNCONTROLLEDAPIINPUTHANDLING
                    this.props.dispatch(itemDataCreator(data.data.docs))
                });
        }

    }


    render() {
        return (
            <Paginator
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
        url: ownProps.match.params.url
    }
}

export default withRouter(connect(mapStateToProps)(paginationContainer));