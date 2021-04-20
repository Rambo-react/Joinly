import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, Form } from 'redux-form';
import { Input } from '../common/FormsControls/FormControls';
import { required } from '../utils/validators/validators';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router';
import s from '../common/FormsControls/FormControls.module.css';

const LoginForm = (props) => {
    return (

        <Form onSubmit={props.handleSubmit}>
            <div>
                <Field name="email" placeholder="Email" component={Input} validate={[required]} />
            </div>
            <div>
                <Field name="password" placeholder="Password" component={Input} validate={[required]} type="password" />
            </div>
            <div>
                <Field name="rememberMe" type="checkbox" component={Input} /> Remember me
                </div>
            {props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>}

            <div>
                <button>Log In</button>
            </div>
        </Form>

    )
}

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        isAuth: state.auth.isAuth
    })

}

export default connect(mapStateToProps, { login })(Login);