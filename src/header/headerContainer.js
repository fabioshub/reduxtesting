import React, { Component } from 'react';
import Header from './header.js';
import { connect } from 'react-redux';
import SearchBar from '../searchbar/searchBar.js';

class HeaderContainer extends Component {
    render() {
        return (
            <div style={{ height: "25vh" }}>
               <Header />
            </div>

        );
    }
}

export default connect()(HeaderContainer);