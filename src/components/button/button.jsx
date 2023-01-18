import * as React from 'react';
import Button from "@mui/material/Button";
import PropTypes from 'prop-types';
import './style.scss'

export default function JButton(props){
    const {variant, label, size, disable, onClick, fullWidth,to} = props;
    return (
        <div>
            <Button
                variant={variant}
                size={size}
                disabled={disable}
                onClick={onClick}
                fullWidth={fullWidth}
                to={to}>
                {label}
            </Button>
        </div>
    );
};
JButton.defaultProps = {
    label: "Button",
    variant: "contained",

    fullWidth: 0,
    disabled: 0,
    onClick: ()=>{},
}
Button.propTypes = {
    label: PropTypes.string,
    variant: PropTypes.oneOf(["contained", "outlined", "text"]),
    size: PropTypes.oneOf(["small", "medium", "large"]),
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.oneOf([PropTypes.func, PropTypes.string]),
}