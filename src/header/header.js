import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/headerStyle.css';
import logo from '../extra/images/ptmd-logo2016-def.png';
import designedWithPassion from '../extra/images/DesignedWithPassion.png';
import 'font-awesome/css/font-awesome.min.css';


const styles = {
    logoStyle: {
        height: '60px',
        marginTop: '10px'
    },
    DWP: {
        height: '60px',
    },
    navbar: {
        background: "rgba(0, 0, 0, 0.8)",

    },
    fav: {
        color: "white",
        fontSize: "50px",
    },
    navLink: {
        color: 'black',
        background: 'white',
        border: 'none',
        padding: '2px 8px',
        fontSize: '16px',
        marginLeft: '7px',
        borderRadius: '2px'
    },
    delete: {
        color: 'darkred'
    }
}

export default class Header extends Component {
    render() {
        return (
            <Container style={styles.navbar} className="text-center ">
                <Row className='align-items-center'>
                    <Col>
                        <img onClick={this.props.goToHome} style={styles.logoStyle} src={logo} alt=""></img>
                    </Col>
                    <Col>
                        <img style={styles.DWP} src={designedWithPassion} alt=""></img>
                    </Col>
                    <Col>
                        <i className="fa fa-heart" style={styles.fav}></i>
                    </Col>
                </Row>
                {/* <Row>
                    <Col className="text-right">
                        {this.props.navLink ? <Button style={styles.navLink} onClick={history.goBack}>{this.props.navLink.category} <i style={styles.delete} class="fa fa-times" aria-hidden="true"></i></Button> : null}
                        {this.props.navLink ? this.props.navLink.productgroup ? <Button style={styles.navLink} onClick={history.goBack}>{this.props.navLink.productgroup} <i style={styles.delete} class="fa fa-times" aria-hidden="true"></i></Button> : null : null}
                    </Col>
                </Row> */}
            </Container>
        );
    }
}