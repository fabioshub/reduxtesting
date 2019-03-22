import React, { Component } from 'react';
import {InputGroup, FormControl, Button } from 'react-bootstrap';

export default class SearchBar extends Component {
    render() {
        return (
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Zoeken..."
                />
                <InputGroup.Append>
                    <Button style={styles.button}>Zoeken</Button>
                </InputGroup.Append>
            </InputGroup>
        );
    }
}

const styles = {
    formStyle: {
        background: "black"
    },
    button: {
        background: "grey",
        border: "none"
    }
}