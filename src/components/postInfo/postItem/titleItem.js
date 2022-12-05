import React from 'react';
import {Box} from "@mui/material";
import {Typography} from "@mui/material";
import {useStyles} from './titleItem.style'

const TitleItem = (props) => {
    const {title, subtitle} = props;
    const classes = useStyles();
    return (
        <Box className={classes.textWrapper}>
            <Typography
                className={classes.titleText}
                sx={{fontWeight: 700}}
                variant='h4'>
                {title}
            </Typography>
            <Typography
                className={classes.subtitleText}
                variant='subtitle1'>
                {subtitle}
            </Typography>
        </Box>
    );
};

export default TitleItem;