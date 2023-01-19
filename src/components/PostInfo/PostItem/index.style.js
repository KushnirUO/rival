import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({

    postWrapper:{
        display:"flex",
        alignItems:"center",
        background: theme.palette.secondary.lightGray,
        padding:theme.spacing(3,5.4,2.9,3),
        gap:'8rem',
        justifyContent:'space-between',
    },
    itemWrapper:{
        display:"flex",
        alignItems:"center",
        gap:'8rem',
    },
    statsPadd:{
        padding:theme.spacing(0,3.6,0,11.7),
    }
}))