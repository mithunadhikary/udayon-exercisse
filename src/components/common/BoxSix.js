import React from 'react';

export default function BoxSix(props) {
   
    return (
        <React.Fragment>
            <a href="#" className="position-relative display-inline-block">
                <img className="width100 fixed-height-style-1" src={props.data.image}/>
                <h3 className="position-absolute mb-0 font-size-24 color4 bg-1-9 width-100--30 pt-15 pb-15 pr-15 pl-15 bottom-7">
                    {props.data.title}
                </h3>
            </a>
        </React.Fragment>
    );
}