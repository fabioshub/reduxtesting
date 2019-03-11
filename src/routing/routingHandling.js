import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import BrowsePage from '../pages/browsepage.js';

export class CustomRouter extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path='/browse' component={BrowsePage}/>
                </div>
            </BrowserRouter>            
        );
    }
}