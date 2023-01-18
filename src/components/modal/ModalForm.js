import React from "react"
import {Modal, Button, Box} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {style, btn__style} from "./style"

export default function Modals({children, open, setOpen, title, id}) {
    let variantRight;
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    switch (title) {
        case 'Add post':
            variantRight = <Button
                onClick={handleOpen}
                sx={btn__style}>
                Add post
            </Button>;
            break;
        case 'Edit':
            variantRight = <span
                onClick={handleOpen}
                style={{width: '100%'}}>
                <EditIcon/>
                Edit
            </span>;
            break;
    }
    return (
        <Box>
            {variantRight}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {children}
                </Box>
            </Modal>
        </Box>
    )
}