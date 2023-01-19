import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    navStyle: {
        font: "400 1.8rem / 2.1rem 'Roboto',sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center',
        gap: "1.3rem",
        color: theme.palette.secondary.darkBlue2,
        position:"relative",
        "&:hover": {
            font: "900 1.8rem / 2.1rem 'Roboto',sans-serif",
        },
        textDecoration: 'none',
    },
    active:{
        position:'relative',
        background: "#D53F8C",
        "&::after": {
            content:'',
            position: 'absolute',
            top:6,
            right:5,
            width:'1.5rem',
            height:'1.5rem',
            background: "#D53F8C",
            borderRadius:'0.5rem',
        }
    }
}))
