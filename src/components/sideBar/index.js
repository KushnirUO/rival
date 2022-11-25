import React from 'react';
import Box from "@mui/material/Box";
import LinkItem from "./linkItem";
import {NavInfo} from './navInfo.mock'
import {Typography} from "@mui/material";
import {useStyles} from './style'

const SideBar = () => {
    const classes = useStyles();

    return (
        <Box className={classes.sideBar}>
            {NavInfo.map(block => (
                <Box className={classes.sideBarWrapper}>
                    <Box className={classes.titleText}>
                        <Typography variant="h4">{block.title}</Typography>
                    </Box>
                    {block.info.map(item => (
                        <Box className={classes.itemsWrapper}>
                            <LinkItem key={item.id} icon={item.icon} link={item.link} label={item.label}/>
                        </Box>
                    ))}
                </Box>
            ))}
        </Box>
    );
};

export default SideBar;