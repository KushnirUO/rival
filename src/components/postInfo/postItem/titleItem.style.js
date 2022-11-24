import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    textWrapper:{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.4rem',
    },
    titleText:{
        color:theme.palette.secondary.darkBlue,
    },
    subtitleText:{
        color:theme.palette.secondary.gray,
    },
}))