import React from 'react';
import {Box} from "@mui/material";
import TextHeading from "../../TextHeading";
import {useStyles} from "./style";

const  CreateHeader = () => {
    const classes = useStyles();
    return (
        <Box className={classes.blockWrapper}>
            <Box className={classes.blogWrapper}>
                <Box className={classes.titlePadding}>
                    <TextHeading label='Page title'/>
                </Box>
                <Box className={classes.statusPadding}>
                    <TextHeading label='Created'/>
                </Box>
                <Box className={classes.statsPadding}>
                    <TextHeading label='Status'/>
                </Box>
                <Box className={classes.statsPadding}>
                    <TextHeading label='Author'/>
                </Box>
            </Box>
        </Box>
    );
};

export default  CreateHeader;