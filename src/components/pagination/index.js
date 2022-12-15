import Pagination from '@mui/material/Pagination';
import React, {useState} from 'react';
import {Box, PaginationItem} from "@mui/material";
import usePagination from "./Pagination";
import {postInfo} from "../postInfo/postInfo.mock";
import PostItem from "../postInfo/postItem";
import {useStyles} from './style'
import {Link, NavLink, useLocation} from "react-router-dom";

function useQuery() {
    const {search} = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export function PaginationBlock() {
    let query = useQuery();
    console.log(Number(query.get("page")));
    let init = Number(query.get("page"));
    if (Number(query.get("page")) === 0) init = 1;
    let [page, setPage] = useState(init);

    const PER_PAGE = 5;
    const linkTo = "/blog?page=";

    const count = Math.ceil(postInfo.length / PER_PAGE);
    const _DATA = usePagination(postInfo, PER_PAGE, init);

    const classes = useStyles();

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

    return (
        <div>
            <Box className={classes.postItemsWrapper}>
                {_DATA.currentData().map((v, key) => {
                    return (
                        <PostItem
                            title={v.title}
                            subtitle={v.subtitle}
                            status={v.status}
                            stats={v.stats}
                            key={key}
                        />
                    );
                })}
            </Box>
            <Pagination color="primary"
                        component={NavLink}
                        count={count}
                        page={page}
                        hidePrevButton
                        hideNextButton
                        onChange={(e, p) => {
                            handleChange(e, p)
                        }}
                        renderItem={(item) => (
                            <PaginationItem
                                component={Link}
                                to={linkTo + item.page}
                                {...item}
                            />
                        )}
            />
        </div>
    );
}
