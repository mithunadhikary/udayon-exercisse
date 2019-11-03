import React from 'react';

export default function BoxSeven(props) {
   
    return (
        <React.Fragment>
            <a href="#" className="position-relative display-inline-block">
                <img className="width100 fixed-height-style-1" src={props.data.image}/>
                <h3 className="position-absolute mb-0 font-size-18 line-height-24 color4 bg-1-9 width-100--30 pt-8 pb-8 pr-15 pl-15 bottom-7">
                    {props.data.title}
                </h3>
            </a>
        </React.Fragment>
    );
}