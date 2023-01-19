import * as React from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';
import {removeCard} from "../../store/postCardSlice";
import {useDispatch} from 'react-redux';
import {Burger} from "../../assets/iconJs";
import Modal from "../Modals";
import {ModalEditCard} from "../ModalEditCard";
import {StyledMenu} from "./style"
import Box from "@mui/material/Box";

export default function BurgerMenuCard({id}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [opens, setOpens] = React.useState(false);
    const dispatch = useDispatch();
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (<Box>
            <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<Burger/>}
                style={{"backgroundColor": 'transparent', "padding": '0'}}
            >
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem disableRipple>
                    <Modal
                        open={opens}
                        setOpen={setOpens}
                        title={'Edit'} id={id}>
                        <ModalEditCard
                            setOpen={setOpens}
                            id={id}
                        />
                    </Modal>
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                     <Box
                         onClick={() => dispatch(removeCard({id}))}
                         style={{width: '100%'}}>
                        <DeleteIcon/>
                        Delete
                    </Box>
                </MenuItem>
            </StyledMenu>
        </Box>
    );
}