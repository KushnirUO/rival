import React from 'react';
import {useFormik} from 'formik';
import {ValidationShema} from "./validationShema";
import {handleCheck} from "./handleCheck";
import LoginForm from '../form/LoginForm'
import RegisterForm from '../form/RegisterForm'
import {useDispatch} from "react-redux";
import {Box} from "@mui/material";
import {handleActionReg, handleActionLogin} from "./handleAction"
export const Formik = () => {
    const dispatch = useDispatch();
    let url = window.location.pathname;
    let valid = '';
    let form='';

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
            if (window.location.pathname === '/register') {
                handleActionReg(dispatch, values);
            }
            else {
                handleActionLogin(dispatch, values);
            }
            handleCheck(values);
            resetForm('')
        },
    });
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
        <Box>
            <form onSubmit={formik.handleSubmit}>
                {form}
            </form>
        </Box>
    );
};

