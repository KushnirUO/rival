import React from 'react';
import {Box} from "@mui/material";
import PostItem from "./postItem";
import {makeStyles} from "@mui/styles";
import {postInfo} from "./postInfo.mock";

const useStyles = makeStyles((theme) => ({
    postItemWraper:{
        display:"flex",
        flexDirection:"column",
        padding: theme.spacing(0,3.8,0,4.7),
        gap:'1.9rem',
    },

}))
const PostInfo = () => {
    const classes = useStyles();

    return (
        <Box className={classes.postItemWraper}>
            {postInfo.map(item => (
                <PostItem title={item.title} subtitle={item.subtitle} status={item.status} stats={item.stats}/>
            ))}
        </Box>
    );
};

export default PostInfo;