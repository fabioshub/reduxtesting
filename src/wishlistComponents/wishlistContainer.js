import React, { Component } from 'react';
import Wishlist from './wishlist';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import { removeFromWishlist, navLinkUpdater, searched, onWishlist, snackbarTogglerP, overrideWistlist, setWishListAmount } from '../actions/actions';
import Axios from 'axios';
import { ZUILID } from '../constants/otherConstant';
import { Snackbar } from '@material-ui/core';
import { endpoint } from '../config/ptc-config';


class wishlistContainer extends Component {

    componentDidMount = () => {
        this.props.dispatch(onWishlist(true))
        this.props.dispatch(navLinkUpdater(null))
        this.props.dispatch(searched(true))
        Axios.get(endpoint + `getwishlist/${ZUILID}`).then(data => {
            this.props.dispatch(overrideWistlist(data.data.wishlist))
            this.props.dispatch(setWishListAmount(data.data.amount))
        })
    }

    componentWillUnmount = () => {
        this.props.dispatch(onWishlist(false))
        Axios.get(endpoint + `getwishlist/${ZUILID}`).then(data => {
            this.props.dispatch(overrideWistlist(data.data.wishlist))
            this.props.dispatch(setWishListAmount(data.data.amount))
        })
    }

    removeFromWishlist = (wishlistItemSKU) => {
        const params = {
            wishlistItemSKU,
            ZUILID
        }
        Axios.post(endpoint + `removeitemfromwishlist`, params).then(data => {

            this.props.dispatch(overrideWistlist(data.data.wishlist))
            this.props.dispatch(setWishListAmount(data.data.amount))
        })
    }

    handleItemPlus = (wishlistItemSKU) => {
        const params = { wishlistItemSKU, ZUILID }
        Axios.post(endpoint + `additemamounttowishlist`, params).then(data => {
            this.props.dispatch(overrideWistlist(data.data.wishlist))
            this.props.dispatch(setWishListAmount(data.data.amount))
        })
    }

    handleItemMinus = (wishlistItemSKU) => {
        const params = {
            wishlistItemSKU,
            ZUILID
        }
        Axios.post(endpoint + `removeitemamountfromwishlist`, params).then(data => {
            this.props.dispatch(overrideWistlist(data.data.wishlist))
            this.props.dispatch(setWishListAmount(data.data.amount))
        })
    }


    snackbarClose = () => {
        this.props.dispatch(snackbarTogglerP(false))
    }


    render() {
        return (
            <div>
                <Wishlist
                    wishlist={this.props.wishlist}
                    removeFromWishlist={this.removeFromWishlist}
                    handleItemPlus={this.handleItemPlus}
                    handleItemMinus={this.handleItemMinus}
                />
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.props.snackbarOpenedP}
                    autoHideDuration={3000}
                    onClose={this.snackbarClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Thank you for your purchase!</span>}
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