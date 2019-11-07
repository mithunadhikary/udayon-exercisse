import React from 'react';

export default function BoxTwo(props) {
   
    return (
        <React.Fragment>
            <a href="#" key={props.id}>
                <div className="row border-bottom mb-7">
                    <div className="flex-1 mr-15 t-display-none s-display-block s-flex-order-2">
                        <img className="width100" src={props.data.image}/>
                    </div>
                    <div className="flex-2 s-flex-order-1">
                        <h3 className="mt-0 mb-10 font-size-20 t-font-size-18 color4 pr-10">
                            {props.data.title}
                        </h3>
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