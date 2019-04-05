import React, { Component } from 'react';
import { InputGroup, FormControl, Button, Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { setSearchTermData, onFocus, itemDataCreator, maxPageSetter, currentSearch } from '../actions/actions';
import { suggestEndPoint, suggestItemsProviderEndPoint, suggestLocalEndPoint, suggestItemsProviderLocalEndPoint } from '../config/ptc-config';
import Axios from 'axios';
import { PAGEAMOUNT } from '../constants/otherConstant';
import { initialState } from '../reducers/reducer.js';
import { withTranslation } from 'react-i18next';

class SearchBar extends Component {

    componentDidMount() {
        //when scrolling turn suggestbox off
        window.addEventListener('scroll', () => { this.toggleSuggestBoxOff() }, true);
    }

    dispatchNavLink = (navLink) => {
        //USE IF HISTORY GOBACK NOT ALLOWED BY ADMIN
        if (this.props.navLink.productgroup) {
            this.props.dispatch(push(`/${navLink}`))
        }
    }

    dispatchSearch = (sort, searchTerm) => {
        this.props.dispatch(push(`/test/search/${sort}/${searchTerm}/1`))
        this.handleSuggestChange(searchTerm);
        //this is for language control because these are kept in api
        const params = { pageNumber: 1, sort: sort, searchTerm: searchTerm, pageAmount: PAGEAMOUNT }
        Axios.post(suggestItemsProviderEndPoint, { params })
            .then(data => {
                //UNCONTROLLEDAPIINPUTHANDLING
                this.props.dispatch(itemDataCreator(data.data.docs))
                this.props.dispatch(maxPageSetter(Math.ceil(data.data.numFound / PAGEAMOUNT)))
            })
    }

    handleSuggestChange = (e) => {
        this.props.dispatch(currentSearch(e))
        this.textInput.value = e;
        if (e.length === 0) {
            this.props.dispatch(setSearchTermData(initialState.searchtermdata))
        }
        else if (e.length > 0) {
            Axios.get(suggestEndPoint, {
                params: {
                    query: encodeURIComponent(this.textInput.value),
                },
            })
                // .then(data => console.log(data.data))
                //UNCONTROLLEDAPIINPUTHANDLING
                .then(data => data.data.length > 0 ? this.props.dispatch(setSearchTermData(data.data)) : this.props.dispatch(setSearchTermData(initialState.searchtermdata)))
        }


    }

    toggleSuggestBox = () => {
        this.props.onFocus ? this.toggleSuggestBoxOff() : this.toggleSuggestBoxOn()
    }

    toggleSuggestBoxOn = () => {
        this.props.dispatch(onFocus(true))
    }

    toggleSuggestBoxOff = () => {
        this.textInput.blur()
        this.props.dispatch(onFocus(false))
    }

    deleteCurrentSearch = () => {
        this.textInput.value = '';
        this.props.dispatch(setSearchTermData(initialState.searchtermdata))
    }

    render() {
        return (
            <div id='completeNav'>
                <div style={styles.searchContainer}>
                    <InputGroup >
                        <FormControl id="searchbar" ref={(textInput) => this.textInput = textInput} style={styles.inputs} onClick={this.toggleSuggestBox} onChange={(e) => { this.handleSuggestChange(this.textInput.value); this.props.dispatch(onFocus(true)); e.preventDefault(); e.stopPropagation(); }}
                            placeholder={this.props.t('search')}
                        />

                        {this.textInput ? this.textInput.value.length > 0 && this.props.onFocus ?
                            <InputGroup.Append>
                                <Button style={styles.button} onClick={() => { this.deleteCurrentSearch() }} > <i className="fa fa-times" aria-hidden="true"></i></Button>
                            </InputGroup.Append> : null : null}
                    </InputGroup>
                </div>
                {this.props.searchTermData ? this.props.searchTermData.length !== 0 && this.props.onFocus ?
                    <Container style={styles.searchSuggestBox} >
                        <Row>
                            <Col className='text-left' sm={12}>

                                <h4 style={styles.searchSuggestBoxTitles}>{this.props.searchTermData[0].category}</h4>
                                <hr align='left' style={styles.searchSuggestBoxHr} />
                                {this.props.searchTermData[0].items.map(item => {
                                    return <Button variant='outline-white' key={item} onClick={() => { this.dispatchSearch(this.props.searchTermData[0].category, item) }} style={styles.suggestItem}>{item} <span style={{ color: item }}>o</span></Button>
                                })}
                            </Col>
                            <Col className='text-left' sm={12}>
                                <br />
                                {this.props.searchTermData[1] ? <h4 style={styles.searchSuggestBoxTitles}>{this.props.searchTermData[1].category}</h4> : null}
                                {this.props.searchTermData[1] ? <hr align='left' style={styles.searchSuggestBoxHr} /> : null}
                                {this.props.searchTermData[1] ? this.props.searchTermData[1].items.map(item => {
                                    return <div key={item} ><Button variant='outline-white' onClick={() => { this.dispatchSearch(this.props.searchTermData[1].category, item) }} style={styles.suggestItem}>{item}</Button> <br /></div>
                                }) : null}
                            </Col>
                            <Col className='text-right' sm={12} style={{}}>
                                <i onClick={() => { this.props.dispatch(onFocus(false)) }} style={{ fontSize: '35px', bottom: '0' }} className="fa fa-times-circle" aria-hidden="true"></i>
                            </Col>
                        </Row>
                    </Container>
                    : null : null
                }
            </div>


        );
    }
}

const styles = {
    button: {
        background: "white",
        color: 'black',
        border: "1px solid white",
        boxShadow: '0 4px 2px -2px rgba(0,0,0,0.4)'
    },
    searchContainer: {
        padding: '10px 16px',
        background: 'rgba(0, 0, 0, 0.9)',
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
        padding: '5px 20px 14px',
        background: "rgba(0, 0, 0, 0.9)",
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
        margin: '0px 5px',
        background: 'none',
        color: 'white',
        fontSize: '14px'
        // border: '1px solid white'
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        searchTermData: state.main.searchtermdata,
        onFocus: state.main.onFocus,
        currentSearchTerm: state.main.currentSearchTerm,
        navLink: state.main.navLink
    }
}


export default connect(mapStateToProps)(withTranslation()(SearchBar))