import React from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabelCustom from "../../formInfo/input/inputLabel";
import {inputClass, buttonSubmit, buttonReg, buttonForgot} from '../style'
import {Link} from "@mui/material";
import {NavLink} from "react-router-dom";
import {loginMock} from '../valid.mock'
import ErrorText from '../errorText'

const LoginForm = ({formik}) => {
    return (
        <Box>
            {loginMock.map((item, key) => {
                return (
                    <Box key={key}>
                        <TextField
                            fullWidth
                            style={inputClass}
                            id={item.id}
                            name={item.name}
                            label={<InputLabelCustom label={item.label}/>}
                            value={formik.values[item.id]}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched[item.id] && Boolean(formik.errors[item.id])}
                            type={item.type}
                        />
                        <ErrorText formik={formik} item={item.id}/>
                    </Box>
                )
            })}
            <Box style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Box>
                    <Link
                        style={buttonForgot}
                        href='#'>
                        Forgot password?
                    </Link>
                </Box>
                <Button
                    variant='contained'
                    sx={{buttonSubmit}}
                    fullWidth
                    type="submit">
                    Login
                </Button>
            </Box>
            <Box style={{paddingTop: '2rem'}}>
                <NavLink
                    style={buttonReg}
                    to='/register'>
                    Don’t have & account?
                </NavLink>
            </Box>
        </Box>

    );
};

export default LoginForm;