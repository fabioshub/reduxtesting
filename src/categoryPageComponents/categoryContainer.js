import React, { Component } from 'react';
import Category from './category';
import { connect } from 'react-redux';
import { navLinkUpdater, searched } from '../actions/actions';
import { push } from 'connected-react-router';
import { withRouter } from 'react-router-dom'
import { CATEGORIES } from '../extra/hardcodedFiles/categories.js'


class CategoryContainer extends Component {

    componentDidMount() {
        //navlink updated to null so it shows no navLink on category page
        this.props.dispatch(navLinkUpdater(null))
        // if (!this.props.categoryData) {
        //     this.loadInitalData()
        // }
        // KEEP THIS IN IN CASE OF SWITCH TO API FROM LOCAL
    }

    loadInitalData = () => {
        this.props.dispatch(searched(false));
        // axios.get(categoriesEndpoint)
        //     .then(data => {
        //         this.props.dispatch(categoryDataCreator(data.data));
        //     });
    }

    dispatchProductGroupCode = (productGroupCode) => {
        this.props.dispatch(push('/test/browse/' + productGroupCode));
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

const mapStateToProps = (state) => {
    return {
        categoryData: state.main.categorydata,
    }
}

export default withRouter(connect(mapStateToProps)(CategoryContainer));