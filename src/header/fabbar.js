import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import history from '../constants/history';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { withTranslation } from 'react-i18next';
import { onFocus, navLinkUpdater, searched, resetState, overrideWistlist, snackbarTogglerP, setWishListAmount } from '../actions/actions';
import Axios from 'axios';
import { createWishListItem } from '../models/wishlistItemModel';
import { ZUILID } from '../constants/otherConstant';
import { convertWishToOrder } from '../models/orderModel';
import { saveOrderLocalEndpoint, saveOrderEndpoint, endpoint } from '../config/ptc-config';

const styles = {
    container: {
    },
    plusIconStyle: {
        paddingRight: '2px',
        fontSize: '30px',
    },
    fabBack: {
        background: 'white',
        color: 'grey',
        margin: '10px 10px 0 0'
    },
    fabHome: {
        background: 'white',
        color: 'grey',
        margin: '10px 10px 0 0'
    },
    fabWishlist: {
        background: 'white',
        color: 'grey',
        margin: '10px 10px 0 0'
    },
    fabNavlink: {
        background: 'white',
        color: 'grey',
        margin: '10px 10px 0 0',
        fontSize: '10px'
    },
    delete: {
        color: 'darkred',
        fontSize: '15px',
        marginRight: '5px'
    },
    holder: {
        fontSize: '30px',
        color: 'darkred',
        // marginTop: '7px'
    },
    fav: {
        fontSize: '30px',
        color: 'darkred',
        marginTop: '15px'
    },
    closeSuggestBox: {
        background: 'white',
        color: 'darkred',
        margin: '10px 10px 0 0',
        fontSize: '20px'
    },
    fabCheckout: {
        background: 'darkred',
        color: 'white',
        margin: '10px 10px 0 0',
        fontSize: '10px'
    },
    counter: {
        // margin: '0 0 0 5px',
        color: 'white',
        // FontWeight: '1000',
        fontSize: '10px'
    }
}



class FabBar extends Component {

    goBack = () => {
        this.props.dispatch(onFocus(false));
        history.goBack();
    }

    handleCheckout = () => {
        Axios.post(endpoint + `saveorder`, { ZUILID }).then(data => {
            this.props.dispatch(overrideWistlist(data.data))
            this.props.dispatch(snackbarTogglerP(true))
            this.props.dispatch(setWishListAmount(0))
        })
    }

    componentDidMount = () => {
        Axios.get(endpoint + `itemsonwishlist/${ZUILID}`).then(data => {
            this.props.dispatch(setWishListAmount(data.data.amountOnWishlist))
        })
    }


    render() {
        return (
            <Container style={styles.container}>
                {this.props.searchTermData.length === 0 || true ?

                    <Row>
                        <Col className='text-left' md={4} sm={4} lg={4}>
                            {this.props.navlink || this.props.searched ?
                                <Fab style={styles.fabBack} onClick={() => { this.goBack() }}>
                                    <i className="fa fa-angle-left" aria-hidden="true" style={styles.plusIconStyle}></i>
                                </Fab>
                                : null}
                            {this.props.navlink || this.props.searched ?
                                <Fab style={styles.fabHome} onClick={() => { this.props.dispatch(push('/test')); this.props.dispatch(navLinkUpdater(null)); this.props.dispatch(searched(false)) }}>
                                    <i className="fa fa-home" aria-hidden="true" style={styles.plusIconStyle}></i>
                                </Fab>
                                : null}
                        </Col>
                        <Col className='text-right' md={8} sm={8} lg={8}>
                            {this.props.navlink ?
                                <Fab variant="extended" style={styles.fabNavlink} onClick={() => { this.props.dispatch(push(`/test`)) }}>
                                    <i style={styles.delete} className="fa fa-times" aria-hidden="true"></i>
                                    {this.props.navLink.category}
                                </Fab>
                                : null}
                            {this.props.navlink ? this.props.navlink.productgroup ?
                                <Fab variant="extended" style={styles.fabNavlink} onClick={() => { this.props.dispatch(push(`/test/${this.props.navlink.categoryCode}`)) }} >
                                    <i style={styles.delete} className="fa fa-times" aria-hidden="true"></i>
                                    {this.props.navLink.productgroup}
                                </Fab>
                                : null : null}
                            {this.props.onWishlist && this.props.wishlist.length > 0 ?
                                <Fab variant="extended" style={styles.fabCheckout} onClick={() => { this.handleCheckout() }} >
                                    Checkout
                                </Fab>
                                : null}
                            <Fab style={styles.fabWishlist} onClick={() => { this.props.dispatch(push(`/test/wishlist`)) }} >
                                <span className="fa-stack" style={styles.holder}>
                                    <span className="fa fa-heart fa-stack-2x" style={styles.fav}></span>
                                    <span className="fa-stack-1x" style={styles.counter}>{this.props.wishlistCounter !== 0 ? this.props.wishlistCounter : null}</span>

                                </span>
                                {/* <span style={styles.counter}>{this.props.wishlistCounter}</span> */}
                            </Fab>
                        </Col>
                    </Row>
                    : null}
            </Container>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        navlink: state.main.navlink,
        searchTermData: state.main.searchtermdata,
        onFocus: state.main.onFocus,
        searched: state.main.searched,
        onWishlist: state.main.onWishlist,
        wishlist: state.main.wishlist,
        wishlistCounter: state.main.wishlistCounter
    }
}

export default withTranslation()(connect(mapStateToProps)(FabBar));