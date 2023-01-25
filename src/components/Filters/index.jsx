import React from 'react';
import {Box, Typography} from "@mui/material";
import {FilterItem} from "./FilterItem";
import {labelFilter} from  "./labelFilter.mock"
import {filterWrapper} from "./style";

export const Filters = () => {

    return (
        <Box style={filterWrapper}>
            {labelFilter.map(item => (
                <FilterItem label={item.name} key={item.id}/>
                ))}
        </Box>

    )
}