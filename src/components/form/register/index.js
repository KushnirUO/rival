import React from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabelCustom from "../../formInfo/input/inputLabel";
import {buttonSubmit, inputClass} from "../style";

const RegisterForm = ({formik}) => {
    return (
        <Box>
            <TextField
                style={inputClass}
                fullWidth
                id="name"
                name="name"
                label={<InputLabelCustom label='Full name'/>}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
                style={inputClass}
                fullWidth
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
                style={inputClass}
                fullWidth
                id="password"
                name="password"
                label={<InputLabelCustom label='Password'/>}
                type="password"
                value={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />
            <Button variant="contained" sx={{buttonSubmit}} fullWidth type="submit" disabled={!formik.isValid}>
                Register
            </Button>
        </Box>
    );
};

export default RegisterForm;