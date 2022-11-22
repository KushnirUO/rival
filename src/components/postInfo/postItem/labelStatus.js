import React from 'react';
import Box from "@mui/material/Box";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    published: {
        border: "2px solid #9AE6B4",
        borderRadius: "50px",
        color: '#9AE6B4',
        font: "400 1.6rem / 1.9rem 'Roboto',sans-serif",
        width: '12rem',
        padding: '0.7rem 0 0.6rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
    },
    draft: {
        border: "2px solid #FC8181",
        borderRadius: "50px",
        color: '#FC8181',
        font: "400 1.6rem / 1.9rem 'Roboto',sans-serif",
        width: '12rem',
        padding: '0.7rem 0 0.6rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
    },
    scheduled: {
        border: "2px solid #F6AD55",
        borderRadius: "50px",
        color: '#F6AD55',
        font: "400 1.6rem / 1.9rem 'Roboto',sans-serif",
        width: '12rem',
        padding: '0.7rem 0 0.6rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
    }
}))
const LabelStatus = (variant, label) => {
    const classes = useStyles();

    return (
        <Box className={classes.scheduled}>erer</Box>
    );
};

export default LabelStatus;