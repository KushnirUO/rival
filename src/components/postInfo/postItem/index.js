import React from 'react';
import {Box, Link} from "@mui/material";
import LabelStatus from "./labelStatus";
import TitleItem from "./titleItem";
import StatsItem from "./statsItem";
import {Burger} from "../../../assets/iconJs";
import {useStyles} from './index.style'

const PostItem = (props) => {
    const {title, subtitle, status, stats} = props;
    const classes = useStyles();
    return (
        <Box className={classes.postWrapper}>
            <Box className={classes.itemWrapper}>
                <TitleItem title={title} subtitle={subtitle}/>
                <LabelStatus variant={status}/>
                <Box className={classes.statsPadd}><StatsItem count={stats}/></Box>
            </Box>
            <Link href='#'><Burger/></Link>
        </Box>
    );
};

export default PostItem;