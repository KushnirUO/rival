import Pagination from '@mui/material/Pagination';
import React, {useState} from 'react';
import {Box, PaginationItem} from "@mui/material";
import usePagination from "./Pagination";
import {postInfo} from "../postInfo/postInfo.mock";
import PostItem from "../postInfo/postItem";
import {useStyles} from './style'
import {Link, NavLink, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

function useQuery() {
    const {search} = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export function PaginationBlock() {
    let query = useQuery();
    let init = Number(query.get("page"));
    const cards = useSelector(state => state.cards.cards);

    if (init === 0) init = 1;
    let [page, setPage] = useState(init);

    const PER_PAGE = 5;
    const linkTo = "/blog?page=";

    const count = Math.ceil(cards.length / PER_PAGE);
    const _DATA = usePagination(cards, PER_PAGE, init);

    const classes = useStyles();

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };
    let pagination;
    console.log(cards.length)
    if(_DATA.currentData().length === 0 && cards.length!==0){
        window.location = linkTo + (page-1);
    }
    if (cards.length > 5) pagination =
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

    return (
        <Box>
            <Box className={classes.postItemsWrapper}>
                {_DATA.currentData().map((item, key) => {
                    return (
                        <PostItem
                            id={item.id}
                            title={item.title}
                            subtitle={item.subtitle}
                            status={item.status}
                            stats={item.stats}
                            key={key}
                        />
                    );
                })}
            </Box>
            {pagination}

        </Box>
    );
}
