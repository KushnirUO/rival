import React from 'react';
import {Box, Typography} from "@mui/material";
import {useStyles} from './style'
import {Mail, User, Lock} from "../../../assets/iconJs";
import {inputClass} from "../../login/style";

const InputCustom = (props) => {
    const classes = useStyles();
    const {style,type,name,value,onChange,onBlur} = props
    // switch (type) {
    //     case 'email':
    //         type = <Mail/>;
    //         break;
    //     case 'password':
    //         type =  <Lock/>;
    //         break;
    //     case 'text':
    //         type =  <User/>;
    //         break;
    //     default:
    //         type = <Mail/>;
    // }
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