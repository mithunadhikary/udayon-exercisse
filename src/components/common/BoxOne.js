import React from 'react';

export default function BoxOne(props) {
    return (
        <React.Fragment>
           <a href="#">
                <img className="width100" src={props.data.image}/>
                <h3 className="mb-0 mt-0 font-size-20 t-font-size--18 s-font-size-24 color4 height-65 overflow-hidden">
                    {props.data.title}
                </h3>
                <p className="font-size-16 line-height-22 color6 mt-0 pr-30">
                    {props.data.excerpt}
                </p>
            </a> 
        </React.Fragment>
    );
}