import React, {isValidElement, useState} from "react";
import {useDispatch} from "react-redux";
import {addCard} from "../../store/postCardSlice";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {InputLabel, MenuItem, Select, Typography} from "@mui/material";
import {modalClassWrapper, inputModalClass,buttonModal} from "./style";
import Button from "@mui/material/Button";

export const ModalCreateCard = ({active,setActive}) => {
    const dispatch = useDispatch();

    const [inputOne, setInputOne] = useState('');
    const [inputTwo, setInputTwo] = useState('');
    const [inputThree, setInputThree] = useState('');
    const [inputFour, setInputFour] = useState('');

    const handleAction = () => {
            dispatch(addCard({
                title: inputOne,
                subtitle: inputTwo,
                status: inputThree,
                stats: inputFour
            }));
            setActive(false);
        setInputOne('');
        setInputTwo('');
        setInputThree('');
        setInputFour('');
        };

    return (
        <Box style={modalClassWrapper}>
            <h1>Create post</h1>
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
                <Typography variant='h4' sx={{fontWeight:700, paddingBottom:'1rem'}}>Subtitle</Typography>
                <TextField
                    fullWidth
                    style={inputModalClass}
                    name={'subtitle'}
                    type={`text`}
                    value={inputTwo}
                    onChange={(event) => setInputTwo(event.target.value)}
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

                <Typography variant='h4' sx={{fontWeight:700, paddingBottom:'1rem'}}>Stats</Typography>
                <TextField
                    fullWidth
                    style={inputModalClass}
                    name={'stats'}
                    type={`text`}
                    value={inputFour}
                    onChange={(event) => setInputFour(event.target.value)}
                />
            </form>
            <button
                style={buttonModal}
                onClick={handleAction}
                type={`submit`}
            >
                Create
            </button>
        </Box>
    )
}