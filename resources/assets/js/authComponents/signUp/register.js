import React, { Component } from 'react';

import TextFieldGroup from '../common/TextFieldGroup';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            errors: '',
            email: '',
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
		this.setState({ [e.target.name] : e.target.value})
	}

    onSubmit(e) {
        e.preventDefault();
        return;
    }

    render() {
        const {errors, firstName, lastName, email, password} = this.state;

        return (
            <div>
                <TextFieldGroup
                    field="firstName"
                    placeholder="firstName"
                    value={firstName}
                    error={errors.firstName}
                    onChange={this.onChange} />
                
                <TextFieldGroup
                    field="lastName"
                    placeholder="lastName"
                    value={lastName}
                    error={errors.lastName}
                    onChange={this.onChange} />

                <TextFieldGroup
                    field="email"
                    placeholder="email"
                    value={email}
                    error={errors.email}
                    type="email"
                    onChange={this.onChange} />

                <TextFieldGroup
                    field="password"
                    placeholder="password"
                    value={password}
                    error={errors.password}
                    onChange={this.onChange} 
                    type="password"/>

            </div>
        );
    }
}

export default Register;