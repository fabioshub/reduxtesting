import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';

export default class ProductGroup extends Component {


    renderCategories() {

        return this.props.data.map((item, index) => {
            return (
                <Col onClick={() => { this.callProductGroup(item.productgroup) }} style={itemStyle.containerStyle} key={index} sm={4} md={6}>
                    <span style={itemStyle.titleStyle}>{item.name}</span>
                    <hr style={itemStyle.hrStyle} />
                    <img src={item.image} alt={index} style={itemStyle.pictureStyle}></img>
                </Col>
            )
        })
    }


    callProductGroup = (productGroupCode) => {
        this.props.dispatchProductGroupCode(productGroupCode)
    }


    render() {
        return this.props.data ? (
            <Container>
                <Row>
                    {this.renderCategories()}
                </Row>
            </Container>
        ) : (<span>Loading productGroups...</span>);
    }
}


const itemStyle = {
    containerStyle: {
        alignText: "center",
        padding: "5px",
        margin: "0 0 25px 0"
    },
    titleStyle: {
        padding: "0 20px",
        fontWeight: "500"
    },
    idStyle: {
        fontSize: "0.8em",
    },
    pictureStyle: {
        borderRadius: "5px",
        maxWidth: "300px",
        margin: "10px 0 10px 0"
    },
    rdStyle: {
        fontSize: "0.8em",
    },
    priceStyle: {
        fontWeight: "500",
        fontSize: "1em",
    },
    metaStyle: {
        alignText: "center",
        marginBottom: "10px"
    },
    hrStyle: {
        width: "40%"
    }
}