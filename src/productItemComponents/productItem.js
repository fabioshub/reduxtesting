import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';

export default class ProductItem extends Component {

    generateProductItem = () => {
        return this.props.currentItemsOnPage.map(item => {
            if (item.sku[0] === parseInt(this.props.itemCode)) {
                return (
                    <Col className="text-center" key={item.sku[0]}>
                        <h3 style={itemStyle.itemTitle}>{item.description}</h3>
                        <img style={itemStyle.image} src={item.imageSmall} alt=''></img>
                        <br />
                        <h4 style={itemStyle.priceStyle}>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(item.price)}</h4>
                        <h5>{item.size}</h5>
                        <h5>{item.sku[0]}</h5>
                    </Col>
                )
            }
        });
    }


    render() {
        return this.props.currentItemsOnPage && this.props.itemCode ? (
            <Container styles={itemStyle.container}>
                <Row>
                    {this.generateProductItem()}
                </Row>
            </Container>
        ) : (<span>Loading item...</span>);
    }
}


const itemStyle = {
    container: {
        fontFamily: 'Playfair Display SC',
    },
    itemTitle: {
        marginTop: '50px',
        fontFamily: 'Playfair Display SC',

    },
    image: {
        margin: '80px 0'
    }
}