import React from 'react';
import {Formik} from "formik";
import {validationsForm} from "./validatorForm";
import Box from "@mui/material/Box";
import {inputClass, buttonSubmit, buttonReg, buttonForgot} from './style'
import InputLabel from "../formInfo/input/inputLabel";
import InputCustom from "../formInfo/input/index";
import JButton from "../button/button";
import {NavLink} from "react-router-dom";
import {Link} from "@mui/material";

export default function login({variant}) {
    let fullName = 'block';
    let forgot = 'visible';
    let regAcc = 'block';
    console.log(document.cookie)
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
                    resetForm('')
                }}
                validationSchema={validationsForm}
            >
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, setFieldValue}) => (
                    <Box className='form'>
                        <Box style={{display: `${fullName}`}}>
                            <InputLabel label='Full name'/>
                            <InputCustom style={inputClass}
                                         type={`text`}
                                         name={`name`}
                                         value={values.name}
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                            />

                            <div style={{color: '#950740'}}>{touched.name && errors.name &&
                                <p className={'error'}>{errors.name}</p>}</div>
                        </Box>
                        <Box>
                            <InputLabel label='Email address'/>
                            <InputCustom style={inputClass}
                                         type={`email`}
                                         name={`email`}
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         value={values.email}
                            />
                            <Box style={{color: '#950740'}}>{touched.email && errors.email &&
                                <p className={'error'}>{errors.email}</p>}
                            </Box>
                        </Box>
                        <Box>
                            <InputLabel label='Password'/>
                            <InputCustom style={inputClass}
                                         type={`password`}
                                         name={`password`}
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         value={values.password}
                            />
                            <Box style={{color: '#950740'}}>{touched.password && errors.password &&
                                <p className={'error'}>{errors.password}</p>}</Box>
                        </Box>
                        <Box style={{display: 'flex'}}>
                            <Box style={{visibility: `${forgot}`}}>
                                <Link style={buttonForgot} href='#'>Forgot password?</Link>
                            </Box>
                            <Box
                                style={{display:`${regAcc}`}}
                                style={buttonSubmit}
                                disabled={!dirty}
                                onClick={handleSubmit}
                                type={`submit`}
                            >
                                Login
                            </Box>
                            <Box
                                style={{display:`${fullName}`}}
                                style={buttonSubmit}
                                disabled={!isValid}
                                onClick={handleSubmit}
                                type={`submit`}
                            >
                                Register
                            </Box>

                        </Box>

                        <Box style={{display: `${regAcc}`}}>
                            <NavLink style={buttonReg} to='/register'>Don’t have & account?</NavLink>
                        </Box>

                    </Box>
                )}
            </Formik>
        </Box>
    );
};