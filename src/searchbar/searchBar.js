import React, { Component } from 'react';
import {InputGroup, FormControl, Button } from 'react-bootstrap';

export default class SearchBar extends Component {
    render() {
        return (
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="item..."
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary">Zoeken</Button>
                </InputGroup.Append>
            </InputGroup>
        );
    }
}