import React from 'react';

import Header from "../components/header";
import SideBar from "../components/sideBar";
import Box from "@mui/material/Box";
import PostInfo from "../components/postInfo";

const BlogView = () => {
    return (
        <Box>
            <Header/>
            <Box sx={{
                display: "flex",
            }}>
                <SideBar/>
                <PostInfo/>
            </Box>
        </Box>
    );
};

export default BlogView;
