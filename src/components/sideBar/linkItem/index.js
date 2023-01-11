import React from 'react';
import {NavLink} from "react-router-dom";
import './style.css'
import {useStyles} from './style'

const LinkItem = (props) => {
    const {icon, link, label, id} = props;
    const classes = useStyles();

    return (
        <NavLink
            className={classes.navStyle}
            to={link}
            id={id}>
            {icon}
            {label}
        </NavLink>
    );
};

export default LinkItem;