import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {PageNotFound} from '../pages/pages';
import {PrivateRoute} from './privateRoute'
import {PublicRoute} from './publicRoute'
import {privateRoute, publicRoute} from "./routes.mock";
import {PaginationBlock, QueryParamsDemo} from "../components/pagination";
import BlogView from "../pages/BlogView";
const Routs = () => (
    <BrowserRouter>
        <Routes>
            {privateRoute.map(v => {
                return (
                    <Route exact path={v.path} key={v.path} element={
                        <PrivateRoute>
                            {v.page}
                        </PrivateRoute>
                    }/>
                );
            })}
            {publicRoute.map((v,key) => {
                return (
                    <Route exact path={v.path} key={key} element={
                        <PublicRoute>
                            {v.page}
                        </PublicRoute>
                    }/>
                );
            })}
            <Route exact path='*' element={
                <PageNotFound/>
            }/>
        </Routes>
    </BrowserRouter>
)

export default Routs;
