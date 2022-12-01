import React from 'react';
import ContainerAuth from "../components/containerAuth";
import {Box} from "@mui/material";
import Header from "../components/header";

const RegisterView = () => {
    return (
        <Box>
            <Header variant='none-authorized'/>
            <ContainerAuth/>
        </Box>
    );
};

export default RegisterView;