import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import history from '../constants/history';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

const styles = {
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
}

class FabBar extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className='text-left'>
                        <Fab style={styles.fabBack} onClick={history.goBack}>
                            <i className="fa fa-angle-left" aria-hidden="true" style={styles.plusIconStyle}></i>
                        </Fab>
                    </Col>
                    <Col className='text-right'>
                        <Fab style={styles.fabHome} onClick={() => { this.props.dispatch(push('/')) }}>
                            <i className="fa fa-home" aria-hidden="true" style={styles.plusIconStyle}></i>
                        </Fab>
                    </Col>
                </Row>

            </Container>

        );
    }
}
export default connect()(FabBar);