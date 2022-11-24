import React from 'react';
import {Box, Typography} from "@mui/material";
const TextHeading = (props) => {
    return (
        <Box>
            <Typography variant='h5' sx={{fontWeight:700,color: "#2C5282"}}>{props.label}</Typography>
        </Box>
    );
};

export default TextHeading;