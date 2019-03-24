import React, { Component } from 'react';
import ProductGroup from './productGroup';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import { productGroupDataCreator, navLinkUpdater } from '../actions/actions';
import { push } from 'connected-react-router';
import { PRODUCTGROUPS } from '../extra/hardcodedFiles/productgroups.js'
import { CATEGORIES } from '../extra/hardcodedFiles/categories';

class ProductGroupContainer extends Component {

    componentDidMount() {
        this.loadInitalData()
    }

    loadInitalData = () => {
        // const params = {categoryToProductGroupCode: this.props.category}
        // axios.post(productGroupEndpoint, {params})
        // .then(data => {
        //         this.props.dispatch(productGroupDataCreator(data.data));
        //     });
        // KEEP THIS IN IN CASE OF API SWITCH FROM LOCAL
        PRODUCTGROUPS.forEach(pgItem => {
            if (pgItem.category === this.props.category) {
                this.props.dispatch(productGroupDataCreator(pgItem.productgroupsitem));
            }
        });
        CATEGORIES.forEach(categorie => {
            if (categorie.code === this.props.category) {
                this.props.dispatch(navLinkUpdater({ name: categorie.names.NLD, category: categorie.code }));
            }
        })
    };

    dispatchProductGroupCode = (productGroupCode) => {
        this.props.dispatch(push(this.props.url + '/' + productGroupCode + '/1'));
    }


    render() {
        return (
            <ProductGroup
                data={this.props.productGroupData}
                dispatchProductGroupCode={this.dispatchProductGroupCode}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        productGroupData: state.main.productgroupdata,
        category: ownProps.match.params.category,
        url: ownProps.match.url
    }
}

export default withRouter(connect(mapStateToProps)(ProductGroupContainer));