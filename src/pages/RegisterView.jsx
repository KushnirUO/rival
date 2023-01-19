import React from 'react';
import ContainerAuth from "../components/ContainerAuth";
import {Box} from "@mui/material";
import Header from "../components/Header";

const RegisterView = () => {
    return (
        <Box>
            <Header variant='none-authorized'/>
            <ContainerAuth/>
        </Box>
    );
};

export default RegisterView;