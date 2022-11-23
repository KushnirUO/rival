import React from 'react';
import {Box, Typography} from '@mui/material';
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    pro: {
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: theme.shape.borderRadius,
        background: theme.palette.info.main,
        padding:  theme.spacing(0.7,1.1,0.7,1.4),
        color:theme.palette.secondary.main,
    },
}))

const PlanLabel = (variant) => {
    const classes = useStyles();
    return (
        <Box className={classes.pro}>
            <Typography variant='h6'>Pro plan</Typography>
        </Box>
    );
};

export default PlanLabel;