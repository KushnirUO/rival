import * as React from 'react';
import {Typography, Box} from "@mui/material";
import {NavLink} from "react-router-dom";
import {useStyles} from './style'

export default function ButtonIcon(props) {
    const {label, icon} = props;
    const classes = useStyles();
    return (
        <NavLink className={classes.iconButton} >
            <Box>{icon}</Box>
            <Box className={classes.btnText}>
                <Typography
                    variant='h5'
                    sx={{fontWeight:700}}>
                    {label}
                </Typography>
            </Box>
        </NavLink>
    );
};