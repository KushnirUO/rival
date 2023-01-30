import React from 'react';
import {Box} from "@mui/material";
import {filterItemBlock, activeItem} from "./style";
export const FilterItem = ({label, id, state}) => {
    return (
        <Box style={state===id ? activeItem : filterItemBlock}>
            {label}
        </Box>
    )
}