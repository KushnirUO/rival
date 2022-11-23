export const components ={
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
}