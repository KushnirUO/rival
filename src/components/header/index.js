import * as React from 'react';
import {makeStyles} from '@mui/styles'
import {Box} from '@mui/material';

import Avatar from "./avatar";
import Logo from "./logo";
import PlanLabel from "./planLabel";

const useStyles = makeStyles((theme) => ({
    header: {
        background: theme.palette.secondary.darkGray,
        padding: "1.5rem 3.8rem 1.5rem 7.2rem",
    },
    headerWrapper: {
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rightBox: {
        display: "flex",
        alignItems: 'center',
        gap: '3rem',
    }

}))

export default function Header() {
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