import React from 'react';
import { useFormik } from 'formik';
import {validationsForm} from "../../login/validatorForm";
import {handleCheck} from "./handleCheck";

export const Form = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            password: '',
            email: '',
        },
        validationSchema: validationsForm,
        onSubmit: (values,{resetForm}) => {
            if (window.location.pathname === '/register') {
                document.cookie = 'user=' + JSON.stringify(values);
                document.cookie = 'auth=false';
                window.location = '/login';
            } else handleCheck({values});
            resetForm('')
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Login/>
                <Register/>
            </form>
        </div>
    );
};

