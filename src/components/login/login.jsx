import * as React from 'react';
import {Formik} from "formik";
import {validationsForm} from "./validatorForm";
import Box from "@mui/material/Box";
import {BoxGroup, inputClass,buttonSubmit} from './style'
import InputLabel from "../formInfo/input/inputLabel";
import InputCustom from "../formInfo/input/index";

export default function login() {
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
                        <Box style={BoxGroup}>
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
                        <Box style={BoxGroup}>
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
                        <Box style={BoxGroup}>
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
                        <Box
                            style={buttonSubmit}
                            disabled={!isValid}
                            onClick={handleSubmit}
                            type={`submit`}
                        >
                            Login
                        </Box>
                    </Box>
                )}
            </Formik>
        </Box>
    );
};