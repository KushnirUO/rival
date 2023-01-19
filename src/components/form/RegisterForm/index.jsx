import React from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabelCustom from "../../FormAuth/InputLabelCustom";
import {buttonSubmit, inputClass} from "../style";
import {registerMock} from "../input.mock";
import ErrorText from "../ErrorText";

const RegisterForm = ({formik}) => {
    return (
        <Box>
            {registerMock.map((item) => {
                return(
                    <Box>
                        <TextField
                            fullWidth
                            style={inputClass}
                            id={item.id}
                            name={item.name}
                            label={<InputLabelCustom label={item.label} icon={item.icon}/>}
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
            <Button
                variant="contained"
                sx={{buttonSubmit}}
                fullWidth
                type="submit"
                disabled={!formik.isValid}>
                Register
            </Button>
        </Box>
    );
};

export default RegisterForm;