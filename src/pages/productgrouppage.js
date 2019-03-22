import React, { Component } from 'react';
import { connect } from 'react-redux';
import {basicContainerStyle} from '../styles/otherStyles.js'
import ProductGroupContainer from '../productGroupPageComponents/productGroupContainer';

class ProductGroupPage extends Component {
    render() {
        return (
            <div style={basicContainerStyle}>
            <ProductGroupContainer
            
            />
        </div>
        );
    }
}

export default connect()(ProductGroupPage);