import React, { Component } from 'react';
import SearchItemContainer from '../searchPageComponents/searchitemcontainer.js';
import PaginationSearchContainer from '../searchPageComponents/paginationsearchcontainer';
import { connect } from 'react-redux';
import { basicContainerStyle } from '../styles/otherStyles.js'


class SearchPage extends Component {

  render() {
    return (
      <div style={basicContainerStyle}>
        <SearchItemContainer />
        <PaginationSearchContainer
        />
      </div>
    );
  }
}



export default connect()(SearchPage);
