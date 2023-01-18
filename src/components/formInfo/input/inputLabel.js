import React from 'react';
import {Typography} from "@mui/material";
import {useStyles} from './style'
import {Mail, User, Lock} from "../../../assets/iconJs";
import {InputLabel} from "@mui/material";

const InputLabelCustom = ({label}) => {
    const classes = useStyles();
    let icon = '';
    switch (label) {
        case 'Email address':
            icon = <Mail/>;
            break;
        case 'Password':
            icon =  <Lock/>;
            break;
        case 'Full name':
            icon =  <User/>;
            break;
        default:
            icon = <Mail/>;
    }
    return (
        <InputLabel
            className={classes.inputLabelWrapper}
            disableAnimation={true}
            size="normal"
            variant='outlined'>
            {icon}
            <Typography
                variant='h3'
                sx={{color:'#2A4365'}}>
                {label}
            </Typography>
        </InputLabel>
    );
};

export default InputLabelCustom;