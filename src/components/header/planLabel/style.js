import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    pro: {
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: theme.shape.borderRadius,
        background: theme.palette.info.main,
        padding:  theme.spacing(0.7,1.1,0.7,1.4),
        color:theme.palette.secondary.main,
        textDecoration:'none'
    },
}))