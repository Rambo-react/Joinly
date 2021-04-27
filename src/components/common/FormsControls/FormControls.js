import React from 'react';
import { Field } from 'redux-form';
import s from "./FormControls.module.css"


const FormControl = ({ input, meta: {touched, error}, ...props }) => {
    const hasError = touched && error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {props.children}
            </div>
            { hasError && <span>{error} </span>}
        </div>
    )

}
//             ... - это деструктуризация объекта(разбиение)

//{input, meta, ...props} -это всё что рпишло в пропсы, разбиваем на , инпут, мету и остальное остваляем в пропсах 

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;

    return (
        <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
    )
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props}><input {...input} {...restProps} /></FormControl>
    )
}

export const createField = (name, placeholder, component, validates, props={}, text="") => {
    return (
        <div>
            <Field name={name} placeholder={placeholder} component={component} validate={validates} {...props} /> {text}
        </div>
    )
}