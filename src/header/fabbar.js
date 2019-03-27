import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import history from '../constants/history';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

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
        margin: '10px 0 0 0'
    },
    fabHome: {
        background: 'white',
        color: 'grey',
        margin: '10px 0 0 0'
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

    }
}

class FabBar extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Row>
                    <Col className='text-left'>
                        <Fab style={styles.fabBack} onClick={history.goBack}>
                            <i className="fa fa-angle-left" aria-hidden="true" style={styles.plusIconStyle}></i>
                        </Fab>
                    </Col>
                    <Col className='text-right'>

                        {this.props.navLink ?
                            <Fab style={styles.fabNavlink} variant={"extended"} onClick={() => { this.props.dispatch(push(`/test`)) }}>
                                <i style={styles.delete} className="fa fa-times" aria-hidden="true"></i>
                                {this.props.navLink.category}
                            </Fab>
                            : null}
                        {this.props.navLink ? this.props.navLink.productgroup ?
                            <Fab style={styles.fabNavlink} variant={"extended"} onClick={() => { this.props.dispatch(push(`/test/${this.props.category}`)) }} extended>
                                <i style={styles.delete} className="fa fa-times" aria-hidden="true"></i>
                                {this.props.navLink.productgroup}
                            </Fab>
                            : null : null}
                        <Fab style={styles.fabHome} onClick={() => { this.props.dispatch(push('/test')) }}>
                            <i className="fa fa-home" aria-hidden="true" style={styles.plusIconStyle}></i>
                        </Fab>

                    </Col>
                </Row>
            </Container>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        category: state.main.navlink.categoryCode
    }
}

export default connect(mapStateToProps)(FabBar);