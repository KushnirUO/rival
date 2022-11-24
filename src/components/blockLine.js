import React from 'react';
import {makeStyles} from "@mui/styles";
import {Box} from "@mui/material";
const useStyles = makeStyles((theme) => ({
    blockLine:{
        height:'0.1rem',
        marginBottom:'3.1rem',
        background:theme.palette.secondary.lightGray1,
    }
}))
const BlockLine = () => {
    const classes = useStyles();
    return (
        <Box className={classes.blockLine}></Box>
    );
};

export default BlockLine;