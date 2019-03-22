import React, { Component } from 'react';
import Category from './category';
import { connect } from 'react-redux';
import axios from 'axios';
import { categoryDataCreator } from '../actions/actions';
import {push} from 'connected-react-router';
import {withRouter } from 'react-router-dom'
import { categoriesEndpoint } from '../config/ptc-config';
import { CATEGORIES } from '../extra/hardcodedFiles/categories.js' 


class CategoryContainer extends Component {

    componentDidMount() {
        // if (!this.props.categoryData) {
        //     this.loadInitalData()
        // }
        // KEEP THIS IN IN CASE OF SWITCH TO API FROM LOCAL
    }
    
    loadInitalData = () => {
        axios.get(categoriesEndpoint)
        .then(data => {
                this.props.dispatch(categoryDataCreator(data.data));
            });
    }

    dispatchProductGroupCode = (productGroupCode) => {
        this.props.dispatch(push('/'+productGroupCode));
    }

    render() {
        return (
            <Category 
                data={CATEGORIES}
                dispatchProductGroupCode={this.dispatchProductGroupCode}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        categoryData: state.main.categorydata,
    }
}

export default withRouter(connect(mapStateToProps)(CategoryContainer));