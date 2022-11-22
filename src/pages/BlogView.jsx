import React from 'react';

import Header from "../components/header";
import SideBar from "../components/sideBar";
import Box from "@mui/material/Box";
import {makeStyles} from "@mui/styles";
import BlogInfo from "../components/postInfo";
import LabelStatus from "../components/postInfo/postItem/labelStatus";



const BlogView = () => {
    return (
        <Box>
            <Header/>
            <SideBar/>
            <LabelStatus>sdsd</LabelStatus>
        </Box>
    );
};

export default BlogView;
