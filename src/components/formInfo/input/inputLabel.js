import React from 'react';
import {Box, Typography} from "@mui/material";
import {useStyles} from './style'
import {Mail, User, Lock} from "../../../assets/iconJs";

const InputLabel = ({label, htmlFor}) => {
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
        <Box className={classes.inputLabelWrapper}>
            {icon}
            <Typography variant='h3' sx={{color:'#2A4365'}}>{label}</Typography>
        </Box>
    );
};

export default InputLabel;