import React, {useState} from 'react';
import {Box, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {boxUpload, buttonUpload, textUnderButton} from "./style"

const UploadFile = (props) => {
    const allowedState = [
        "https://purr.objects-us-east-1.dream.io/i/image1-1.jpg",
        "https://purr.objects-us-east-1.dream.io/i/634.jpg",
        "https://purr.objects-us-east-1.dream.io/i/image0021.jpg",
        "https://purr.objects-us-east-1.dream.io/i/20170224_065222.jpg",
        "https://purr.objects-us-east-1.dream.io/i/gOc1d.jpg",
        "https://purr.objects-us-east-1.dream.io/i/039_-_O62Cnj9.gif",
        "https://purr.objects-us-east-1.dream.io/i/919125e507f045f0b5c7e4ce1661ceee.jpg",
    ];
    const [images, setImages] = useState(allowedState);

    const url = "http://aws.random.cat/meow";
    let src = "";

    async function fetchHandler() {
        try {
            const response = await fetch(url);
            const data = await response.json();
            src = data.file;

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <Box style={boxUpload}>
            <Button variant="contained" component="label" color="primary" style={buttonUpload}>
                <Typography variant='h5'>
                    click to upload
                </Typography>
                <input type="file" hidden/>
            </Button>
            <Typography variant='h5' style={textUnderButton}>
                Drag & drop multiple files to upload
            </Typography>
            {/*<Typography*/}
            {/*    variant='h5'*/}
            {/*    sx={{fontWeight: 700, color: "#2C5282"}}>*/}
            {/*    {props.label}*/}
            {/*</Typography>*/}
            {/*<button onClick={fetchHandler}>render new cat</button>*/}
            {/*<Box>*/}
            {/*    {images.map(image => (*/}
            {/*        <img style={{width:'78px', height:'53px'}} src={image}/>*/}
            {/*        )*/}
            {/*    )}*/}
            {/*</Box>*/}

        </Box>
    );
};

export default UploadFile;