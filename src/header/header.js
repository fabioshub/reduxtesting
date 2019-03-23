import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/headerStyle.css';
import logo from '../extra/images/ptmd-logo2016-def.png';
import designedWithPassion from '../extra/images/DesignedWithPassion.png';
import 'font-awesome/css/font-awesome.min.css';


const styles = {
    logoStyle: {
        height: '140px'
    },
    DWP: {
        height: '80px'
    },
    navbar: {
        background: "black",

    },
    fav: {
        color: "white",
        fontSize: "50px",
    },
    navLink: {
        color: 'white'
    }
}

export default class Header extends Component {
    render() {
        return (
            <Container style={styles.navbar} className="text-center ">
                <Row className='align-items-center'>
                    <Col>
                        <img style={styles.logoStyle} src={logo} alt=""></img>
                    </Col>
                    <Col>
                        <img style={styles.DWP} src={designedWithPassion} alt=""></img>
                    </Col>
                    <Col>
                        <i className="fa fa-heart" style={styles.fav}></i>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-right'>
                        <span style={styles.navLink}>{this.props.navLink}</span>
                    </Col>
                </Row>
            </Container>
        );
    }
}