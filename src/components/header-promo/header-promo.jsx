import * as React from 'react';
import JButton from "../button/button";
import './style.scss'

export default function headerPromo(){
    return (
        <div className="promo">
            <div className="promo__wrapper">
                <JButton variant="outlined" label="Don’t have & account?" size="medium"></JButton>

                <div className="promo-title">
                    Rival
                    <mark>CMS</mark>
                </div>
                <div className="promo-subtitle">Fresh new way to build sites</div>
                <div className="promo-button">
                    <JButton variant="outlined" size="large" label="Get started free"></JButton>
                </div>
                <div className="promo-undertext">*no card needed</div>
            </div>
        </div>
    );
};