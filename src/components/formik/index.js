import React from 'react';
import {useFormik} from 'formik';
import {ValidationShema} from "./ValidationShema";
import {handleCheck} from "./handleCheck";
import LoginForm from '../form/login/index'
import RegisterForm from '../form/register/index'

export const Formik = () => {
    let url = window.location.pathname;
    let valid = '';
    switch (url) {
        case '/login':
            valid = false;
            break;
        case '/register':
            valid = true;
            break;
        default:
    }
    const formik = useFormik({
        initialValues: {
            name: '',
            password: '',
            email: '',
            validForm: valid
        },
        validationSchema: ValidationShema,
        onSubmit: (values, {resetForm}) => {
            handleCheck(values);
            resetForm('')
        },
    });
    let form='';
    switch (url) {
        case '/login':
            form = <LoginForm formik={formik}/>;
            break;
        case '/register':
            form = <RegisterForm formik={formik}/>;
            break;
        default:
    }
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                {form}
            </form>
        </div>
    );
};

