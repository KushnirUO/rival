import React from 'react';
import Box from "@mui/material/Box";
import LinkItem from "./LinkItem";
import {NavInfo} from './navInfo.mock'
import {Typography} from "@mui/material";
import {useStyles} from './style'

const SideBar = () => {
    const classes = useStyles();

    return (
        <Box className={classes.sideBar}>
            {NavInfo.map((block,key) => (
                <Box className={classes.sideBarWrapper} key={key}>
                    <Box className={classes.titleText}>
                        <Typography variant="h4">{block.title}</Typography>
                    </Box>
                    {block.info.map((item,key) => (
                        <Box className={classes.itemsWrapper} key={key}>
                            <LinkItem
                                id={item.id}
                                icon={item.icon}
                                link={item.link}
                                label={item.label}/>
                        </Box>
                    ))}
                </Box>
            ))}
        </Box>
    );
};

export default SideBar;