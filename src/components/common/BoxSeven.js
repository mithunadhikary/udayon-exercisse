import React from 'react';

export default function BoxSeven(props) {
   
    return (
        <React.Fragment>
            <a href="#" className="position-relative s-position-initial display-inline-block s-row width100">
                {/* <img className="width100 fixed-height-style-1 s-flex-1 s-flex-order-2" src={props.data.image}/> */}
                <div style={{backgroundImage: "url(" +  props.data.image  + ")"}} className="width100 fixed-height-style-1 s-fixed-height-style-1 s-flex-1 s-flex-order-2"></div>
                <h3 className="position-absolute s-position-initial s-flex-2 s-flex-order-1 s-bg-none mb-0 font-size-18 line-height-24 color4 bg-1-9 width-100--30 pt-8 pb-8 pr-15 pl-15 bottom-0">
                    {props.data.title}
                </h3>
            </a>
        </React.Fragment>
    );
}