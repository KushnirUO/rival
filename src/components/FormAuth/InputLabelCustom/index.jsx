import React from 'react';
import {Typography} from "@mui/material";
import {useStyles} from './style'
import {InputLabel} from "@mui/material";

const InputLabelCustom = ({label, icon}) => {
    const classes = useStyles();
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