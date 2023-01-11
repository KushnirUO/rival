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
    const [modalActive, setModalActive] = useState();
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
            <Box onClick={() => setModalActive(true)}>
                {blogBtn.map(item => (
                    <IconButton
                        icon={item.icon}
                        label={item.label}
                        key={item.key}
                    />
                ))}
            </Box>

            <Modal active={modalActive} setActive={setModalActive}>
                <ModalCreateCard active={modalActive} setActive={setModalActive}/>
            </Modal>
        </Box>);
};

export default BlogHeader;