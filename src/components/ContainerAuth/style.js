import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    authWrapper: {
        display:"flex",
        flexDirection:'column',
        justifyContent:"center",
        alignItems:"center",
        background: theme.palette.secondary.lightGray,
        gap: '3.9rem',
        height: "100vh",
    },
}))