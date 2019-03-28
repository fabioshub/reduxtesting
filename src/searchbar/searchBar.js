import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { setSearchTermData, onFocus, itemDataCreator, maxPageSetter } from '../actions/actions';
import { suggestEndPoint, suggestItemsColorLocalEndPoint, } from '../config/ptc-config';
import Axios from 'axios';
import { PAGEAMOUNT } from '../constants/otherConstant';

class SearchBar extends Component {

    dispatchNavLink = (navLink) => {
        //USE IF HISTORY GOBACK NOT ALLOWED BY ADMIN
        if (this.props.navLink.productgroup) {
            this.props.dispatch(push(`/${navLink}`))
        }
    }

    dispatchSearch = (searchTerm) => {
        this.props.dispatch(push(`/test/search/${searchTerm}/1`))
        const params = { pageNumber: 1, searchTerm: searchTerm, pageAmount: PAGEAMOUNT }
        Axios.post(suggestItemsColorLocalEndPoint, { params })
            .then(data => {
                //UNCONTROLLEDAPIINPUTHANDLING
                this.props.dispatch(itemDataCreator(data.data.docs))
                this.props.dispatch(maxPageSetter(Math.ceil(data.data.numFound / PAGEAMOUNT)))
            })
    }

    handleSuggestChange = (e) => {
        if (e.length > 0) {
            Axios.get(suggestEndPoint, {
                params: {
                    query: encodeURIComponent(e),
                },
            })
                // .then(data => console.log(data.data[0]))

                //UNCONTROLLEDAPIINPUTHANDLING
                .then(data => data.data.length > 0 ? this.props.dispatch(setSearchTermData(data.data)) : null)
        }

    }

    render() {
        return (
            <div>
                <div style={styles.searchContainer}>
                    <InputGroup >
                        <FormControl id="searchbar" style={styles.inputs} onChange={(e) => { this.handleSuggestChange(e.target.value) }} onFocus={() => { this.props.dispatch(onFocus(true)) }}
                            placeholder="Zoeken..."
                        />
                        <InputGroup.Append>
                            <Button style={styles.button} onClick={this.applySearchTerm} > <i className="fa fa-search" aria-hidden="true"></i></Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
                {this.props.searchTermData ? this.props.searchTermData.length !== 0 && this.props.onFocus ?
                    <div style={styles.searchSuggestBox} className='text-left'>
                        <h2 style={styles.searchSuggestBoxTitles}>{this.props.searchTermData[0].category}</h2>
                        <hr align='left' style={styles.searchSuggestBoxHr} />
                        {this.props.searchTermData[0].items.map(item => {
                            return <Button variant='outline-white' key={item} onClick={() => { this.dispatchSearch(item) }} style={styles.suggestItem}>{item}</Button>
                        })}
                    </div>
                    : null : null
                }
            </div>


        );
    }
}

// const stylesBackup = {
//     button: {
//         background: "grey",
//         color: 'white',
//         border: "none",
//         boxShadow: '0 4px 2px -2px rgba(0,0,0,0.4)'
//     },
//     searchContainer: {
//         padding: '10px',
//         background: 'rgba(0, 0, 0, 0.8)',
//     },
//     inputs: {
//         outline: 'none',
//         border: 'none',
//     },
//     navLink: {
//         boxShadow: '0 4px 2px -2px rgba(0,0,0,0.4)',
//         borderRight: '1px solid white'
//     }
// }

const styles = {
    button: {
        background: "white",
        color: 'black',
        border: "1px solid white",
        boxShadow: '0 4px 2px -2px rgba(0,0,0,0.4)'
    },
    searchContainer: {
        padding: '10px 16px',
        background: 'rgba(0, 0, 0, 0.8)',
    },
    inputs: {
        outline: 'none',
        border: 'none',
        background: 'none',
        color: 'white',
        borderBottom: '2px solid white'
    },
    navLink: {
        boxShadow: '0 4px 2px -2px rgba(0,0,0,0.4)',
        borderRight: '1px solid white'
    },
    searchSuggestBox: {
        // marginTop: '20px',
        padding: '20px',
        background: "rgba(0, 0, 0, 0.8)",
        color: 'white',
        boxShadow: '0px 3px 15px rgba(0,0,0,0.2)'

    },
    searchSuggestBoxHr: {
        width: '150px',
        borderColor: 'white'

    },
    searchSuggestBoxTitles: {
        color: 'white',
    },
    suggestItem: {
        fontsize: '25px',
        margin: '0px 5px',
        background: 'none',
        color: 'white',
        border: '1px solid white'
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        searchTermData: state.main.searchtermdata,
        onFocus: state.main.onFocus
    }
}


export default connect(mapStateToProps)(SearchBar)