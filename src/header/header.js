import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import '../styles/headerStyle.css';
import logo from '../extra/images/ptmd-logo2016-def.png';
import designedWithPassion from '../extra/images/DesignedWithPassion.png';
import 'font-awesome/css/font-awesome.min.css';
 

const styles = {
    logoStyle: {
        width: "8em",
        marginRight: "10vw"
    },
    DWP: {
        height: "4em",
        margin: "auto",

    },
    navbar: {
        "background": "black",
        "display": "flex",
        "justifyContent": "space-evenly"
      },
      fav: {
        color: "white",
        fontSize: "3em",
        margin: "auto"
      }
}

export default class Header extends Component {
    render() {
        return (
            <Navbar fixed="top" id="navbar" style={styles.navbar}>
                <img style={styles.logoStyle} src={logo} alt=""></img>
                <img style={styles.DWP} src={designedWithPassion} alt=""></img>
                <i className="fa fa-heart" style={styles.fav}></i>
            </Navbar>
        );
    }
}