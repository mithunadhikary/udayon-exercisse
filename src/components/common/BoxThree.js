import React from 'react';

export default function BoxThree(props) {
   
    return (
        <React.Fragment>
            <a href="#">
                <img className="width100" src={props.data.image}/>
                <h3 className="mt-5 mb-15 font-size-32 line-height-42 t-font-size-24 t-line-height-32 color4" >
                    {props.data.title}
                </h3>
                <p className="font-size-16 line-height-22 color6 mt-0 mb-5">
                    {props.data.excerpt}
                </p>
                <span className="font-size-12 f-color mr-10">
                    {props.data.tag}
                </span>
                <span className="font-size-12 f-color">
                    {props.data.time}
                </span>
            </a>
        </React.Fragment>
    );
}