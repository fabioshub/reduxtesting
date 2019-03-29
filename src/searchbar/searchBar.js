import React, { Component } from 'react';
import { InputGroup, FormControl, Button, Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { setSearchTermData, onFocus, itemDataCreator, maxPageSetter } from '../actions/actions';
import { suggestEndPoint, suggestItemsColorEndPoint, suggestLocalEndPoint } from '../config/ptc-config';
import Axios from 'axios';
import { PAGEAMOUNT } from '../constants/otherConstant';

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

    dispatchSearch = (searchTerm) => {
        this.props.dispatch(push(`/test/search/${searchTerm}/1`))
        const params = { pageNumber: 1, searchTerm: searchTerm, pageAmount: PAGEAMOUNT }
        Axios.post(suggestItemsColorEndPoint, { params })
            .then(data => {
                //UNCONTROLLEDAPIINPUTHANDLING
                this.props.dispatch(itemDataCreator(data.data.docs))
                this.props.dispatch(maxPageSetter(Math.ceil(data.data.numFound / PAGEAMOUNT)))
            })
    }

    handleSuggestChange = (e) => {
        if (e.length > 0) {
            Axios.get(suggestLocalEndPoint, {
                params: {
                    query: encodeURIComponent(e),
                },
            })
                // .then(data => console.log(data.data))
                //UNCONTROLLEDAPIINPUTHANDLING
                .then(data => data.data.length > 0 ? this.props.dispatch(setSearchTermData(data.data)) : null)
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

    render() {
        return (
            <div>
                <div style={styles.searchContainer}>
                    <InputGroup >
                        <FormControl id="searchbar" ref={(input) => this.textInput = input} style={styles.inputs} onClick={this.toggleSuggestBox} onChange={(e) => { this.handleSuggestChange(e.target.value); this.props.dispatch(onFocus(true)) }}
                            placeholder="Zoeken..."
                        />
                        <InputGroup.Append>
                            <Button style={styles.button} onClick={this.applySearchTerm} > <i className="fa fa-search" aria-hidden="true"></i></Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
                {this.props.searchTermData ? this.props.searchTermData.length !== 0 && this.props.onFocus ?
                    <Container style={styles.searchSuggestBox} >
                        <Row>
                            <Col className='text-left' sm={12}>

                                <h4 style={styles.searchSuggestBoxTitles}>{this.props.searchTermData[0].category}</h4>
                                <hr align='left' style={styles.searchSuggestBoxHr} />
                                {this.props.searchTermData[0].items.map(item => {
                                    return <Button variant='outline-white' key={item} onClick={() => { this.dispatchSearch(item) }} style={styles.suggestItem}>{item} <span style={{ color: item }}>o</span></Button>
                                })}
                            </Col>
                            <Col className='text-left' sm={12}>
                                <br />
                                {this.props.searchTermData[1] ? <h4 style={styles.searchSuggestBoxTitles}>{this.props.searchTermData[1].category}</h4> : null}
                                {this.props.searchTermData[1] ? <hr align='left' style={styles.searchSuggestBoxHr} /> : null}
                                {this.props.searchTermData[1] ? this.props.searchTermData[1].items.map(item => {
                                    return <Button variant='outline-white' key={item} onClick={() => { this.dispatchSearch(item) }} style={styles.suggestItem}>{item}</Button>
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
    console.log(state.main.searchtermdata)
    return {
        searchTermData: state.main.searchtermdata,
        onFocus: state.main.onFocus,
        // url: ownProps
    }
}


export default connect(mapStateToProps)(SearchBar)