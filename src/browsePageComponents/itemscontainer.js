import React, { Component } from 'react';
import { connect } from 'react-redux';
import Items from './items.js';

class itemsContainer extends Component {
    render() {
        return (
            <Items 
            data = {this.props.items}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    items: state.itemdata
})

export default connect(mapStateToProps)(itemsContainer);