import React from 'react';
import {Box} from "@mui/material";
import BlogHeader from "../BlockHeader";
import BlockLine from "../BlockLine";
import {PaginationBlock} from "../PaginationBlock";
import {useStyles} from './postInfo.style'
import {useSelector} from "react-redux";

const PostInfo = () => {
    const classes = useStyles();
    const cards = useSelector(state => state.cards.cards);

    return (
        <Box className={classes.postInfoWrapper}>
            <BlogHeader/>
            <BlockLine/>
            <PaginationBlock cards={cards} link="blog"/>
        </Box>
    );
};

export default PostInfo;