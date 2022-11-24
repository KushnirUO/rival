import React from 'react';
import {makeStyles} from "@mui/styles";
import {Box} from "@mui/material";
import IconButton from "../buttonIcon";
import TextHeading from "../textHeading";
import {blogHeadings, blogBtn} from "./blockHeader.mock";

const useStyles = makeStyles((theme) => ({
    blockWrapper: {
        display: "flex",
        alignItems: 'center',
        padding: theme.spacing(3.3,0,1.7,0),
    },
    titlePadding:{paddingRight:'39.3rem'},
    statusPadding:{paddingRight:'26.2rem'},
    statsPadding:{paddingRight:'14.6rem'},
}))
const colorPen = {
    filter: "brightness(17)",
}

const BlogHeader = () => {
    const classes = useStyles();

    return (
        <Box className={classes.blockWrapper}>
            <Box className={classes.titlePadding}><TextHeading label='Title'/></Box>
            <Box className={classes.statusPadding}><TextHeading label='Status'/></Box>
            <Box className={classes.statsPadding}><TextHeading label='Stats'/></Box>
            {blogBtn.map(item => (
                <IconButton icon={item.icon} label={item.label}/>
            ))}
        </Box>
    );
};

export default BlogHeader;