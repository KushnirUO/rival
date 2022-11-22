import React from 'react';
import Box from "@mui/material/Box";
import LinkItem from "./linkItem";
import {Manage, Features} from './link.mock'
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    sideBar: {
        display: "flex",
        flexDirection: "column",
        alignItems: 'flex-start',
        padding: '7.2rem 5.5rem 0 7.2rem',
        gap: '3.2rem',
        maxWidth: '17.3rem',
        background: "#EDF2F7",
        height: '100vh',
    },
    sideBarWrapper: {
        display: "flex",
        flexDirection: "column",
        gap: '3.2rem',
        alignItems: 'flex-start',
    },
    itemsWrapper: {
        display: "flex",
        flexDirection: "column",
        gap: '3.1rem'
    },
    titleText: {
        color: "#4299E1",
        font: "400 1.8rem / 2.1rem 'Roboto',sans-serif",
    }
}))
const SideBar = () => {
    const classes = useStyles();

    return (
        <Box className={classes.sideBar}>
            {Manage.map(block => (
                <Box className={classes.sideBarWrapper}>
                    <Box className={classes.titleText}>{block.title}</Box>
                    {block.info.map(item => (
                        <Box className={classes.itemsWrapper}>
                            <LinkItem key={item.id} icon={item.icon} link={item.link} label={item.label}/>
                        </Box>
                    ))}
                </Box>
            ))}
            {Features.map(block => (
                <Box className={classes.sideBarWrapper}>
                    <Box className={classes.titleText}>{block.title}</Box>
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