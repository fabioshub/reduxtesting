import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { setSearchTerm } from '../actions/actions';

class SearchBar extends Component {

    dispatchNavLink = (navLink) => {
        //USE IF HISTORY GOBACK NOT ALLOWED BY ADMIN
        if (this.props.navLink.productgroup) {
            this.props.dispatch(push(`/${navLink}`))
        }
    }

    applySearchTerm = (e) => {
        e.preventDefault()
        this.props.dispatch(setSearchTerm({ searchterm: this.state.search }))
    }

    handleEmailChange = (e) => {
        this.setState({ search: e.target.value });
    }

    renderSearchTerm = () => {
        // return this.props.searchTerm.searchterm ? <InputGroup.Text onClick={history.goBack}>{this.props.searchTerm.searchterm}</InputGroup.Text> : null
    }

    render() {
        return (
            <div style={styles.searchContainer}>
                <InputGroup >
                    <FormControl id="searchbar" style={styles.inputs} onChange={this.handleEmailChange}
                        placeholder="Zoeken..."
                    />
                    <InputGroup.Append>
                        <Button style={styles.button} onClick={this.applySearchTerm} > <i className="fa fa-search" aria-hidden="true"></i></Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>

        );
    }
}

// const stylesBackup = {
//     button: {
//         background: "grey",
//         color: 'white',
//         border: "none",
//         boxShadow: '0 4px 2px -2px rgba(0,0,0,0.4)'
//     },
//     searchContainer: {
//         padding: '10px',
//         background: 'rgba(0, 0, 0, 0.8)',
//     },
//     inputs: {
//         outline: 'none',
//         border: 'none',
//     },
//     navLink: {
//         boxShadow: '0 4px 2px -2px rgba(0,0,0,0.4)',
//         borderRight: '1px solid white'
//     }
// }

const styles = {
    button: {
        background: "white",
        color: 'black',
        border: "1px solid white",
        boxShadow: '0 4px 2px -2px rgba(0,0,0,0.4)'
    },
    searchContainer: {
        padding: '10px',
        background: 'rgba(0, 0, 0, 0.8)',
    },
    inputs: {
        outline: 'none',
        border: 'none',
        background: 'none',
        color: 'white',
        borderBottom: '2px solid white'
    },
    navLink: {
        boxShadow: '0 4px 2px -2px rgba(0,0,0,0.4)',
        borderRight: '1px solid white'
    }
}
export default connect()(SearchBar)