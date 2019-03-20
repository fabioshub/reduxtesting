import React, { Component } from 'react';
import ProductGroup from './productGroup';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import { productGroupDataCreator } from '../actions/actions';
import axios from 'axios';

class ProductGroupContainer extends Component {

    componentDidMount() {
        this.loadInitalData()
    }
    
    loadInitalData = () => {
        const params = {categoryToProductGroupCode: this.props.category}
        axios.post(`http://localhost:58080/allproductgroups`, {params})
        .then(data => {
                this.props.dispatch(productGroupDataCreator(data.data));
            });
    };
    

    render() {
        return (
            <ProductGroup 

            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        productGroupData: state.main.productgroupdata,
        category: ownProps.match.params.category,
    }
}

export default withRouter(connect(mapStateToProps)(ProductGroupContainer));