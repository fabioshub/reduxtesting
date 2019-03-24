import React, { Component } from 'react';
import Header from './header.js';
import { connect } from 'react-redux';
import SearchBar from '../searchbar/searchBar.js';
import FabBar from './fabbar.js'
import '../styles/extraStyles.css';




class HeaderContainer extends Component {
    render() {
        return (
            <div className='fixed-top'>
                <Header navLink={this.props.navLink} />
                <SearchBar navLink={this.props.navLink} searchTerm={this.props.searchTerm} />
                {this.props.navLink ? <FabBar /> : null}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        navLink: state.main.navlink,
        searchTerm: state.main.searchterm
    }
}

export default connect(mapStateToProps)(HeaderContainer);