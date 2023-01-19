import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    postInfoWrapper:{
        display:"flex",
        flexDirection:"column",
        padding: theme.spacing(0,3.8,0,4.7),
        width:'100%',
    },
    postItemsWrapper:{
        display:"flex",
        flexDirection:"column",
        gap:'1.9rem',
    },
}))