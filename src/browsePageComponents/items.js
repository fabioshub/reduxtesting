import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class Items extends Component {

    renderItems() {
        return this.props.data.results.map((item, index) => {
            return (
                <Col style={itemStyle.containerStyle} key={index} sm={4}>
                    <img src={'https://image.tmdb.org/t/p/original'+item.poster_path} style={itemStyle.pictureStyle}></img>
                    <hr style={itemStyle.hrStyle}/>
                    <span style={itemStyle.titleStyle}>{item.title}</span>
                    <div style={itemStyle.metaStyle} className="text-left">
                        <br/>
                        <span style={itemStyle.idStyle}>{item.id}</span>
                        <br/>
                        <span style={itemStyle.rdStyle}>{item.release_date}</span>
                        <br/>
                        <span style={itemStyle.rdStyle}>{item.vote_count}</span>
                    </div>
                    <span style={itemStyle.priceStyle}>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(item.vote_average)}</span>
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
        fontWeight: "200",
        padding: "0 20px"
    },
    idStyle: {
        fontSize: "0.8em",
    },
    pictureStyle: {
        width: "80px",
        margin: "10px 0 10px 0"
    },
    rdStyle: {
        fontSize: "0.8em",
    },
    priceStyle: {
        fontWeight: "500",
        fontSize: "0.9em",
    },
    metaStyle: {
        alignText: "left"
    },
    hrStyle: {
        width: "40%"
    }
}