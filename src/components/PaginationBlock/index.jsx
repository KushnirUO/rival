import Pagination from '@mui/material/Pagination';
import React, {useEffect, useState} from 'react';
import {Box, Button, PaginationItem} from "@mui/material";
import paginations from "./pagination";
import PostItem from "../PostInfo/PostItem";
import {useStyles} from './style'
import {Link, NavLink, useLocation} from "react-router-dom";
import {FilesCard} from "../FilesCard";
import { createBrowserHistory } from 'history';
function useQuery() {
    const {search} = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export function PaginationBlock({cards, link}) {
    let query = useQuery();
    const history = createBrowserHistory();
    let init = Number(query.get("page"));
    let [page, setPage] = useState(init);
    const PER_PAGE = 5;
    let linkTo = "/blog?page=";
    let renderItem;
    const count = Math.ceil(cards.length / PER_PAGE);
    const _DATA = paginations(cards, PER_PAGE, init);
    const classes = useStyles();
    let pagination;

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

    switch (link) {
        case 'blog':
            linkTo = "/blog?page=";
            renderItem = <Box className={classes.postItemsWrapper}>
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
            break
        case 'fileView':
            linkTo = "/fileView?page=";
            renderItem = <Box className={classes.postItemsWrapper}>
                {_DATA.currentData().map((item, key) => {
                    return (
                        <FilesCard
                            author={item.author}
                            download_url={item.download_url}
                            format={item.format}
                            key={key}
                        />
                    );
                })}
            </Box>
            break
    }
    useEffect(() => {
        handleChange('',1);
        history.replace({ pathname: `${linkTo + 1}`})
    }, [cards])

    if (init === 0) init = 1;
    if (_DATA.currentData().length === 0 && cards.length !== 0) {
        history.replace({ pathname: `${linkTo + (page - 1)}`})
    }
    if (cards.length > 5) pagination =
        <Pagination
            color="primary"
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
            {renderItem}
            {pagination}
        </Box>
    );
}
