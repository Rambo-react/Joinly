import React from 'react';
import { Field, reduxForm, Form } from 'redux-form';
import { Input } from '../common/Preloader/FormsControls/FormControls';
import { required } from '../utils/validators/validators';

const LoginForm = (props) => {
    return (

        <Form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"login"} placeholder={"Login"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field name={"password"} placeholder={"Password"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field name={"rememberMe"} type={"checkbox"} component={Input}/> Remember me
                </div>
            <div>
                <button>Log In</button>
            </div>
        </Form>

    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


export default Login;