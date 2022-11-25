import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    published: {
        border: "0.2rem solid #9AE6B4",
        borderRadius: theme.shape.borderRadius * 10,
        color: theme.palette.info.green,
        width: '12rem',
        padding: theme.spacing(0.7,0,0.6),
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
    },
    draft: {
        border: "0.2rem solid #FC8181",
        borderRadius: theme.shape.borderRadius * 10,
        color: theme.palette.info.red,
        width: '12rem',
        padding: theme.spacing(0.7,0,0.6),
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
    },
    scheduled: {
        border: "0.2rem solid #F6AD55",
        borderRadius: theme.shape.borderRadius * 10,
        color: theme.palette.info.yellow,
        width: '12rem',
        padding: theme.spacing(0.7,0,0.6),
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
    }
}))
