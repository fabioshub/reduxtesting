import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { translateItems } from '../translationComponents/translationHelper';
import { withTranslation } from 'react-i18next';
import { itemStyle } from '../styles/otherStyles';

class Items extends Component {

    renderItems() {

        return this.props.data.map((item, index) => {
            return (
                <Col onClick={() => { this.props.dispatchProductItemPage(item.sku) }} style={itemStyle.containerStyle} key={index} sm={6} md={6}>
                    <img src={item.imageSmall} alt={index} style={itemStyle.pictureStyle}></img>
                    <br />
                    <span style={itemStyle.titleStyle}>{translateItems(item)}</span>
                    <div style={itemStyle.metaStyle} className="text-left">
                        <br />
                        <span style={itemStyle.idStyle}>{item.sku}</span>
                        <br />
                        <span style={itemStyle.rdStyle}>{item.collection}</span>
                        <br />
                        <span style={itemStyle.idStyle}>{item.size}</span>

                    </div>
                    <span style={itemStyle.priceStyle}>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(item.price)}</span>
                </Col>
            )
        })
    }

    render() {
        return this.props.data ? (
            <Container>
                <Row>
                    {this.renderItems()}
                </Row>
            </Container>
        ) : (<span>{this.props.t('loading')}</span>);
    }
}

export default withTranslation()(Items);