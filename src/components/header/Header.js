import React from 'react';
import Top from './Top'
import Menu from './Menu'

export default function Header(props) {
    return (
        <React.Fragment>
            <div className="container">
                <Top />  
                <Menu />       
            </div>
        </React.Fragment>
    );
}