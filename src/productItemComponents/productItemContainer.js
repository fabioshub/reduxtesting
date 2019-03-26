import React, { Component } from 'react';
import ProductItem from './productItem.js';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

class ProductItemContainer extends Component {

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
        currentItemsOnPage: state.main.itemdata
    }
}

export default withRouter(connect(mapStateToProps)(ProductItemContainer));