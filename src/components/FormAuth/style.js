import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    formWrapper: {
        display:"flex",
        flexDirection:'column',
        padding: theme.spacing(3,4),
        background: theme.palette.secondary.white,
        gap: '2rem',
        borderRadius: '1rem',
        width: '43.2rem',
    },
}))