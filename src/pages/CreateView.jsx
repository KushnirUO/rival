import React from 'react';
import Header from "../components/header";
import Box from "@mui/material/Box";
import SideBar from "../components/sideBar";
import PostInfo from "../components/postInfo";

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