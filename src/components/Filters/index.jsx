import React, {useEffect, useState} from 'react';
import {Box} from "@mui/material";
import {FilterItem} from "./FilterItem";
import {labelFilter} from  "./labelFilter.mock"
import {filterWrapper} from "./style";
import {get_cookie} from "../../utils/getCookie";

export const Filters = ({onClick}) => {
    let [value,setValue]= useState();
    let filterItem = get_cookie('filter')
    const handleClick = (clas) => {
        setValue(clas);
        document.cookie = 'filter=' + JSON.stringify(clas);
    }
    useEffect(() => {
        setValue(JSON.parse(filterItem))
    }, [filterItem])

    return (
        <Box style={filterWrapper} onClick={onClick}>
            {labelFilter.map(item => (
                <Box onClick={() => handleClick(item.id)}>
                    <FilterItem label={item.name} key={item.id} id={item.id} state={value}/>
                </Box>
                ))}
        </Box>
    )
}