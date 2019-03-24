import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import history from '../constants/history';

class SearchBar extends Component {

    dispatchNavLink = (navLink) => {
        //USE IF HISTORY GOBACK NOT ALLOWED BY ADMIN
        if (this.props.navLink.productgroup) {
            this.props.dispatch(push(`/${navLink}`))
        }
    }


    render() {
        return (
            <div style={styles.searchContainer}>
                <InputGroup >
                    <FormControl style={styles.inputs}
                        placeholder="Zoeken..."
                    />
                    <InputGroup.Append>
                        {this.props.navLink ? <InputGroup.Text onClick={history.goBack}>{this.props.navLink.name}</InputGroup.Text> : null}
                        {this.props.navLink ? this.props.navLink.productgroup ? <InputGroup.Text>{this.props.navLink.productgroup ? this.props.navLink.productgroup : '...'}</InputGroup.Text> : null : null}
                        <Button style={styles.button}>Zoeken</Button>
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
        border: "none"
    },
    searchContainer: {
        padding: '10px',
        background: 'rgba(0, 0, 0, 0.8)',
    },
    inputs: {
        outline: 'none',
        border: 'none'
    }
}
export default connect()(SearchBar)