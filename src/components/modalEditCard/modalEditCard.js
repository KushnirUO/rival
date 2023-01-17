import React, {isValidElement, useState} from "react";
import {useDispatch} from "react-redux";
import {editCard} from "../../store/postCardSlice";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {InputLabel, MenuItem, Select, Typography} from "@mui/material";
import {modalClassWrapper, inputModalClass,buttonModal} from "./style";
import store from "../../store/store";

export const ModalEditCard = ({setOpen, id}) => {
    const dispatch = useDispatch();
    const cardsArr = store.getState().cards.cards;
    let cardTitle;
    let cardStatus;
    const doubled = cardsArr.map(card => {
        if(card.id === id){
            cardTitle =  card.title;
            cardStatus = card.status;
        }
    });
    const [inputOne, setInputOne] = useState(cardTitle);
    const [inputThree, setInputThree] = useState(cardStatus);

    const handleAction = () => {
        console.log(inputOne,inputThree)
            dispatch(editCard({
                id: id,
                title: inputOne,
                status: inputThree,
            }));
        setOpen(false);
        setInputOne('');
        setInputThree('');
    };

    return (
        <Box style={modalClassWrapper}>
            <h1>Edit post</h1>
            <br/>
            <form>
                <Typography variant='h3' sx={{fontWeight:700, paddingBottom:'1rem'}}>Title</Typography>
                <TextField
                    fullWidth
                    style={inputModalClass}
                    name={'title'}
                    type={`text`}
                    value={inputOne}
                    onChange={(event) => setInputOne(event.target.value)}
                    required
                />
                <Typography variant='h4' sx={{fontWeight:700, paddingBottom:'1rem'}}>Status</Typography>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={inputThree}
                    label="Age"
                    onChange={(event) => setInputThree(event.target.value)}
                >
                    <MenuItem value={'Published'}>Published</MenuItem>
                    <MenuItem value={'Scheduled'}>Scheduled</MenuItem>
                    <MenuItem value={'Draft'}>Draft</MenuItem>
                </Select>
                <Box sx={{ paddingBottom:'1rem'}}></Box>

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