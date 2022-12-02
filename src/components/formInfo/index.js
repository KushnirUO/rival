import React from 'react';
import Box from "@mui/material/Box";
import {useStyles} from './style'
import {Formik, Loginn} from "../formik";
import RegisterForm from "../form/register";
import LoginForm from "../form/login";


const FormAuth = () => {
    const classes = useStyles();
    return (
        <Box className={classes.formWrapper}>
            <Formik/>
        </Box>
    );
};

export default FormAuth;