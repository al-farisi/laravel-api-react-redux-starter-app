import React, {Component}  from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles/Home.scss'


const Product = () => {
    return (
        <div styleName="Home">
            <div styleName="TextContainer">
                <h2>Products</h2>
                <h3>You have to be signed in if want to show this page</h3>
            </div>
        </div>
    );
}

export default CSSModules(Product, styles)