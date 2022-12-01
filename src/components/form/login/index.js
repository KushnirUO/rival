import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {validationsForm} from "../../login/validatorForm";
import {handleCheck} from "./handleCheck";

export const Loginn = () => {

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
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};

