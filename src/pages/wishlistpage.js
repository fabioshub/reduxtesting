import React, { Component } from 'react';
import { basicContainerStyle } from '../styles/otherStyles.js'
import WishlistContainer from '../wishlistComponents/wishlistContainer.js';


export default class wishlistPage extends Component {
    render() {
        return (
            <div style={basicContainerStyle}>
                <WishlistContainer

                />
            </div>
        );
    }
}