import React from 'react';
import {Box} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Typography} from "@mui/material";
import {HomeIcon} from "../../../assets/iconJs";
const useStyles = makeStyles((theme) => ({
    statsWrapper:{
        display:'flex',
        alignItems:'center',
        gap:'0.7rem',
    },
    countText:{
        color: theme.palette.secondary.darkBlue,
    },
    viewsText:{
        color: theme.palette.secondary.gray,
    }

}))
const StatsItem = (props) => {
    const classes = useStyles();
    // let icon;
    // console.log(count);
    // if(count > "0")icon = <HomeIcon/>;
    return (
        <Box className={classes.statsWrapper}>
            <Typography className={classes.countText} variant='h3' sx={{fontWeight:700}}>{props.count}</Typography>
            <Typography className={classes.viewsText} variant='subtitle1'>Views</Typography>
            {/*{UpIcon}*/}
        </Box>
    );
};

export default StatsItem;