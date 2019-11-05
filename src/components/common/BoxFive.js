import React from 'react';

export default function BoxTwo(props) {
   
    return (
        <React.Fragment>
            <a href="#">
                <div className="row border-bottom mb-8 pb-6">
                    <div className="flex-1 mr-15">
                        <img className="width100" src={props.data.image}/>
                    </div>
                    <div className="flex-2">
                        <h3 className="mt-0 mb-10 font-size-24 line-height-32 t-font-size-20 t-line-height-28 s-font-size-18 s-line-height-24 color4">
                            {props.data.title}
                        </h3>
                        <p className="font-size-16 line-height-22 color6 mt-0 mb-5 t-display-none">
                            {props.data.excerpt}
                        </p>
                        <span className="font-size-12 f-color mr-10 s-display-none">
                            {props.data.tag}
                        </span>
                        <span className="font-size-12 f-color s-display-none">
                            {props.data.time}
                        </span>
                    </div>
               </div>
            </a>
        </React.Fragment>
    );
}