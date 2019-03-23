import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class Items extends Component {

    renderItems() {

        return this.props.data.map((item, index) => {
            return (
                <Col style={itemStyle.containerStyle} key={index} sm={4} >
                    <img src={item.imageSmall} alt={index} style={itemStyle.pictureStyle}></img>
                    <br />
                    <span style={itemStyle.titleStyle}>{item.description}</span>
                    <div style={itemStyle.metaStyle} className="text-left">
                        <br />
                        <span style={itemStyle.idStyle}>{item.sku}</span>
                        <br />
                        <span style={itemStyle.rdStyle}>{item.collection}</span>
                        <br />
                        <span style={itemStyle.idStyle}>{item.size}</span>

                    </div>
                    <span style={itemStyle.priceStyle}>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(item.price)}</span>
                </Col>
            )
        })
    }

    render() {
        return this.props.data ? (
            <Container>
                <Row>
                    {this.renderItems()}
                </Row>
            </Container>
        ) : (<span>Loading items...</span>);
    }
}

const itemStyle = {
    containerStyle: {
        padding: "5px",
        margin: "0 0 50px 0"
    },
    titleStyle: {
        padding: "0 20px",
        fontWeight: "500"
    },
    idStyle: {
        fontSize: "0.8em",
    },
    pictureStyle: {
        width: "100px",
        maxHeight: "100px",
        margin: "10px 0 10px 0"
    },
    rdStyle: {
        fontSize: "0.8em",
    },
    priceStyle: {
        fontWeight: "700",
        fontSize: "1em",
    },
    metaStyle: {
        alignText: "left",
        marginBottom: "20px"
    },
    hrStyle: {
        width: "40%"
    }
}