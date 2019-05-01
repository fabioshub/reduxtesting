import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Fab from '@material-ui/core/Fab';
import Snackbar from '@material-ui/core/Snackbar';
import { translateItems } from '../translationComponents/translationHelper';
import { createWishListItem } from '../models/wishlistItemModel';
import { withTranslation } from 'react-i18next';


const styles = {

    fabNavlink: {
        background: 'white',
        color: 'grey',
        margin: '10px 10px 0 0',
        fontSize: '10px'
    },

    fav: {
        fontSize: '24px',
        color: 'darkred',
        // marginTop: '2px',
        margin: '2px 5px 0'
    },
    plus: {
        fontSize: '24px',
        color: 'grey',
        // marginTop: '2px',
        margin: '2px 10px 0'
    },
    closeSuggestBox: {
        background: 'white',
        color: 'darkred',
        margin: '10px 10px 0 0',
        fontSize: '20px'
    }
}


class ProductItem extends Component {


    generateProductItem = (item) => {
        return (
            <Col className="text-center" key={item.sku[0]}>
                <h3 style={itemStyle.itemTitle}>{item.description}</h3>
                <img style={itemStyle.image} src={item.imageMedium} alt=''></img>
                <br />
                <h4 style={itemStyle.priceStyle}>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(item.price)}</h4>
                <h5>{item.size}</h5>
                <h5>{item.sku[0]}</h5>
            </Col>
        )
    }

    handleAddToWishList = (args) => {
        this.props.addToWishList(args)
    }

    handleSnackbarClose = (bool) => {
        this.props.snackbarClose(bool)
    }


    render() {
        const { currentItemsOnPage, itemCode, snackbarOpened } = this.props;
        return currentItemsOnPage && itemCode ? (
            <Container styles={itemStyle.container}>
                <Row>
                    {this.generateProductItem(currentItemsOnPage)}
                </Row>
                <Row >
                    <Col className='text-center'>
                        <Fab variant="extended" style={styles.fabNavlink} onClick={() => { this.handleAddToWishList(createWishListItem(currentItemsOnPage, 1)) }}>
                            <i style={styles.plus} className="fa fa-plus" aria-hidden="true"></i>
                            <i style={styles.fav} className="fa fa-heart" aria-hidden="true"></i>
                        </Fab>
                    </Col>

                </Row>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={snackbarOpened}
                    autoHideDuration={3000}
                    onClose={this.handleSnackbarClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{this.props.t('added')}: {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(currentItemsOnPage.price)}</span>}
                />
            </Container>
        ) : (<span>{this.props.t('loading')}</span>);
    }
}

export default withTranslation()(ProductItem)


const itemStyle = {
    container: {
        fontFamily: 'Playfair Display SC',
    },
    itemTitle: {
        marginTop: '50px',
        fontFamily: 'Playfair Display SC',

    },
    image: {
        margin: '10px 0',
        maxWidth: '100%'
    }
}