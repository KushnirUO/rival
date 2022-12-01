export const BoxGroup = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
};
export const inputClass = {
    background: "#EDF2F7",
    borderRadius: '0.5rem',
    border: 'none',
    height: '6.8rem',
    width: '100%',
    padding: '1rem',
    color:"#2A4365",
    fontSize: '1.6rem',
    marginBottom:'2rem',
};

export const buttonSubmit = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: "#2A4365",
    borderRadius: '0.5rem',
    fontWeight: 400,
    fontSize: '2rem',
    lineHeight: '2.3rem',
    color: "#FFFFFF",
    maxWidth:'20.1rem',
    padding: '1.8rem 0 2rem',
    "&:disabled":{
        cursor:'none',
    },
    width: '100%'
};
export const buttonReg = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: "none",
    borderRadius: '0.5rem',
    fontWeight: 400,
    fontSize: '2rem',
    lineHeight: '2.3rem',
    color: "#2A4365",
    border: "2px solid #2A4365",
    padding: '1.9rem 0',
    textDecoration:'none',
};
export const buttonForgot = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: "none",
    fontWeight: 400,
    fontSize: '2rem',
    lineHeight: '2.3rem',
    color: "#3182CE",
    maxWidth:'20.1rem',
    padding: '1.8rem 0 2rem',
    textDecoration:'none',
};