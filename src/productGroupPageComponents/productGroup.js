import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';

export default class ProductGroup extends Component {


    renderCategories() {

        return this.props.data.map((item, index) => {
            return (
                <Col onClick={() => { this.callProductGroup(item.productgroup) }} style={itemStyle.containerStyle} key={index} sm={6} md={6}>
                    <span style={itemStyle.titleStyle}>{item.name}</span>
                    <hr style={itemStyle.hrStyle} />
                    <Container style={itemStyle.pictureDiv} className="justify-content-center">
                        <img src={item.image} alt={index} style={itemStyle.pictureStyle}></img>

                    </Container>
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
        // alignText: "center",
        padding: "5px",
        margin: "0 0 25px 0"
    },
    titleStyle: {
        fontWeight: "500"
    },
    idStyle: {
        fontSize: "0.8em",
    },
    pictureStyle: {
        height: '100%',
        margin: '0',
        borderRadius: "5px",
        padding: '0',
    },
    pictureDiv: {
        alignText: "center",
        height: "300px",
        width: '300px',
        overflow: 'hidden',
        padding: '0',
        borderRadius: "5px",
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