import React from 'react';
import Footer from "../components/footer/footer";
import HeaderPromo from "../components/header-promo/header-promo";
import Header from "../components/header/header";
import Skeleton from "../components/prototype/block-prototype";

const BlogView = () => {
    return (
        <div>
            <Header/>
            <HeaderPromo/>
            <Footer/>
            <Skeleton/>
        </div>
    );
};

export default BlogView;
