import React from 'react';
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import {useStyles} from './style'
import Login from "../login/login";
import FormAuth from "../formInfo";

const ContainerAuth = ({variant}) => {
    const classes = useStyles();
    // let generateInput = [<]
    // switch (variant) {
    //     case 'login':
    //
    //         break;
    //     case 'register':
    //         clasName = classes.draft;
    //         break;
    //     default:
    //         clasName = classes.draft;
    // }

    return (
        <Box className={classes.authWrapper}>
            <FormAuth variant={variant}/>
        </Box>
    );
};

export default ContainerAuth;