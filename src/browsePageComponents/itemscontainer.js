import React, { Component } from 'react';
import { connect } from 'react-redux';
import Items from './items.js';
import { resetCurrentItemData } from '../actions/actions.js';



class itemsContainer extends Component {
    componentDidMount() {
        this.props.dispatch(resetCurrentItemData);
    }

    render() {
        return (
            <Items 
            data = {this.props.items}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    items: state.main.itemdata
})

export default connect(mapStateToProps)(itemsContainer);