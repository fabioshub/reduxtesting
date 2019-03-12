import React, { Component } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import '../styles/paginatorStyle.css';


export default class Paginator extends Component {
    basePaginatorObject = (e) => {
        if (e > 0) {
            return <Pagination.Item onClick={()=>this.props.updateCurrentPage(e)}>{e}</Pagination.Item>
        }
    }
    
    basePaginatorObjectCenter = (e) => {
        if (e > 0) {
            return <Pagination.Item active>{e}</Pagination.Item>
        }
    }

    render() {
        return (
            <Pagination>
                <button onClick={()=>this.props.historyUpdate}></button>
                {/* <Pagination.First /> */}
                <Pagination.Prev onClick={()=>this.props.updateCurrentPage(this.props.currentpage - 1)}/>
                <Pagination.Ellipsis />
                {this.basePaginatorObject(this.props.currentpage - 2)}
                {this.basePaginatorObject(this.props.currentpage - 1)}
                {this.basePaginatorObjectCenter(this.props.currentpage)}
                {this.basePaginatorObject(this.props.currentpage + 1)}
                {this.basePaginatorObject(this.props.currentpage + 2)}
                <Pagination.Ellipsis />
                <Pagination.Next onClick={()=>this.props.updateCurrentPage(this.props.currentpage + 1)}/>
                {/* <Pagination.Last /> */}
            </Pagination>
        );
    }
}