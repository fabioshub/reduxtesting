import React, { Component } from 'react';
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import history from '../constants/history';
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
                    <InputGroup.Prepend>
                        {this.renderSearchTerm()}
                    </InputGroup.Prepend>
                    <FormControl style={styles.inputs} onChange={this.handleEmailChange}
                        placeholder="Zoeken..."
                    />
                    <InputGroup.Append>
                        {this.props.navLink ? <InputGroup.Text style={styles.navLink} onClick={history.goBack}>{this.props.navLink.category}</InputGroup.Text> : null}
                        {this.props.navLink ? this.props.navLink.productgroup ? <InputGroup.Text style={styles.navLink}>{this.props.navLink.productgroup ? this.props.navLink.productgroup : '...'}</InputGroup.Text> : null : null}
                        <Button style={styles.button} onClick={this.applySearchTerm} >Zoeken</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>

        );
    }
}

const styles = {
    button: {
        background: "grey",
        color: 'white',
        border: "none",
        boxShadow: '0 4px 2px -2px rgba(0,0,0,0.4)'
    },
    searchContainer: {
        padding: '10px',
        background: 'rgba(0, 0, 0, 0.8)',
    },
    inputs: {
        outline: 'none',
        border: 'none',
    },
    navLink: {
        boxShadow: '0 4px 2px -2px rgba(0,0,0,0.4)',
        borderRight: '1px solid white'
    }
}
export default connect()(SearchBar)