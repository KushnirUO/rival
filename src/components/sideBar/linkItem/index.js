import React from 'react';
import {NavLink} from "react-router-dom";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    navStyle: {
        font: "400 1.8rem / 2.1rem 'Roboto',sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center',
        gap: "1.3rem",
        color: "#2C5282",
        "&:hover": {
            font: "700 1.8rem / 2.1rem 'Roboto',sans-serif",
        },
    }
}))
const LinkItem = (props) => {
    const {icon, link, label} = props;
    const classes = useStyles();

    return (
        <NavLink className={classes.navStyle} to={link}>
            {icon}
            {label}
        </NavLink>
    );
};

export default LinkItem;