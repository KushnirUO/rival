import React from 'react';
import {Box} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Typography} from "@mui/material";
import LabelStatus from "./labelStatus";
import TitleItem from "./titleItem";
import StatsItem from "./statsItem";
import {HomeIcon} from "../../../assets/iconJs";
const useStyles = makeStyles((theme) => ({
    postWrapper:{
        display:"flex",
        alignItems:"center",
        background: theme.palette.secondary.lightGray,
        padding:theme.spacing(3,5.4,2.9,3),
        gap:'8rem',
    },
    statsPadd:{
        padding:theme.spacing(0,5.8,0,11.7),
    }
}))
const PostItem = (props) => {
    const {title, subtitle, status, stats} = props;
    const classes = useStyles();
    return (
        <Box className={classes.postWrapper}>
            <TitleItem title={title} subtitle={subtitle}/>
            <LabelStatus variant={status}/>
            <Box className={classes.statsPadd}><StatsItem count={stats}/></Box>
        </Box>
    );
};

export default PostItem;