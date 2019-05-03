import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { imageUrlConstructor } from '../extra/apiHelper/imagesUrlConstructor';
import { translate } from '../translationComponents/translationHelper';


class Category extends Component {
    renderCategories() {
        return this.props.data.map((item, index) => {
            if (item.code === '6') {
                return (
                    <Col onClick={() => { this.props.goToPlants() }} style={itemStyle.containerStyle} key={item.code} sm={6} md={6}>
                        <span style={itemStyle.titleStyle}>{translate(item.names)}</span>
                        <hr style={itemStyle.hrStyle} />
                        <img src={imageUrlConstructor(item.image)} alt={index} style={itemStyle.pictureStyle}></img>
                    </Col>
                )
            }
            return (
                <Col onClick={() => { this.callProductGroup(item.code) }} style={itemStyle.containerStyle} key={item.code} sm={6} md={6}>
                    <span style={itemStyle.titleStyle}>{translate(item.names)}</span>
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
        margin: "0 0 45px 0"
    },
    titleStyle: {
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
    hrStyle: {
        marginTop: '5px',
        width: "40%",
    }
}

export default (Category)