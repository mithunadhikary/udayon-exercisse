import React from 'react';

export default function BoxEight(props) {
   
    return (
        <React.Fragment>
            <a href="#" className="border-bottom pb-5 display-inline-block">
                <img className="width100" src={props.data.image}/>
                <h3 className="mb-0 font-size-18 line-height-24 color4 pt-5 pb-0 pr-5 pl-5 mt-0">
                    {props.data.title}
                </h3>
            </a>
        </React.Fragment>
    );
}