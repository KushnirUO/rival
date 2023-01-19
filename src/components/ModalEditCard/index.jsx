import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {editCard} from "../../store/postCardSlice";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {MenuItem, Select, Typography} from "@mui/material";
import {modalClassWrapper, inputModalClass, buttonModal} from "./style";
import store from "../../store/store";

export const ModalEditCard = ({setOpen, id}) => {
    const dispatch = useDispatch();
    const statsArr = ["Published", "Scheduled", "Draft" ];
    const cardsArr = store.getState().cards.cards;
    let cardTitle;
    let cardStatus;
    const doubled = cardsArr.map(card => {
        if (card.id === id) {
            cardTitle = card.title;
            cardStatus = card.status;
        }
    });
    const [title, setTitle] = useState(cardTitle);
    const [status, setStatus] = useState(cardStatus);

    const handleAction = () => {
        dispatch(editCard({
            id: id,
            title: title,
            status: status,
        }));
        setOpen(false);
        setTitle('');
        setStatus('');
    };

    return (
        <Box style={modalClassWrapper}>
            <h1>Edit post</h1>
            <br/>
            <form>
                <Typography variant='h3' sx={{fontWeight: 700, paddingBottom: '1rem'}}>Title</Typography>
                <TextField
                    fullWidth
                    style={inputModalClass}
                    name={'title'}
                    type={`text`}
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                />
                <Typography variant='h4' sx={{fontWeight: 700, paddingBottom: '1rem'}}>Status</Typography>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
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
            <button
                style={buttonModal}
                onClick={handleAction}
                type={`submit`}
            >
                Edit
            </button>
        </Box>
    )
}