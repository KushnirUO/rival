import * as React from 'react';
import {Box} from '@mui/material';

import Avatar from "./ImageAvatar";
import Logo from "./Logo";
import PlanLabel from "./PlanLabel";
import {useStyles} from './style'
import JButton from "../JButton";
import {NavLink} from "react-router-dom";
import {logOutUser} from "../../store/authUserSlice";
import {useDispatch} from "react-redux";

export default function Header({variant}) {
    const classes = useStyles();
    const dispatch = useDispatch();
    let variantRight = '';

    function handleLogout(){
        dispatch(logOutUser());
        window.location = '/login';
    }
    switch (variant) {
        case 'none-authorized':
            variantRight =
                <NavLink to='/login' style={{height: '4.7rem', textDecoration: 'none'}}>
                    <JButton variant='outlined'
                             size='small'
                             label='Sign in'/>;
                </NavLink>
            break;
        case 'authorized':
            variantRight = [
                <PlanLabel variant='pro'/>,
                <Avatar/>,
                <JButton variant='outlined' size='small' label='Logout' onClick={handleLogout} />
            ];
            break;
        default:
            variantRight = <JButton variant='outlined' size='small' label='Sign in'/>;
    }
    return (
        <Box className={classes.header}>
            <Box className={classes.headerWrapper}>
                <Logo/>
                <Box className={classes.rightBox}>
                    {variantRight}
                </Box>
            </Box>
        </Box>
    );
};