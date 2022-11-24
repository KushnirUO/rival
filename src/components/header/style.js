import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    header: {
        background: theme.palette.secondary.darkGray,
        padding: theme.spacing(1.5,3.8,1.5,7.2),
        // [theme.breakpoints.up('xl')]: {
        //     padding: theme.spacing(2),
        // },
    },
    // "1.5rem 3.8rem 1.5rem 7.2rem"
    headerWrapper: {
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rightBox: {
        display: "flex",
        alignItems: 'center',
        gap: '3rem',
    }
}))