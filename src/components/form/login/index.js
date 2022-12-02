import React from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabelCustom from "../../formInfo/input/inputLabel";
import {BoxGroup, inputClass, buttonSubmit, buttonReg, buttonForgot} from '../style'
import {Link} from "@mui/material";
import {NavLink} from "react-router-dom";

const LoginForm = ({formik}) => {
    return (
        <Box>
            <TextField
                fullWidth
                style={inputClass}
                id="email"
                name="email"
                label={<InputLabelCustom label='Email address'/>}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
                fullWidth
                id="password"
                name="password"
                style={inputClass}
                label={<InputLabelCustom label='Password'/>}
                type="password"
                value={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />
            <Box style={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
                <Box>
                    <Link style={buttonForgot} href='#'>Forgot password?</Link>
                </Box>
                <Button variant='contained' sx={{buttonSubmit}} fullWidth type="submit">
                    Login
                </Button>
            </Box>
                <Box style={{paddingTop:'2rem'}}>
                    <NavLink style={buttonReg} to='/register'>Don’t have & account?</NavLink>
                </Box>
        </Box>

    );
};

export default LoginForm;