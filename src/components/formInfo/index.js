import React from 'react';
import Box from "@mui/material/Box";
import {FormControl, FormGroup, FormHelperText, Input, Link, Typography} from "@mui/material";
import {useStyles} from './style'
import Login from "../login/login";
import InputLabelCustom from "./input/inputLabel";
import {buttonForgot, buttonReg, buttonSubmit} from "../login/style";
import {NavLink} from "react-router-dom";

const FormAuth = ({variant}) => {
    const classes = useStyles();
    // let generateInput = [<]
    // switch (variant) {
    //     case 'login':
    //
    //         break;
    //     case 'register':
    //         clasName = classes.draft;
    //         break;
    //     default:
    //         clasName = classes.draft;
    // }

    return (
        <Box className={classes.formWrapper}>
            <Login/>
        </Box>
    );
};

export default FormAuth;