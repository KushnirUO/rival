import React from 'react';
import Box from "@mui/material/Box";
import {useStyles} from './style'
import {Formik} from "../formik";

const FormAuth = () => {
    const classes = useStyles();
    return (
        <Box className={classes.formWrapper}>
            <Formik/>
        </Box>
    );
};

export default FormAuth;