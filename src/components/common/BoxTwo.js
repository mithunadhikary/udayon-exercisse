import React from 'react';

export default function BoxTwo(props) {
   
    return (
        <React.Fragment>
            <a href="#">
                <div className="row border-bottom mb-8">
                    <div className="flex-1 mr-15">
                        <img className="width100" src={props.data.image}/>
                    </div>
                    <div className="flex-2">
                        <h3 className="mt-0 mb-10 font-size-20 color4">
                            {props.data.title}
                        </h3>
                        <span className="font-size-12 f-color mr-10">
                            {props.data.tag}
                        </span>
                        <span className="font-size-12 f-color">
                            {props.data.time}
                        </span>
                    </div>
               </div>
            </a>
        </React.Fragment>
    );
}