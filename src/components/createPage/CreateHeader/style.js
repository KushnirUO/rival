import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    blockWrapper: {
        display: "flex",
        alignItems: 'center',
        padding: theme.spacing(3.3, 0, 2.7, 0),
        justifyContent: "space-between",
    },
    blogWrapper: {
        display: "flex",
        alignItems: 'center',
    },
    titlePadding: {
        paddingRight: '19.3rem'
    },
    statusPadding: {
        paddingRight: '18.2rem'
    },
    statsPadding: {
        paddingRight: '17.6rem'
    },
}))
