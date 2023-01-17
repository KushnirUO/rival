import React, {useState} from 'react';
import {Box} from "@mui/material";
import IconButton from "../buttonIcon";
import TextHeading from "../textHeading";
import {blogBtn} from "./blockHeader.mock";
import {useStyles} from './style'
import Modal from "../modal/ModalForm";
import {ModalCreateCard} from "../modalCreateCard/modalCreateCard";

const BlogHeader = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    return (
        <Box className={classes.blockWrapper}>
            <Box className={classes.blogWrapper}>
                <Box className={classes.titlePadding}>
                    <TextHeading label='Title'/>
                </Box>
                <Box className={classes.statusPadding}>
                    <TextHeading label='Status'/>
                </Box>
                <Box className={classes.statsPadding}>
                    <TextHeading label='Stats'/>
                </Box>
            </Box>

            <Modal open={open} setOpen={setOpen} title={'Add post'}>
                <ModalCreateCard setOpen={setOpen}/>
            </Modal>
        </Box>);
};

export default BlogHeader;