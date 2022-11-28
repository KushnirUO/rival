import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    blockWrapper: {
        display: "flex",
        alignItems: 'center',
        padding: theme.spacing(3.3, 0, 1.7, 0),
        justifyContent: "space-between",
    },
    blogWrapper: {
        display: "flex",
        alignItems: 'center',
    },
    titlePadding: {
        paddingRight: '39.3rem'
    },
    statusPadding: {
        paddingRight: '26.2rem'
    },
    statsPadding: {
        paddingRight: '14.6rem'
    },
}))
export const colorPen = {
    filter: "brightness(17)",
}
