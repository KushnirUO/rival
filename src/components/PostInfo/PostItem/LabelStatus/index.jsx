import React from 'react';
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import {useStyles} from './labelStatus.style'

const LabelStatus = (variant) => {
    const classes = useStyles();
    let clasName = '';
    switch (variant.variant) {
        case 'Published':
            clasName = classes.published;
            break;
        case 'Draft':
            clasName = classes.draft;
            break;
        case 'Scheduled':
            clasName = classes.scheduled;
            break;
        default:
            clasName = classes.draft;
    }
    return (
        <Box className={[classes.statusItem, clasName]}>
            <Typography variant='h5'>
                {variant.variant}
            </Typography>
        </Box>
    );
};

export default LabelStatus;