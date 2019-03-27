import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { setSearchTermData, onFocus } from '../actions/actions';
import { suggestEndPoint, } from '../config/ptc-config';
import Axios from 'axios';

class SearchBar extends Component {

    dispatchNavLink = (navLink) => {
        //USE IF HISTORY GOBACK NOT ALLOWED BY ADMIN
        if (this.props.navLink.productgroup) {
            this.props.dispatch(push(`/${navLink}`))
        }
    }

    handleEmailChange = (e) => {
        Axios.get(suggestEndPoint, {
            params: {
                query: encodeURIComponent(e.target.value),
            },
        })
            // .then(data => console.log(data.data[0]))
            .then(data => this.props.dispatch(setSearchTermData(data.data)))
    }


    render() {
        return (
            <div>
                <div style={styles.searchContainer}>
                    <InputGroup >
                        <FormControl id="searchbar" style={styles.inputs} onChange={(e) => { this.handleEmailChange(e) }} onFocus={() => { this.props.dispatch(onFocus(true)) }} onBlur={() => { this.props.dispatch(onFocus(false)) }}
                            placeholder="Zoeken..."
                        />
                        <InputGroup.Append>
                            <Button style={styles.button} onClick={this.applySearchTerm} > <i className="fa fa-search" aria-hidden="true"></i></Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
                {this.props.searchTermData ? this.props.searchTermData.length !== 0 && this.props.onFocus ?
                    <div style={styles.searchSuggestBox}>
                        <h2 style={styles.searchSuggestBoxTitles}>{this.props.searchTermData[0].category}</h2>
                        <hr />
                        {this.props.searchTermData[0].items.map(item => {
                            return <Button style={styles.suggestItem}>{item}</Button>
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
        marginTop: '20px',
        padding: '20px',
        background: 'white',
        color: 'black',
    },
    searchSuggestBoxHr: {

    },
    searchSuggestBoxTitles: {
        color: 'black',
    },
    suggestItem: {
        fontsize: '25px',
        margin: '0px 5px',
        background: 'white',
        color: 'black',
        border: '1px solid black'
    }
}

const mapStateToProps = (state) => {
    return {
        searchTermData: state.main.searchtermdata,
        onFocus: state.main.onFocus
    }
}


export default connect(mapStateToProps)(SearchBar)