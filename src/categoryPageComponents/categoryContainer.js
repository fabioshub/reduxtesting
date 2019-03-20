import React, { Component } from 'react';
import Category from './category';
import { connect } from 'react-redux';
import axios from 'axios';
import { categoryDataCreator } from '../actions/actions';
import {push} from 'connected-react-router';


class CategoryContainer extends Component {

    componentDidMount() {
        this.loadInitalData()
    }
    
    loadInitalData = () => {
        axios.get(`http://localhost:58080/categories`)
        .then(data => {
                this.props.dispatch(categoryDataCreator(data.data));
            });
    }

    dispatchProductGroupCode = (productGroupCode) => {
        this.props.dispatch(push(productGroupCode));
    }

    render() {
        return (
            <Category 
                data={this.props.categoryData}
                dispatchProductGroupCode={this.dispatchProductGroupCode}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        categoryData: state.main.categorydata,
    }
}

export default connect(mapStateToProps)(CategoryContainer);