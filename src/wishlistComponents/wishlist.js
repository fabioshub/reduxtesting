import React, { Component } from 'react';
import { itemStyleWishlist } from '../styles/otherStyles';
import { withTranslation } from 'react-i18next';
import { Fab, Snackbar } from '@material-ui/core';
import { InputGroup, FormControl, Button, Col, Container, Row } from 'react-bootstrap';


class Wishlist extends Component {

    handleItemPlus = (wishlistItem) => {
        this.props.handleItemPlus(wishlistItem)
    }

    handleItemMinus = (wishlistItem) => {
        this.props.handleItemMinus(wishlistItem)
    }


    renderItems() {

        return this.props.wishlist.map((wishlistItem, index) => {
            const { amount } = wishlistItem;
            const wishlistItemParsed = JSON.parse(wishlistItem.wishlistItem)
            return (
                <Col onClick={() => { }} style={itemStyleWishlist.containerStyle} key={index} sm={12} md={12}>
                    <Container>
                        <Row className="align-items-center">
                            <Col sm="4">
                                <div style={itemStyleWishlist.metaStyle} className="text-left">
                                    <span style={itemStyleWishlist.idStyle}>{wishlistItemParsed.sku[0]}</span>
                                    <br />
                                    <span style={itemStyleWishlist.rdStyle}>{wishlistItemParsed.collection}</span>
                                    <br />
                                    <span style={itemStyleWishlist.idStyle}>{wishlistItemParsed.size}</span>
                                    <br />
                                    <span style={itemStyleWishlist.priceStyle}>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseFloat(wishlistItemParsed.price) * amount)}</span>
                                    <br />
                                    <br />
                                    <span style={itemStyleWishlist.idStyle}>
                                        <InputGroup size="sm" className="">
                                            <InputGroup.Prepend>
                                                <Button variant="outline-secondary" onClick={() => { this.handleItemMinus(wishlistItemParsed.sku[0]) }}><i className="fa fa-minus" aria-hidden="true"></i></Button>
                                            </InputGroup.Prepend>
                                            <InputGroup.Prepend>
                                                <Button variant="outline-secondary">{amount}</Button>
                                            </InputGroup.Prepend>
                                            <InputGroup.Prepend>
                                                <Button variant="outline-secondary" onClick={() => { this.handleItemPlus(wishlistItemParsed.sku[0]) }}><i className="fa fa-plus" aria-hidden="true"></i></Button>
                                            </InputGroup.Prepend>
                                        </InputGroup>
                                    </span>
                                </div>
                            </Col>
                            <Col sm="6" className="text-left" >
                                <img src={wishlistItemParsed.imageSmall} alt={index} style={itemStyleWishlist.pictureStyle}></img>
                            </Col>
                            <Col sm="2">
                                <Fab style={itemStyleWishlist.fabHome} onClick={() => { this.props.removeFromWishlist(wishlistItemParsed.sku[0]) }} >
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