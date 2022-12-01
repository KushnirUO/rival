export const components = {
    MuiFormControl:{
        styleOverrides: {
            root: {
                width:'100%',

            }
        }
    },
    MuiFormHelperText:{
        styleOverrides: {
            root: {
                color:'red',
                fontSize:'1rem',
                lineHeight:'100%',

            }
        }
    },
    MuiFormGroup:{
        styleOverrides: {
            root: {
               minHeight:'14.3rem',

            }
        }
    },
    MuiInputBase:{
        styleOverrides: {
            root: {
                background: "#EDF2F7",
                borderRadius: '0.5rem',
                border: 'none',
                height: '7rem',
                width: '100%',
                padding: '1rem',
                color:"#2A4365",
                fontSize: '1.6rem',

            }
        }
    },
    MuiInputLabel:{
        styleOverrides: {
            root: {
                transform:'none',
                display: "flex",
                gap: '1rem',
                alignItems:'center',
                position:'relative',

            }
        }
    },
    MuiPagination: {
        styleOverrides: {
            ul: {
                paddingTop:'4.7rem',
                justifyContent: 'center',
                gap: '0.9rem',
            },
        }
    },
    MuiPaginationItem: {
        styleOverrides: {
            root: {
                width: '3rem',
                height: '3rem',
                minWidth: 'fit-content',
                padding: 0,
                margin: 0,
                backgroundColor: '#E2E8F0',
                font: "700 1.6rem / 1.9rem 'Roboto',sans-serif",
                color: '#2C5282'
            }
        }
    },
    MuiSelected: {
        styleOverrides: {
            root: {
                color: '#F7FAFC',
            }
        }
    },
    MuiButton: {
        styleOverrides: {
            root: {
                color: "#fff",
                borderRadius: '0.5rem',
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
                props: {variant: 'outlined', size: 'small'},
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
    }
    ,
}