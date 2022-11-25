import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    sideBar: {
        display: "flex",
        flexDirection: "column",
        alignItems: 'flex-start',
        padding: theme.spacing(7.2,3.2,0,7.2),
        gap: '3.2rem',
        minWidth: '19.6rem',
        background: theme.palette.secondary.lightGray2,
        height: '100vh',
    },
    sideBarWrapper: {
        display: "flex",
        flexDirection: "column",
        gap: '3.2rem',
        alignItems: 'flex-start',
    },
    itemsWrapper: {
        display: "flex",
        flexDirection: "column",
        gap: '3.1rem'
    },
    titleText: {
        color: theme.palette.secondary.lightBlue,
    }
}))
