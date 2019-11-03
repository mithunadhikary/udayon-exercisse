import React from 'react';

export default function BoxNine(props) {
   
    return (
        <React.Fragment>
            <a href="#" className="border-bottom pb-8 pt-8 display-inline-block">
                <h3 className="mb-0 font-size-18 line-height-24 color4 pt-5 pb-0 pr-5 pl-5 mt-0">
                    {props.data.title}
                </h3>
            </a>
        </React.Fragment>
    );
}