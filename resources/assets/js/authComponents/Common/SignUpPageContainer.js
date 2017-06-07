import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from '../styles/signUp.scss';

class SignUpPageContainer extends Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    render() {
        const pagesLength = this.props.pagesLength;
        const prevDisabled = this.props.currentSlide === 0;
        const nextDisabled = this.props.currentSlide === (pagesLength - 1)
        return (
            <div styleName="slideContainer">
                <h1 styleName="header">{this.props.title}</h1>
                <div styleName="container">
                    {this.props.children}
                </div>
                <div styleName="buttons">
                    <button styleName="btn btn-prev-slide"
                            onClick={this.props.decrement}
                            disabled={prevDisabled}>
                            {this.props.prevText}
                    </button>
                    <button styleName="btn btn-next-slide"
                            onClick={this.props.increment}
                            disabled={nextDisabled}>
                            {this.props.nextText}
                    </button>
                </div>
            </div>
        ); 
        
    }
}

SignUpPageContainer.PropTypes = {
    header: PropTypes.string,
    prevText: PropTypes.string,
    nextText: PropTypes.string
}

SignUpPageContainer.defaultProps = {
    header: 'Sign up',
    prevText: 'Back',
    nextText: 'Next'
}

export default CSSModules(SignUpPageContainer, styles, {"allowMultiple" : true});