import React, {Component}  from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles/Home.scss'

class Page2 extends Component {

	render() {
		return (
			<div styleName="Home">
				Page 2
			</div>
		);
	}
}

export default CSSModules(Page2, styles)
