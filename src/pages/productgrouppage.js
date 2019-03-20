import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductGroupContainer from '../productGroupPageComponents/productGroupContainer';

class ProductGroupPage extends Component {
    render() {
        return (
            <ProductGroupContainer
            />
        );
    }
}

export default connect()(ProductGroupPage);