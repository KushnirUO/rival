import * as React from 'react';
import Box from "@mui/material/Box";

import logoIcon from '../../../assets/image/logo.svg'
import {logo, logoText, logoImg, logoMark} from "./style"

export default function Logo() {
    return (
        <Box style={logo}>
            <img style={logoImg} src={logoIcon} alt=""/>
            <Box style={logoText}>Rival<Box style={logoMark}>CMS</Box></Box>
        </Box>
    );
};