import React from 'react';
import Box from "@mui/material/Box";
import {makeStyles} from "@mui/styles";
import {Typography} from "@mui/material";

const useStyles = makeStyles((theme) => ({
    published: {
        border: "0.2rem solid #9AE6B4",
        borderRadius: theme.shape.borderRadius * 10,
        color: theme.palette.info.green,
        width: '12rem',
        padding: theme.spacing(0.7,0,0.6),
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
    },
    draft: {
        border: "2px solid #FC8181",
        borderRadius: theme.shape.borderRadius * 10,
        color: theme.palette.info.red,
        width: '12rem',
        padding: theme.spacing(0.7,0,0.6),
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
    },
    scheduled: {
        border: "2px solid #F6AD55",
        borderRadius: theme.shape.borderRadius * 10,
        color: theme.palette.info.yellow,
        width: '12rem',
        padding: theme.spacing(0.7,0,0.6),
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
    }
}))
const LabelStatus = (variant) => {
    const classes = useStyles();
    let clasName = classes.scheduled;
    let labell = 'Scheduled';
    if (variant.variant === 'published'){clasName = classes.published;labell = 'Published';}
    if (variant.variant === 'draft'){clasName = classes.draft;labell = 'Draft';}
    return (
        <Box className={clasName}><Typography variant='h5'>{labell}</Typography></Box>
    );
};

export default LabelStatus;