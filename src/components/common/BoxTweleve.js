import React from 'react';

export default function BoxTweleve(props) {
    return (
        <React.Fragment>
            <div className="position-relative">
                <img className="width100" src={props.data.image}/>
                <span className="video-icon-2"></span>
            </div>
            <h3 className="mt-5 mb-5 ml-5 mr-5 font-size-20 color7">
                {props.data.title}
            </h3>
             
        </React.Fragment>
    );
}