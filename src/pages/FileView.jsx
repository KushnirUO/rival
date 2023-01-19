import React from 'react';
import UploadFile from "../components/UploadFile";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import {Box} from "@mui/material";

const FileView = () => {
    return (
        <>
            <Header variant='authorized'/>
            <Box sx={{display: "flex"}}>
                <SideBar/>
                <UploadFile/>
            </Box>
        </>
    );
};

export default FileView;