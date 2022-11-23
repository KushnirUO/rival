import React from 'react';
import Box from "@mui/material/Box";
import LinkItem from "./linkItem";
import {NavInfo} from './navInfo.mock'
import {makeStyles} from "@mui/styles";
import {Typography} from "@mui/material";

const useStyles = makeStyles((theme) => ({
    sideBar: {
        display: "flex",
        flexDirection: "column",
        alignItems: 'flex-start',
        padding: theme.spacing(7.2,5.5,0,7.2),
        gap: '3.2rem',
        maxWidth: '17.3rem',
        background: theme.palette.secondary.lightGray2,
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
        color: theme.palette.secondary.lightBlue,
    }
}))
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