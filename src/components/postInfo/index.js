import React from 'react';
import {Box} from "@mui/material";
import BlogHeader from "../blockHeader/blogHeader";
import BlockLine from "../blockLine";
import PaginationBlock from "../pagination";
import {useStyles} from './postInfo.style'

const PostInfo = () => {
    const classes = useStyles();
    return (
        <Box className={classes.postInfoWrapper}>
            <BlogHeader/>
            <BlockLine/>
            <PaginationBlock/>
        </Box>
    );
};

export default PostInfo;