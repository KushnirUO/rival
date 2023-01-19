import React from 'react';
import Box from "@mui/material/Box";

const ErrorText = ({formik, item}) => {
    return (
        <Box style={{paddingBottom:'2rem', color:'red', fontSize:'1rem',}}>
            {formik.touched[item] && formik.errors[item]}
        </Box>
    );
};

export default ErrorText;