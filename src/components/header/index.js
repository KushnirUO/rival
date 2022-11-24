import * as React from 'react';
import {Box} from '@mui/material';

import Avatar from "./avatar";
import Logo from "./logo";
import PlanLabel from "./planLabel";
import {useStyles} from './style'

export default function Header({ theme }) {
    const classes = useStyles();
    return (
        <header className={classes.header}>
            <Box className={classes.headerWrapper}>
                <Logo/>
                <Box className={classes.rightBox}>
                    <PlanLabel variant="pro"/>
                    <Avatar/>
                </Box>
            </Box>
        </header>
    );
};