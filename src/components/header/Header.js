import React from 'react';
import Top from './Top'
import Menu from './Menu'

export default function Header(props) {
    return (
        <React.Fragment>
            <div className="container mb-20 pl-15 pr-15">
                <Top />  
                <Menu />       
            </div>
        </React.Fragment>
    );
}