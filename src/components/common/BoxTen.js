import React from 'react';

export default function BoxTen(props) {
   
    return (
        <React.Fragment>
            <a href="#" className="color3 font-size-16 border pt-6 pb-6 pl-16 pr-16 mt-16 display-inline-block">
                {props.data.title}
            </a>
        </React.Fragment>
    );
}