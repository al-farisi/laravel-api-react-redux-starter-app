import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

const TextFieldGroup = ({field, value, placeholder, error, type, onChange}) => {
	let className = error ? 'form-group has-error' : 'form-group';

	return (
		<div>
			<input
				onChange={onChange}
				value={value}
				type={type}
				name={field}
				className="form-control"
				placeholder={placeholder}
			/>
			{error && <span className="help-block">{error}</span>}
		</div>
	)
}

TextFieldGroup.popTypes = {
	field: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	error: PropTypes.string,
	type: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
}

TextFieldGroup.defaultProps = {
	type: 'text'
}

export default TextFieldGroup;
