import Pagination from '@mui/material/Pagination';
import React, {useState} from 'react';
import {Box} from "@mui/material";
import usePagination from "./Pagination";
import {postInfo} from "../postInfo/postInfo.mock";
import PostItem from "../postInfo/postItem";
import {useStyles} from './style'

const PaginationBlock = () => {
    let [page, setPage] = useState(1);
    const PER_PAGE = 5;

    const count = Math.ceil(postInfo.length / PER_PAGE);
    const _DATA = usePagination(postInfo, PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };
    const classes = useStyles();

    return (
        <Box>
            <Box className={classes.postItemsWrapper}>
                {_DATA.currentData().map(v => {
                    return (
                        <PostItem title={v.title} subtitle={v.subtitle} status={v.status} stats={v.stats}/>
                    );
                })}
            </Box>
            <Pagination color="primary" onChange={handleChange} count={count} page={page} hidePrevButton hideNextButton/>
        </Box>
    );
};

export default PaginationBlock;