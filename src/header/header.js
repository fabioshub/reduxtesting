import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/headerStyle.css';
import logo from '../extra/images/ptmd-logo2016-def.png';
import designedWithPassion from '../extra/images/DesignedWithPassion.png';
import 'font-awesome/css/font-awesome.min.css';


const styles = {
    logoStyle: {
        height: '60px',
        marginTop: '20px'

    },
    DWP: {
        height: '60px',
        marginTop: '20px'

    },
    navbar: {
        background: "rgba(0, 0, 0, 0.9)",

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
            <Container style={styles.navbar}>
                <Row>
                    <Col sm={4} md={4} />
                    <Col className='text-center' sm={4} md={4}>
                        <img style={styles.DWP} src={designedWithPassion} alt=""></img>
                    </Col>
                    <Col className='text-right' sm={4} md={4}>
                        <img onClick={this.props.goToHome} style={styles.logoStyle} src={logo} alt=""></img>
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