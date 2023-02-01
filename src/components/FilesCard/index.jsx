import React from 'react';
import {Box, Typography} from "@mui/material";
import {cardWrapper, cardImage, cardText} from "./style";
import {Burger} from "../../assets/iconJs";

export const FilesCard = (props) => {
    const {download_url, author, format} = props;
    let cardImageSrc = <img style={cardImage} src='https://via.placeholder.com/78x53.png'/>
    if (format === '.jpg'
        || format === '.svg'
        || format === '.gif'
        || format === '.jpeg'
        || format === '.png') {
        if (typeof download_url === typeof {}) cardImageSrc =
            <img style={cardImage} src={URL.createObjectURL(download_url)}/>
        else cardImageSrc = <img style={cardImage} src={download_url}/>;
    }

    return (
        <Box style={cardWrapper}>
            <Box style={cardWrapper}>
                {cardImageSrc}
                <Typography variant='h3' style={cardText}>{author}{format}</Typography>
                <Typography variant='h3'>Uploaded 2 days ago</Typography>
            </Box>
            <Burger/>
        </Box>
    )

}