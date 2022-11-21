import * as React from 'react';
import logoIcon from './logo.svg'
import './style.scss'
export default function logo(){
    return (
        <div className="logo">
            <img src={logoIcon} alt="" />
            <div className="logo__text">Rival<mark>CMS</mark></div>
        </div>
    );
};