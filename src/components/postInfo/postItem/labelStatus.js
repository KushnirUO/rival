import React from 'react';
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import {useStyles} from './labelStatus.style'

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