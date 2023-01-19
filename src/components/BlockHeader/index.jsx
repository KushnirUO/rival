import React from 'react';
import {Box} from "@mui/material";
import TextHeading from "../TextHeading";
import {useStyles} from './style'
import Modal from "../Modals";
import {ModalCreateCard} from "../ModalCreateCard";

const BlockHeader = () => {
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

export default BlockHeader;