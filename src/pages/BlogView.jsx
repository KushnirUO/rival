import React from 'react';

import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Box from "@mui/material/Box";
import PostInfo from "../components/PostInfo";

const BlogView = () => {
    return (
        <Box>
            <Header variant='authorized'/>
            <Box sx={{display: "flex"}}>
                <SideBar/>
                <PostInfo/>
            </Box>
        </Box>
    );
};

export default BlogView;
