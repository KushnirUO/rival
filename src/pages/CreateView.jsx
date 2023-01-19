import React from 'react';
import Header from "../components/Header";
import Box from "@mui/material/Box";
import SideBar from "../components/SideBar";
import PostInfo from "../components/PostInfo";

const CreateView = () => {
    return (
        <Box>
            <Header variant='authorized'/>
            <Box sx={{
                display: "flex",
            }}>
                <SideBar/>
                <PostInfo/>
            </Box>
        </Box>
    );
};

export default CreateView;