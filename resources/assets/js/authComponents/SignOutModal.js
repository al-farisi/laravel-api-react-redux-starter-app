import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { logout } from './authActions';
import { setModal } from '../sharedComponents/modalActions';
import PropTypes from 'prop-types';

import ModalWrapper from '../sharedComponents/ModalWrapper';

const SignOutModal = (props, context) => {
	const signOut = () => {
		props.logout();
		context.router.history.push('/');
		// props.setModal();
	}

    return (
		<ModalWrapper
			{...props}
			title={"LogOut"}
			width={400}
			showOk={true}
			onOk={signOut}
		>
			<h1>Are you sure you wish to log out</h1>
		</ModalWrapper>
	);
}

SignOutModal.contextTypes = {
	router: PropTypes.object.isRequired
}

export default connect(null, { logout, setModal })(SignOutModal);
