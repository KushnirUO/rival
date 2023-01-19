import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    statsWrapper:{
        display:'flex',
        alignItems:'center',
        gap:'0.7rem',
        minWidth:'11.7rem',
    },
    countText:{
        color: theme.palette.secondary.darkBlue,
    },
    viewsText:{
        color: theme.palette.secondary.gray,
    }
}))