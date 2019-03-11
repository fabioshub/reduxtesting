import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paginator from './paginator.js';
import { paginatorUpdater, itemDataCreator, resetCurrentItemData } from '../actions/actions.js';

import axios from 'axios';


class paginationContainer extends Component {

    updateCurrentPage = (newPage) => {
        this.props.dispatch(paginatorUpdater(newPage))
        this.fetchItemData(newPage)
        // history.push('/browse/' + newPage)
    }

    fetchItemData(page) {
        //needed to delete current items in redux store
        this.props.dispatch(resetCurrentItemData);
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=dbb619d6178c8ecdfc83dc6e69d51737&language=en-US&page=${page}`)
        .then(data => {
            this.props.dispatch(itemDataCreator(data.data))
        });
    }
    

    render() {
        return (
            <Paginator 
            updateCurrentPage={this.updateCurrentPage}
            currentpage={this.props.currentpage}
            />
        );
    }
}

const mapStateToProps = (state) => ({
     currentpage: state.currentpage
})
export default connect(mapStateToProps)(paginationContainer)