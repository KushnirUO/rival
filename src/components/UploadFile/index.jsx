import React, {useEffect, useState} from 'react';
import {Box, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {boxUpload, buttonUpload, textUnderButton} from "./style"


function UploadFile ({state, setState}){
    const [file, setFile] = useState();

    const handleFileChange = (e) => {
        let fileValue = e.target.files[0].name;
        let dotIndex = fileValue.indexOf('.');
        let format = fileValue.substr(dotIndex, 4);
        let name = fileValue.substr(0, dotIndex);

        if (e.target.files) {
            setFile(e.target.files[0]);
        }

        const objFile = {
            id: state.length + 1,
            author: name,
            format: format,
            download_url: e.target.files[0],
            height: 3434,
            width: 443,
            url: 'rgrgr',
        }
        document.cookie = 'filter=' + JSON.stringify('');
        setState(current => [...current, objFile]);
    };


    return (
        <Box style={boxUpload}>
            <Button variant="contained" component="label" color="primary" style={buttonUpload} type="submit">
                <Typography variant='h5'>
                    click to upload
                </Typography>
                <input type="file" hidden onChange={handleFileChange}/>
            </Button>
            <Typography variant='h5' style={textUnderButton}>
                Drag & drop multiple files to upload
            </Typography>
        </Box>
    );
};

export default UploadFile;


