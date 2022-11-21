import * as React from 'react';
import JButton from "../button/button";
import Logo from "../logo/logo";

import './style.scss'
export default function footer(){
    const footerInfo = ["Register", "Terms & conditions","Privacy policy","Documentation","Pricing","Our blog"];

    return (
        <footer className="footer">
            <div className="footer__wrapper">
                {footerInfo.map(item => (
                    <JButton variant={"text"}>{item}</JButton>
                    )
                )}
                <Logo/>
            </div>
        </footer>
    );
};