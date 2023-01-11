import React from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabelCustom from "../../formInfo/input/inputLabel";
import {buttonSubmit, inputClass} from "../style";
import {registerMock} from "../valid.mock";
import ErrorText from "../errorText";

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
            <Button variant="contained" sx={{buttonSubmit}} fullWidth type="submit" disabled={!formik.isValid}>
                Register
            </Button>
        </Box>
    );
};

export default RegisterForm;