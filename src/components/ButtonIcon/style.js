import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    iconButton:{
        background: theme.palette.secondary.darkBlue,
        borderRadius: '0.5rem',
        display:'flex',
        gap:'1.4rem',
        padding: theme.spacing(1.2,2.4,1,1.3),
        maxWidth:'fit-content',
        textDecoration:'none',
    },
    btnText:{
        color: theme.palette.secondary.main,
        display: "flex",
        alignItems: "center",
    }
}))