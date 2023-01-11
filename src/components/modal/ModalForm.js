import React from "react"
import "./style.css"
import {Modal, Button, Box, Typography} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export default function Modals({children}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        // <div className={active ? "modal active1" : "modal"} onClick={()=> setActive(false)}>
        //     <div className={active ? "modal_content active1" : "modal_content"} onClick={e => e.stopPropagation()}>
        //         {children}
        //     </div>
        // </div>
        <Box>
            <Button onClick={handleOpen}>Open modal</Button>
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