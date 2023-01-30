import React from 'react';
import FilesList from "../components/FilesList";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import {Box} from "@mui/material";


const FileView = () => {
    return (
        <>
            <Header variant='authorized'/>
            <Box sx={{display: "flex"}}>
                <SideBar/>
                <Box sx={{padding: "4rem"}}>
                    <FilesList/>
                </Box>
            </Box>
        </>
    );
};

export default FileView;