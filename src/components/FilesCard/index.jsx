import React from 'react';
import {Box, Typography} from "@mui/material";
import {cardWrapper,cardImage} from "./style";
import {Burger} from "../../assets/iconJs";

export const FilesCard = (props) => {
    const { download_url, author} = props;

    return (
        <Box style={cardWrapper}>
            <Box style={cardWrapper}>
                <img style={cardImage} src={download_url}/>
                <Typography variant='h3'>{author}</Typography>
                <Typography variant='h3'>Uploaded 2 days ago</Typography>
            </Box>
            <Burger/>
        </Box>
    )

}