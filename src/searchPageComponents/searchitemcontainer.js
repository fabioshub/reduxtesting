import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchItems from './searchitems.js';
import { navLinkUpdater, itemDataCreator, maxPageSetter, searched } from '../actions/actions.js';
import { push } from 'connected-react-router';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import { suggestItemsColorLocalEndPoint } from '../config/ptc-config.js';
import { PAGEAMOUNT } from '../constants/otherConstant.js';



class SearchItemContainer extends Component {
    componentDidMount() {
        this.loadInitalData();
        // this.navLinkUpdater()
    }


    loadInitalData = () => {
        const params = { pageNumber: this.props.pageNumber, searchTerm: this.props.searchTerm, pageAmount: PAGEAMOUNT }
        Axios.post(suggestItemsColorLocalEndPoint, { params })
            .then(data => {
                this.props.dispatch(navLinkUpdater(null))
                this.props.dispatch(searched(true))
                this.props.dispatch(itemDataCreator(data.data.docs))
                this.props.dispatch(maxPageSetter(Math.ceil(data.data.numFound / PAGEAMOUNT)))
                // if (this.props.pageNumber > this.props.maxPageNumber || typeof this.props.pageNumber !== 'number') {
                //     this.props.dispatch(push('1'))
                //     window.location.reload();
                // }
            })
            // .then(data => console.log('hey'))
            .catch(error => console.log('hey'))
    }

    dispatchProductItemPage = (sku) => {
        this.props.items.forEach(productItem => {
            if (productItem.sku === sku) {
                this.props.dispatch(push(this.props.url + `/${sku[0]}`))
            }
        });
    }

    render() {
        return (
            <SearchItems
                // dispatchProductItemPage={this.dispatchProductItemPage}
                data={this.props.items}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.main.itemdata,
        url: ownProps.match.url,
        searchTerm: ownProps.match.params.searchterm,
        pageNumber: ownProps.match.params.page,
        navLink: state.main.navlink
    }
}

export default withRouter(connect(mapStateToProps)(SearchItemContainer));