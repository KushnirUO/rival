import React from 'react';
import {Box} from "@mui/material";
import {useStyles} from './style'

const BlockLine = () => {
    const classes = useStyles();
    return (
        <Box className={classes.blockLine}></Box>
    );
};

export default BlockLine;