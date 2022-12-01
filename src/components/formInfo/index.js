import React from 'react';
import Box from "@mui/material/Box";
import {useStyles} from './style'
import Login from "../login/login";
import {Loginn} from "../form/login";

const FormAuth = () => {
    const classes = useStyles();
    return (
        <Box className={classes.formWrapper}>
            <Loginn/>
        </Box>
    );
};

export default FormAuth;