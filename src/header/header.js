import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import '../styles/headerStyle.css';
import logo from '../extra/images/PTMD-Logo2018.png'

const styles = {
    logoStyle: {
        width: "7em"
    }
}

export default class Header extends Component {
    render() {
        return (
            <Navbar fixed="top" id="navbar">
                <Navbar.Brand href="#home"><img src={logo} style={styles.logoStyle} alt="logo"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Navbar>
        );
    }
}