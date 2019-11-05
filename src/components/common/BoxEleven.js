import React from 'react';

export default function BoxEleven(props) {
   
    return (
        <React.Fragment>
            <div className="row s-flex-d-c bg-3 s-pb-15">
                <div className="flex-1 s-flex-order-2">
                    <h3 className="font-size-32 line-height-42 t-font-size-24 t-line-height-32 s-font-size-20 s-line-height-28 color7 mtb-0 pl-20 pt-40 pr-20 pb-30 s-pt-15">{props.data.title}</h3>
                    <span className="font-size-12 color7 mr-10 ml-40 s-ml-20">{props.data.tag}</span>
                    <span className="font-size-12 color7">{props.data.time}</span>
                </div>
                <div className="flex-2 s-flex-order-1 position-relative ">
                    <img className="width100 display-inherit" src={props.data.image}/>
                    <span className="video-icon"></span>
                </div>
            </div>
        </React.Fragment>
    );
}