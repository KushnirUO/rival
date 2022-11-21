import * as React from 'react';
import './style.scss'
import JButton from "../button/button";
export default function header(){
    return (
        <header className="header">
            <div className="header-buttons">
                <JButton variant="text" label="Pricing"></JButton>
                <JButton variant="text" label="About"></JButton>
                <JButton variant="outlined" label="Sign in" size="small"></JButton>
            </div>
        </header>
    );
};