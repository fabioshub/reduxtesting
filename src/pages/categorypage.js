import React, { Component } from 'react';
import { basicContainerStyleCategory } from '../styles/otherStyles.js'
import CategoryContainer from '../categoryPageComponents/categoryContainer.js';


export default class categoryPage extends Component {
    render() {
        return (
            <div style={basicContainerStyleCategory}>
                <CategoryContainer

                />
            </div>
        );
    }
}