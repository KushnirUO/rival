import React from 'react';
import {Box, Typography} from "@mui/material";

const SiteName = () => {
    return (
        <Box>
            <Typography variant='h2' sx={{display: 'flex'}}>
                Rival
                <Box style={{color: '#63B3ED'}}>CMS</Box>
            </Typography>
        </Box>
    );
};

export default SiteName;