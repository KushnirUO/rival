import React from 'react';
import {ThemeProvider,} from "@mui/material";
import {theme} from './theme/index'
import Routs from "./routes";
import './App.css'
const App = () => (
    <ThemeProvider theme={theme}>
       <Routs/>
    </ThemeProvider>
)

export default App;
