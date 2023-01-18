import React from 'react';
import {Box} from "@mui/material";
import {useStyles} from './style'

const InputCustom = (props) => {
    const classes = useStyles();
    const {style,type,name,value,onChange,onBlur} = props

    return (
        <Box>
            <input style={style}
                   type={type}
                   name={name}
                   value={value}
                   onChange={onChange}
                   onBlur={onBlur}
                   required
            />
        </Box>
    );
};

export default InputCustom;