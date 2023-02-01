import React from 'react';
import Header from "../components/Header";
import Box from "@mui/material/Box";
import SideBar from "../components/SideBar";
import BlockLine from "../components/BlockLine";
import CreateHeader from "../components/createPage/CreateHeader";

const CreateView = () => {
    return (
        <Box>
            <Header variant='authorized'/>
            <Box sx={{
                display: "flex",
            }}>
                <SideBar/>
                <Box sx={{
                    padding: "3.6rem 6.3rem 0 2.3rem",
                    width:'100%',
                }}>
                    <CreateHeader/>
                    <BlockLine/>
                </Box>
            </Box>
        </Box>
    );
};

export default CreateView;