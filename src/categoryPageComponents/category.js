import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { imageUrlConstructor } from '../extra/apiHelper/imagesUrlConstructor';


export default class Category extends Component {
    renderCategories() {
        return this.props.data.map((item, index) => {
            return (
                <Col onClick={() => { this.callProductGroup(item.code) }} style={itemStyle.containerStyle} key={item.code} sm={6} md={6}>
                    <span style={itemStyle.titleStyle}>{item.names.NLD}</span>
                    <hr style={itemStyle.hrStyle} />
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
        padding: "0px",
        margin: "0 0 25px 0"
    },
    titleStyle: {
        // padding: "0 20px",
        fontSize: "15px"
    },
    idStyle: {
        fontSize: "0.8em",
    },
    pictureStyle: {
        borderRadius: "5px",
        maxHeight: "300px",
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