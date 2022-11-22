import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {createTheme, ThemeProvider, Typography} from "@mui/material";
import {BlogView, CreateView, FileView, LoginView, RegisterView} from './pages/pages';
import './App.css';

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: "#fff",
                    borderRadius: '0.5rem',

                    // "&:hover": {
                    //     background: "#2A4365",
                    // }
                },
            },
            variants: [
                {
                    props: {variant: 'contained'},
                    style: {
                        borderRadius: "5px",
                        width: "109px",
                        height: "43px",
                        fontSize: "2rem",
                        font: "400 2rem / 2.3rem 'Roboto', sans-serif",
                        backgroundColor: 'black',
                    },
                },
                {
                    props: {variant: 'outlined'},
                    style: {
                        border: `0.2rem solid #F7FAFC`,
                        color: "#F7FAFC",
                        padding: "1rem 2.5rem 1rem 2.4rem",
                        font: "400 2rem / 2.3rem 'Roboto', sans-serif",
                        textTransform: 'none',
                        "&:hover": {
                            border: `0.2rem solid #F7FAFC`,
                        }
                    },
                },
                {
                    props: {variant: 'outlined', size: 'medium'},
                    style: {
                        border: `0.2rem solid #2A4365`,
                        color: "#2A4365",
                        padding: "1.9rem 0 1.9rem 0",
                        width: "100%",
                        "&:hover": {
                            border: `0.2rem solid #2A4365`,
                        }
                    },
                },
                {
                    props: {variant: 'outlined', size: 'large'},
                    style: {
                        border: `0.3rem solid #F7FAFC`,
                        padding: "2.9rem 2.5rem 3rem 2.4rem",
                        font: "400 3rem / 3.5rem 'Roboto', sans-serif",
                        width: "max-content",
                        "&:hover": {
                            border: `0.3rem solid #F7FAFC`,
                        }
                    },
                },
            ],
        },
    },
    palette: {
        primary: {
            main: '#FFFCFE',
        },
        secondary: {
            main:'#FFFCFE',
            darkGray:'#2D3748',
        },
        typography: {
            htmlFontSize: 10,
            h3: {
                fontSize: "2rem",
                lineHeight: "2.3rem",
            },
            h4: {
                fontSize: "1.8rem",
                lineHeight: "2.1rem",
            },
            h5: {
                fontSize: "1.6rem",
                lineHeight: "1.9rem",
            },
            h6: {
                fontSize: "1.5rem",
                lineHeight: "1.8rem",
            },
            h7: {
                fontSize: "1.4rem",
                lineHeight: "1.6rem",
            },
        }
    },
});
const App = () => (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<BlogView/>}/>
                <Route path="create" element={<CreateView/>}/>
                <Route path="fileView" element={<FileView/>}/>
                <Route path="login" element={<LoginView/>}/>
                <Route path="register" element={<RegisterView/>}/>
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
)

export default App;
