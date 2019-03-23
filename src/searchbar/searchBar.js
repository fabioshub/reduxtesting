import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

export default class SearchBar extends Component {
    render() {
        return (
            <div style={styles.searchContainer}>
                <InputGroup >
                    <FormControl
                        placeholder="Zoeken..."
                    />
                    <InputGroup.Append>
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
        background: 'black',
    }
}