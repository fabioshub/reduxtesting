import React, { Component } from 'react';
import Wishlist from './wishlist';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import { removeFromWishlist, navLinkUpdater, searched, onWishlist, snackbarTogglerP } from '../actions/actions';
import Axios from 'axios';
import { ZUILID } from '../constants/otherConstant';
import { Snackbar } from '@material-ui/core';


class wishlistContainer extends Component {

    componentDidMount = () => {
        this.props.dispatch(onWishlist(true))
        this.props.dispatch(navLinkUpdater(null))
        this.props.dispatch(searched(true))
    }

    componentWillUnmount = () => {
        this.props.dispatch(onWishlist(false))
    }

    removeFromWishlist = (item) => {
        this.props.dispatch(removeFromWishlist(item))
    }


    render() {
        return (
            <div>
                <Wishlist
                    wishlist={this.props.wishlist}
                    removeFromWishlist={this.removeFromWishlist}
                    snackbarOpenedP={this.snackbarOpenedP}
                />
            </div>


        );
    }
}

const mapStateToProps = (state) => {
    return {
        wishlist: state.main.wishlist,
        snackbarOpenedP: state.main.snackbarOpenedP
    }
}


export default withRouter(connect(mapStateToProps)(wishlistContainer));