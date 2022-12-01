import React, {useState} from 'react';
import {Formik} from "formik";
import {validationsForm} from "./validatorForm";
import Box from "@mui/material/Box";
import {BoxGroup, inputClass, buttonSubmit, buttonReg, buttonForgot} from './style'
import InputLabelCustom from "../formInfo/input/inputLabel";
import {FormControl, Input, FormHelperText, InputLabel, FormGroup, Link} from "@mui/material";
import {NavLink} from "react-router-dom";

export default function login() {
    const handleCheck = ({email, password}) => {
        const userInfo = JSON.parse(get_cookie('user'));
        if (userInfo.email === email && userInfo.password === password) {
            window.location = '/';
            document.cookie = 'auth=true';
        }
    }

    function get_cookie(cookie_name) {
        var results = document.cookie.match('(^|;) ?' + cookie_name + '=([^;]*)(;|$)');

        if (results)
            return (unescape(results[2]));
        else
            return null;
    }

    let fullName = 'block';
    let forgot = 'visible';
    let regAcc = 'block';
    let url = window.location.pathname;
    switch (url) {
        case '/login':
            fullName = 'none';
            break;
        case '/register':
            forgot = 'hidden';
            regAcc = 'none'
            break;
        default:
    }
    return (
        <Box>
            <Formik
                initialValues={{
                    name: '',
                    password: '',
                    email: '',
                }}
                validateOnBlur
                onSubmit={(values, {resetForm}) => {
                    if (window.location.pathname === '/register') {
                        document.cookie = 'user=' + JSON.stringify(values);
                        document.cookie = 'auth=false';
                        window.location = '/login';
                    } else handleCheck({values});
                    resetForm('')
                }}
                validationSchema={validationsForm}
            >
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, setFieldValue}) => (
                    <Box>
                        <FormControl className='form'>
                            <FormGroup style={{display: `${fullName}`}}>
                                <InputLabelCustom htmlFor="my-input" label='Full name'></InputLabelCustom>
                                <Input id="my-input"
                                       aria-describedby="my-helper-text"
                                       type={`text`}
                                       name={`name`}
                                       value={values.name}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       error={touched.name && errors.name}
                                />
                                <FormHelperText id="my-helper-text">{touched.name && errors.name &&
                                    <Box>{errors.name}</Box>}</FormHelperText>
                            </FormGroup>
                            <FormGroup>
                                <InputLabelCustom htmlFor="my-input1" label='Email address'></InputLabelCustom>
                                <Input id="my-input1"
                                            aria-describedby="my-helper-text"
                                            type={`email`}
                                            name={`email`}
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.email && errors.email}
                                />
                                <FormHelperText id="my-helper-text">{touched.email && errors.email &&
                                    <Box>{errors.email}</Box>}</FormHelperText>
                            </FormGroup>
                            <FormGroup>
                                <InputLabelCustom htmlFor="my-input2" label='Password'></InputLabelCustom>
                                <Input id="my-input2"
                                       aria-describedby="my-helper-text"
                                       type={`password`}
                                       name={`password`}
                                       value={values.password}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       error={touched.password && errors.password}
                                />
                                <FormHelperText id="my-helper-text">{touched.password && errors.password &&
                                    <Box>{errors.password}</Box>}</FormHelperText>
                            </FormGroup>
                            <Box style={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
                                <Box style={{visibility: `${forgot}`}}>
                                    <Link style={buttonForgot} href='#'>Forgot password?</Link>
                                </Box>
                                <Box style={{display: `${regAcc}`, width: '46%',padding: '2.3rem 0 2.3rem'}}>
                                    <Box
                                        style={buttonSubmit}
                                        disabled={!dirty}
                                        onClick={handleSubmit}
                                        type={`submit`}
                                    >
                                        Login
                                    </Box>
                                </Box>
                                <Box style={{display: `${fullName}`, width: '46%',paddingTop: '1.8rem'}}>
                                    <Box
                                        style={buttonSubmit}
                                        disabled={!isValid}
                                        onClick={handleSubmit}
                                        type={`submit`}
                                    >
                                        Register
                                    </Box>
                                </Box>
                            </Box>
                            <Box style={{display: `${regAcc}`, paddingTop:'2rem'}}>
                                <NavLink style={buttonReg} to='/register'>Don’t have & account?</NavLink>
                            </Box>
                        </FormControl>
                    </Box>
                )}
            </Formik>
        </Box>
    );
};
