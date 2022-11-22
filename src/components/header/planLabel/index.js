import React from 'react';
import {Box} from '@mui/material';
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    pro: {
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: "5px",
        background: "#D53F8C",
        padding: '0.7rem 1.1rem 0.7rem 1.4rem',
        font: "700 1.5rem / 1.8rem 'Roboto',sans-serif",
        color:" #FFFCFE",
    },
}))

const PlanLabel = (variant) => {
    const classes = useStyles();
    return (
        <Box className={classes.pro}>
            Pro plan
        </Box>
    );
};

export default PlanLabel;