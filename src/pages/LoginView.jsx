import React from 'react';
import Login from '../components/login/login'
import FormAuth from "../components/formInfo";
import Box from "@mui/material/Box";
import ContainerAuth from "../components/containerAuth";
const LoginView = () => {
    return (
        <Box>
            <ContainerAuth variant='login'/>
        </Box>
    );
};

export default LoginView;