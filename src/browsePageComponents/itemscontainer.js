import React, { Component } from 'react';
import { connect } from 'react-redux';
import Items from './items.js';
import { resetCurrentItemData } from '../actions/actions.js';
import { push } from 'connected-react-router';
import { withRouter } from 'react-router-dom';



class itemsContainer extends Component {
    componentDidMount() {
        this.props.dispatch(resetCurrentItemData);
        // this.props.dispatch(productGroupDataCreator(pgItem.productgroupsitem));

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
            <Items
                dispatchProductItemPage={this.dispatchProductItemPage}
                data={this.props.items}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.main.itemdata,
        url: ownProps.match.url
    }
}

export default withRouter(connect(mapStateToProps)(itemsContainer));