import React from 'react';
import Box from "@mui/material/Box";
import {useStyles} from './style'
import FormAuth from "../FormAuth";
import SiteName from "../SiteName";

const ContainerAuth = () => {
    const classes = useStyles();
    return (
        <Box className={classes.authWrapper}>
            <SiteName/>
            <FormAuth/>
        </Box>
    );
};

export default ContainerAuth;