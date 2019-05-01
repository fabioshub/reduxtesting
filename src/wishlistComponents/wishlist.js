import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { itemStyleWishlist } from '../styles/otherStyles';
import { withTranslation } from 'react-i18next';
import { Fab } from '@material-ui/core';

class Wishlist extends Component {

    renderItems() {


        return this.props.wishlist.map((wishlistItem, index) => {
            return (
                <Col onClick={() => { }} style={itemStyleWishlist.containerStyle} key={index} sm={12} md={12}>
                    <Container>
                        <Row className="align-items-center">
                            <Col sm="4">
                                <div style={itemStyleWishlist.metaStyle} className="text-left">
                                    <span style={itemStyleWishlist.idStyle}>{wishlistItem.item.sku}</span>
                                    <br />
                                    <span style={itemStyleWishlist.rdStyle}>{wishlistItem.item.collection}</span>
                                    <br />
                                    <span style={itemStyleWishlist.idStyle}>{wishlistItem.item.size}</span>
                                    <br />
                                    <span style={itemStyleWishlist.priceStyle}>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(wishlistItem.item.price)}</span>
                                    <br />
                                    <span style={itemStyleWishlist.idStyle}>{this.props.t('amount')}: {wishlistItem.amount}</span>
                                </div>
                            </Col>
                            <Col sm="6" className="text-left" >
                                <img src={wishlistItem.item.imageSmall} alt={index} style={itemStyleWishlist.pictureStyle}></img>
                            </Col>
                            <Col sm="2">
                                <Fab style={itemStyleWishlist.fabHome} onClick={() => { this.props.removeFromWishlist(wishlistItem) }} >
                                    <i style={itemStyleWishlist.removeStyle} className="fa fa-times" aria-hidden="true"></i>
                                </Fab>

                            </Col>
                        </Row>
                    </Container>
                </Col>
            )
        })
    }

    render() {
        return this.props.wishlist.length > 0 ? (
            <Container>
                <Row>
                    {this.renderItems()}
                </Row>
            </Container>
        ) : (<span><i className="fa fa-frown-o" style={{ color: 'grey', fontSize: '70px' }} aria-hidden="true"></i></span>);
    }
}

export default withTranslation()(Wishlist);