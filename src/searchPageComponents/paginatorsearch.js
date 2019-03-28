import React, { Component } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import '../styles/paginatorStyle.css';


export default class PaginatorSearch extends Component {
    basePaginatorObject = (e) => {
        const { updateCurrentPage, maxPageNumber } = this.props;
        if (e > 0 && e < maxPageNumber + 1) {
            return <Pagination.Item onClick={() => updateCurrentPage(e)}>{e}</Pagination.Item>
        }
    }

    basePaginatorObjectCenter = (e) => {
        if (e > 0) {
            return <Pagination.Item active>{e}</Pagination.Item>
        }
    }

    ellipsisViewer = (e) => {
        const { currentpage, maxPageNumber } = this.props;
        if (currentpage > e && currentpage !== 1 && currentpage - 2 > 1) {
            return <Pagination.Ellipsis />
        }
        if (currentpage < e && currentpage !== maxPageNumber && currentpage + 2 < maxPageNumber) {
            return <Pagination.Ellipsis />
        }
    }

    basePaginatorObjectFirstOrLast = (e) => {
        const { currentpage, maxPageNumber, updateCurrentPage } = this.props;
        if (currentpage > e && currentpage !== 1 && currentpage - 2 > 1) {
            return <Pagination.Item id='paginationFirst' onClick={() => updateCurrentPage(e)}>{e}</Pagination.Item>
        }
        if (currentpage < e && currentpage !== maxPageNumber && currentpage + 2 < maxPageNumber) {
            return <Pagination.Item id='paginationLast' onClick={() => updateCurrentPage(e)}>{e}</Pagination.Item>
        }
    }

    paginatorPrevAndNextObect = (e) => {
        const { currentpage, maxPageNumber, updateCurrentPage } = this.props;
        if (currentpage > e && currentpage !== 1 && currentpage - 2 > 1) {
            return <Pagination.Prev id='paginationPrev' onClick={() => updateCurrentPage(e)} />
        }
        if (currentpage < e && currentpage !== maxPageNumber && currentpage + 2 < maxPageNumber) {
            return <Pagination.Next id='paginationNext' onClick={() => updateCurrentPage(e)} />
        }
    }

    render() {
        const { currentpage, maxPageNumber } = this.props;
        return (
            <Pagination>
                {this.paginatorPrevAndNextObect(currentpage - 1)}
                {this.basePaginatorObjectFirstOrLast(1)}
                {this.ellipsisViewer(1)}
                {this.basePaginatorObject(currentpage - 2)}
                {this.basePaginatorObject(currentpage - 1)}
                {this.basePaginatorObjectCenter(currentpage)}
                {this.basePaginatorObject(currentpage + 1)}
                {this.basePaginatorObject(currentpage + 2)}
                {this.ellipsisViewer(maxPageNumber)}
                {this.basePaginatorObjectFirstOrLast(maxPageNumber)}
                {this.paginatorPrevAndNextObect(currentpage + 1)}
            </Pagination>
        );
    }
}

