import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addCard} from "../../store/postCardSlice";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {MenuItem, Select, Typography} from "@mui/material";
import {modalClassWrapper, inputModalClass, buttonModal} from "./style";
import Button from "@mui/material/Button";

export const ModalCreateCard = ({setOpen}) => {
    const dispatch = useDispatch();
    const statsArr = ["Published", "Scheduled", "Draft" ];
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("");

    const handleAction = () => {
        dispatch(addCard({
            title: title,
            status: status,
        }));
        setOpen(false);
        setTitle('');
        setStatus('');
    };

    return (
        <Box style={modalClassWrapper}>
            <Typography
                variant='h1'
                sx={{paddingBottom: '1rem'}}>
                Create post
            </Typography>
            <form>
                <Typography
                    variant='h3'
                    sx={{
                        fontWeight: 700,
                        paddingBottom: '1rem'
                    }}>
                    Title
                </Typography>
                <TextField
                    fullWidth
                    style={inputModalClass}
                    name={'title'}
                    type={`text`}
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                />
                <Typography
                    variant='h4'
                    sx={{fontWeight: 700, paddingBottom: '1rem'}}>
                    Status
                </Typography>
                <Select
                    labelId="simple-select-label"
                    id="simple-select"
                    value={status}
                    label="Age"
                    onChange={(event) => setStatus(event.target.value)}
                >
                    {statsArr.map(stats => {
                        return(
                            <MenuItem value={stats}>{stats}</MenuItem>
                        )
                    })}
                </Select>
                <Box sx={{paddingBottom: '1rem'}}></Box>
            </form>
            <Button
                style={buttonModal}
                onClick={handleAction}
                type={`submit`}
            >
                Create
            </Button>
        </Box>
    )
}