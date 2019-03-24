import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { imageUrlConstructor } from '../extra/apiHelper/imagesUrlConstructor';


export default class Category extends Component {
    renderCategories() {
        return this.props.data.map((item, index) => {
            return (
                <Col onClick={() => { this.callProductGroup(item.code) }} style={itemStyle.containerStyle} key={item.code} sm={4}>
                    <span style={itemStyle.titleStyle}>{item.names.NLD}</span>
                    <br />
                    <img src={imageUrlConstructor(item.image)} alt={index} style={itemStyle.pictureStyle}></img>
                </Col>
            )
        })
    }

    callProductGroup = (productGroupCode) => {
        this.props.dispatchProductGroupCode(productGroupCode);
    }

    render() {
        return this.props.data ? (
            <Container>
                <Row>
                    {this.renderCategories()}
                </Row>
            </Container>
        ) : (<span>Loading categories...</span>);
    }
}



const itemStyle = {
    containerStyle: {
        padding: "5px",
        margin: "0 0 20px 0"
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
        width: "220px",
        maxHeight: "220px",
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
        alignText: "left",
        marginBottom: "10px"
    },
    hrStyle: {
        width: "40%"
    }
}