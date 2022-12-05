import React from 'react';
import {Box} from "@mui/material";
import IconButton from "../buttonIcon";
import TextHeading from "../textHeading";
import {blogBtn} from "./blockHeader.mock";
import {useStyles} from './style'

const BlogHeader = () => {
    const classes = useStyles();

    return (<Box className={classes.blockWrapper}>
            <Box className={classes.blogWrapper}>
                <Box className={classes.titlePadding}><TextHeading label='Title'/></Box>
                <Box className={classes.statusPadding}><TextHeading label='Status'/></Box>
                <Box className={classes.statsPadding}><TextHeading label='Stats'/></Box>
            </Box>
            {blogBtn.map(item => (<IconButton icon={item.icon} label={item.label}/>))}
        </Box>);
};

export default BlogHeader;