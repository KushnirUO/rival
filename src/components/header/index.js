import * as React from 'react';
import {Box} from '@mui/material';

import Avatar from "./avatar";
import Logo from "./logo";
import PlanLabel from "./planLabel";
import {useStyles} from './style'
import JButton from "../button/button";

export default function Header({variant}) {
    const classes = useStyles();
    let variantRight = '';
    switch (variant) {
        case 'none-authorized':
            variantRight = <JButton/>;
            break;
        case 'authorized':
            variantRight = [<PlanLabel variant='pro'/>, <Avatar/>];
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