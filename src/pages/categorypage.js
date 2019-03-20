import React ,{ Component } from 'react';
import {basicContainerStyle} from '../styles/otherStyles.js'
import CategoryContainer from '../categoryPageComponents/categoryContainer.js';


export default class categoryPage extends Component {
    render() {
        return (
            <div style={basicContainerStyle}>
                <CategoryContainer
                
                />
            </div>
        );
    }
}