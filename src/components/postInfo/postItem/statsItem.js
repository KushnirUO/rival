import React from 'react';
import {Box} from "@mui/material";
import {Typography} from "@mui/material";
import {ArrowUp} from "../../../assets/iconJs";
import {useStyles} from './statsItem.style'

const StatsItem = (props) => {
    const classes = useStyles();
    let icon;
    if(props.count > 0)icon = <ArrowUp/>;
    return (
        <Box className={classes.statsWrapper}>
            <Typography className={classes.countText} variant='h3' sx={{fontWeight:700}}>{props.count}</Typography>
            <Typography className={classes.viewsText} variant='subtitle1'>Views</Typography>
            <Box>{icon}</Box>
        </Box>
    );
};

export default StatsItem;