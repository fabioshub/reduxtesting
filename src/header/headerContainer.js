import React, { Component } from 'react';
import Header from './header.js';
import { connect } from 'react-redux';
import SearchBar from '../searchbar/searchBar.js';
import FabBar from './fabbar.js'
import '../styles/extraStyles.css';
import { push } from 'connected-react-router';




class HeaderContainer extends Component {

    goToHome = () => {
        this.props.dispatch(push('/test'))
    }


    render() {
        return (
            <div className='fixed-top'>
                <Header navLink={this.props.navLink} goToHome={this.goToHome} />
                <SearchBar navLink={this.props.navLink} searchTerm={this.props.searchTerm} />
                <FabBar navLink={this.props.navLink} />
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