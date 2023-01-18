import React from 'react';
import {Box} from "@mui/material";
import LabelStatus from "./labelStatus";
import TitleItem from "./titleItem";
import StatsItem from "./statsItem";
import {useStyles} from './index.style'
import CustomizedMenus from "../../burgerMenuCard";

const PostItem = (props) => {
    const {id, title, subtitle, status, stats} = props;
    const classes = useStyles();

    return (
        <Box className={classes.postWrapper}>
            <Box className={classes.itemWrapper}>
                <TitleItem
                    title={title}
                    subtitle={subtitle}/>
                <LabelStatus variant={status}/>
                <Box className={classes.statsPadd}>
                    <StatsItem count={stats}/>
                </Box>
            </Box>
            <CustomizedMenus id={id}/>
        </Box>
    );
};

export default PostItem;