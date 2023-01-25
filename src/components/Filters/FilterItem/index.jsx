import React from 'react';
import {Box, Typography} from "@mui/material";
import {filterItemBlock} from "./style";
export const FilterItem = ({label}) => {
    return (
        <Box style={filterItemBlock}>
            {label}
        </Box>

    )
}