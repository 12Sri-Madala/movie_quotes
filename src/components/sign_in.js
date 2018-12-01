import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { userSignIn } from '../actions';
import Input from './input';

class SignIn extends Component {
    handleSignIn = (values) => {
        console.log('Sign in values: ', values)

        this.props.signIn(values);
    }

    render(){
        const { handleSubmit, signInError } = this.props

        return(
            <div>
                <h1 className="center">Sign In</h1>

                <form onSubmit={handleSubmit(this.handleSignIn)}>
                    <div className="row">
                        <Field name="email" label="Emaili" component={Input} />
                    </div>
                    <div className="row">
                        <Field name="password" label="Password" type="password" component={Input} />
                    </div>
                    <div className="row">
                        <div className="col s12 right-align">
                            <button className="btn red darken-2">Sign In</button>
                            <p className="red-text text-darken-2">{signInError}</p>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

function validate(values){
    const { email, password } = values;
    const errors = {};

    if(!email){
        errors.email = 'Please enter your email';
    }

    if(!password){
        errors.password = 'Please enter your password'
    }

    return errors;
}

SignIn = reduxForm({
    form: 'sign_in',
    validate
})(SignIn);

function mapStateToProps(state){
    return {
        signInError: state.user.signInError
    }
}

export default connect(mapStateToProps, {
    signIn: userSignIn
})(SignIn);

