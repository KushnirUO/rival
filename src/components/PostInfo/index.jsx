import React from 'react';
import {Box} from "@mui/material";
import BlogHeader from "../BlockHeader";
import BlockLine from "../BlockLine";
import {PaginationBlock} from "../PaginationBlock";
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