import React from 'react';

export default function BoxSix(props) {
   
    return (
        <React.Fragment>
            <a href="#" className="position-relative s-position-initial display-inline-block s-width-100 width100">
                {/* <img className="width100 fixed-height-style-1 " src={props.data.image}/> */}
                <div style={{backgroundImage: "url(" +  props.data.image  + ")"}} className="width100 fixed-height-style-1 s-fixed-height-style-1 s-flex-1 s-flex-order-2"></div>
                <h3 className="position-absolute s-position-initial s-bg-none s-mt-0 mb-0 font-size-24 t-font-size-18 color4 bg-1-9 width-100--30 pt-8 pb-8 pr-15 pl-15 bottom-0">
                    {props.data.title}
                </h3>
            </a>
        </React.Fragment>
    );
}