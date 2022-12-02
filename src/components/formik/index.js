import React from 'react';
import {useFormik} from 'formik';
import {validationsForm} from "./validatorForm";
import {handleCheck} from "./handleCheck";
import LoginForm from '../form/login/index'
import RegisterForm from '../form/register/index'

export const Formik = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            password: '',
            email: '',
        },
        validationSchema: validationsForm,
        onSubmit: (values, {resetForm}) => {
            if (window.location.pathname === '/register') {
                document.cookie = 'user=' + JSON.stringify(values);
                document.cookie = 'auth=false';
                window.location = '/login';
            } else handleCheck(values);
            resetForm('')
        },
    });
    let url = window.location.pathname;
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

