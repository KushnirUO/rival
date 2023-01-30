import React from 'react';
import {Box, Typography} from "@mui/material";
import {cardWrapper,cardImage} from "./style";
import {Burger} from "../../assets/iconJs";
import {Thumb} from "../UploadFile/thumb";

export const FilesCard = (props) => {
    const { download_url, author, format} = props;
    let cardImageSrc =  <img style={cardImage} src={download_url}/>;
    if(typeof download_url === typeof {})cardImageSrc = <Thumb style={cardImage} file={download_url}/>
    return (
        <Box style={cardWrapper} >
            <Box style={cardWrapper}>
                {cardImageSrc}
                <Typography variant='h3'>{author}{format}</Typography>
                <Typography variant='h3'>Uploaded 2 days ago</Typography>
            </Box>
            <Burger/>
        </Box>
    )

}