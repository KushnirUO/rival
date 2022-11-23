import React from 'react';
import {Box} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Typography} from "@mui/material";
const useStyles = makeStyles((theme) => ({
    textWrapper:{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.4rem',
    },
    titleText:{
        color:theme.palette.secondary.darkBlue,
    },
    subtitleText:{
        color:theme.palette.secondary.gray,
    },
}))
const TitleItem = (props) => {
    const {title, subtitle} = props;
    const classes = useStyles();
    return (
        <Box className={classes.textWrapper}>
            <Typography className={classes.titleText} sx={{fontWeight: 700}} variant='h4'>{title}</Typography>
            <Typography className={classes.subtitleText} variant='subtitle1'>{subtitle}</Typography>
        </Box>
    );
};

export default TitleItem;