import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    statusItem:{
        borderRadius: theme.shape.borderRadius * 10,
        width: '12rem',
        padding: theme.spacing(0.7,0,0.6),
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
    },
    published: {
        border: `0.2rem solid ${theme.palette.info.green}`,
        color: theme.palette.info.green,
    },
    draft: {
        border: `0.2rem solid ${theme.palette.info.red}`,
        color: theme.palette.info.red,
    },
    scheduled: {
        border: `0.2rem solid ${theme.palette.info.yellow}`,
        color: theme.palette.info.yellow,
    }
}))
