import React, { Component } from 'react';
import ProductItem from './productItem.js';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import { itemEndpoint } from '../config/ptc-config.js';
import Axios from 'axios';
import { setItemPage, navLinkUpdater } from '../actions/actions.js';
import { CATEGORIES } from '../extra/hardcodedFiles/categories.js';
import { PRODUCTGROUPS } from '../extra/hardcodedFiles/productgroups.js';

class ProductItemContainer extends Component {

    componentDidMount() {
        this.loadInitalData();
        this.navLinkUpdater();
    }


    navLinkUpdater = () => {
        CATEGORIES.forEach(categorie => {
            if (parseInt(categorie.code, 10) === this.props.category) {
                PRODUCTGROUPS.forEach(productGroup => {
                    if (productGroup.category === categorie.code) {
                        productGroup.productgroupsitem.forEach(productgroupitem => {
                            if (parseInt(productgroupitem.productgroup, 10) === parseInt(this.props.productGroup, 10)) {
                                this.props.dispatch(navLinkUpdater({ category: categorie.names.NLD, categoryCode: parseInt(categorie.code, 10), productgroup: productgroupitem.name, productGroupCode: parseInt(productgroupitem.productgroup) }));
                            }
                        })
                    }
                })
            }
        })
    }


    loadInitalData = () => {
        const params = { sku: this.props.itemCode }
        Axios.post(itemEndpoint, { params })
            .then(data => {
                this.props.dispatch(setItemPage(data.data[0]))
            });
    }

    render() {
        return (
            <ProductItem
                itemCode={this.props.itemCode}
                currentItemsOnPage={this.props.currentItemsOnPage}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        itemCode: ownProps.match.params.item,
        currentItemsOnPage: state.main.item,
        category: parseInt(ownProps.match.params.category, 10),
        productGroup: parseInt(ownProps.match.params.productgroup, 10),
    }
}

export default withRouter(connect(mapStateToProps)(ProductItemContainer));