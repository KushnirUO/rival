import React from 'react';
import {Box, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {boxUpload, buttonUpload, textUnderButton} from "./style"

function UploadFile (){
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
        </Box>
    );
};

export default UploadFile;


