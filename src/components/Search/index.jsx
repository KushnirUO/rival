import React, {useState} from 'react';
import {Box} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {inputSearch, iconSearch} from "./style";

const Search = ({value, setValue}) => {

    return (
        <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
            <SearchIcon
                sx={{color: 'action.active'}}
                style={iconSearch}/>
            <input
                name={'search'}
                type={`text`}
                style={inputSearch}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder="Search for file"/>
        </Box>
    );
};

export default Search;