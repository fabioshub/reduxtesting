import React, { Component } from 'react';
import Header from './header.js';
import { Navbar } from 'react-bootstrap';
import logo from '../extra/images/PTMD-Logo2018.png'
import { connect } from 'react-redux';

const styles = {
    logoStyle: {
        width: "7em"
    }
}

class HeaderContainer extends Component {
    render() {
        return (
            <div style={{ height: "18vh" }}>
                <Navbar fixed="top" id="navbar">
                    <Navbar.Brand href="#home"><img src={logo} style={styles.logoStyle} alt="logo"></img></Navbar.Brand>
                </Navbar>
            </div>

        );
    }
}

export default connect()(HeaderContainer);