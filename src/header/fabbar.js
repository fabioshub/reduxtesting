import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import history from '../constants/history';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { onFocus } from '../actions/actions';

const styles = {
    container: {
    },
    plusIconStyle: {
        paddingRight: '2px',
        fontSize: '30px',
    },
    fabBack: {
        background: 'white',
        color: 'grey',
        margin: '10px 10px 0 0'
    },
    fabHome: {
        background: 'white',
        color: 'grey',
        margin: '10px 10px 0 0'
    },
    fabNavlink: {
        background: 'white',
        color: 'grey',
        margin: '10px 10px 0 0',
        fontSize: '10px'
    },
    delete: {
        color: 'darkred',
        fontSize: '15px',
        marginRight: '5px'
    },
    fav: {
        fontSize: '24px',
        color: 'darkred',
        marginTop: '2px'
    },
    closeSuggestBox: {
        background: 'white',
        color: 'darkred',
        margin: '10px 10px 0 0',
        fontSize: '20px'
    }
}

class FabBar extends Component {
    render() {
        return (
            <Container style={styles.container}>
                {this.props.searchTermData.length === 0 || true ?

                    <Row>
                        <Col className='text-left' md={4} sm={4} lg={4}>
                            {this.props.navlink || this.props.searched ?
                                <Fab style={styles.fabBack} onClick={history.goBack}>
                                    <i className="fa fa-angle-left" aria-hidden="true" style={styles.plusIconStyle}></i>
                                </Fab>
                                : null}
                            {this.props.navlink || this.props.searched ?
                                <Fab style={styles.fabHome} onClick={() => { this.props.dispatch(push('/test/browse')) }}>
                                    <i className="fa fa-home" aria-hidden="true" style={styles.plusIconStyle}></i>
                                </Fab>
                                : null}
                        </Col>
                        <Col className='text-right' md={8} sm={8} lg={8}>
                            {this.props.navlink ?
                                <Fab style={styles.fabNavlink} variant={"extended"} onClick={() => { this.props.dispatch(push(`/test/browse`)) }}>
                                    <i style={styles.delete} className="fa fa-times" aria-hidden="true"></i>
                                    {this.props.navLink.category}
                                </Fab>
                                : null}
                            {this.props.navlink ? this.props.navlink.productgroup ?
                                <Fab style={styles.fabNavlink} variant={"extended"} onClick={() => { this.props.dispatch(push(`/test/browse/${this.props.navlink.categoryCode}`)) }} extended>
                                    <i style={styles.delete} className="fa fa-times" aria-hidden="true"></i>
                                    {this.props.navLink.productgroup}
                                </Fab>
                                : null : null}
                            <Fab style={styles.fabHome} >
                                <i className="fa fa-heart" style={styles.fav}></i>
                            </Fab>
                            {this.props.onFocus ?
                                <Fab style={styles.closeSuggestBox} variant={"extended"} onClick={() => { this.props.dispatch(onFocus(false)) }} extended>
                                    <i className="fa fa-times" aria-hidden="true"></i>
                                </Fab>
                                : null}
                        </Col>
                    </Row>
                    : null}
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        navlink: state.main.navlink,
        searchTermData: state.main.searchtermdata,
        onFocus: state.main.onFocus,
        searched: state.main.searched
    }
}

export default connect(mapStateToProps)(FabBar);