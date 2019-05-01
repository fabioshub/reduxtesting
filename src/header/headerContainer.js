import React, { Component } from 'react';
import Header from './header.js';
import { connect } from 'react-redux';
import SearchBar from '../searchbar/searchBar.js';
import FabBar from './fabbar.js'
import '../styles/extraStyles.css';
import { push } from 'connected-react-router';
import { navLinkUpdater, searched, overrideWistlist } from '../actions/actions.js';
import Axios from 'axios';
import { ZUILID } from '../constants/otherConstant.js';
import { createWishtListLocalEndpoint, createWishtListEndpoint } from '../config/ptc-config.js';




class HeaderContainer extends Component {

    componentDidMount() {
        Axios.get(`${createWishtListEndpoint}/${ZUILID}`)
            .then(data => {
                this.props.dispatch(overrideWistlist(JSON.parse(data.data)))
            })
    }

    goToHome = () => {
        this.props.dispatch(push('/test'));
        this.props.dispatch(navLinkUpdater(null));
        this.props.dispatch(searched(false));
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