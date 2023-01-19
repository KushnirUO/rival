import React from 'react';
import {Typography} from '@mui/material';
import {NavLink} from "react-router-dom";
import {useStyles} from './style'

const PlanLabel = (variant) => {
    const classes = useStyles();
    return (
        <NavLink to='/plan' className={classes.pro}>
            <Typography variant='h6'>Pro plan</Typography>
        </NavLink>
    );
};

export default PlanLabel;