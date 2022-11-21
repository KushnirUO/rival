import * as React from 'react';
import { Formik } from "formik";
import {validationsForm} from "./validatorForm";

import './style.scss'
export default function login(){
    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    password: '',
                    confirmPassword: '',
                    email: '',
                }}
                validateOnBlur
                onSubmit={(values, {resetForm}) => {
                    resetForm( '' )
                    document.getElementById("file").value = "";
                }}
                validationSchema={validationsForm}
            >
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, setFieldValue}) => (
                    <div className='form'>
                        <div className="group">
                            <input
                                className={`input`}
                                type={`text`}
                                name={`name`}
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                            />
                            <span className="bar"></span>
                            <label htmlFor={`name`}>Name</label>
                            <div style={{color: '#950740'}}>{touched.name && errors.name &&
                                <p className={'error'}>{errors.name}</p>}</div>
                        </div>
                        <div className="group">
                        <input
                            className={`input`}
                            type={`email`}
                            name={`email`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            required
                        />
                        <span className="bar"></span>
                        <label htmlFor={`email`}>Email</label>
                        <div style={{color: '#950740'}}>{touched.email && errors.email &&
                            <p className={'error'}>{errors.email}</p>}</div>
                    </div>
                        <div className="group">
                            <input
                                className={`input`}
                                type={`password`}
                                name={`password`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                required
                            />
                            <span className="bar"></span>
                            <label htmlFor={`password`}>Password</label>
                            <div style={{color: '#950740'}}>{touched.password && errors.password &&
                                <p className={'error'}>{errors.password}</p>}</div>
                        </div>

                        <button
                            className='btn5'
                            disabled={!isValid || !dirty}
                            onClick={handleSubmit}
                            type={`submit`}
                        >

                        </button>
                    </div>
                )}
            </Formik>
        </div>
    );
};