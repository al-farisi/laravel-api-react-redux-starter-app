import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import Checkbox from '../sharedComponents/checkbox';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import styles from './styles/signUp.scss';
import SignUpPageContainer from './common/SignUpPageContainer';

import ModalWrapper from '../sharedComponents/ModalWrapper';

//modal slides
import Register from './signUp/register';

class SignUpModal extends Component {
	constructor() {
		super();
		this.state = {
			activeSlide: 0,
			increasing: true
		}
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}

	currentPage(page, len) {
		return <SignUpPageContainer
				key={page.name}
				title={page.title}
				increment={() => this.increment(len)}
				decrement={this.decrement}
				currentSlide={this.state.activeSlide}
				pagesLength={len}>
				{page.component}
			</SignUpPageContainer>			
	}

	increment(len) {
		const current = this.state.activeSlide;
		const allow = (current !==  (len -1));
		if (allow) this.setState({activeSlide: (current + 1), increasing: true});
	}

	decrement() {
		const current = this.state.activeSlide;
		const allow = (current !==  0);
		if (allow) this.setState({activeSlide: (current - 1), increasing: false});
	}

	
	render() {
		const pages = [ {
							name: 'Page1',
							component: <Register />,
							title: "just a few details"
						},
						{
							name: 'Page2',							
							component: <Page2 />,
							title: 'Where do you want your coffee delivered?',
						},
						{
							name: 'Page3',							
							component: <Page3 />,
							title: "How do you like your coffee?"
						}
					];
		const enterStyle = this.state.increasing ? 
			styles.signUpSlideEnter :
			styles.signUpSlideEnterOpposite;
		const appearStyle = this.state.increasing ? 
			styles.signUpSlideAppear :
			styles.signUpSlideAppearOpposite;
		const leaveStyle = styles.signUpSlideLeave;
				
		return (
			<ModalWrapper
				showOk={false}
				signUp={true}
				styleName="signUpModal"
			>
				<CSSTransitionGroup 
					transitionName={{
						appear: appearStyle,
						enter: enterStyle,
						leave: leaveStyle
					}}
					transitionAppear={true}
					transitionAppearTimeout={300}
					transitionEnterTimeout={700}
					transitionLeaveTimeout={500}>

					{this.currentPage(pages[this.state.activeSlide], pages.length)}
				
				</CSSTransitionGroup>	

			</ModalWrapper>
		);
	}
    
}

const Page1 = (props) => {
	return (
		<div >
			PAGE 1
		</div>
	)
}


const Page2 = (props) => {
	return (
		<div>
			PAGE 2
		</div>
	)
}


const Page3 = (props) => {
	return (
		<div>
			PAGE 3
		</div>
	)
}
export default CSSModules(SignUpModal, styles, {"allowMultiple" : true});
