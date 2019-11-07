import React from 'react';

export default function BoxTweleve(props) {
    return (
        <React.Fragment>
            <a href="#">
                <div className="s-row-flex-d-r">
                    <div className="position-relative flex-1">
                        <img className="width100" src={props.data.image}/>
                        <span className="video-icon-2"></span>
                    </div>
                    <h3 className="mt-5 mb-5 ml-5 mr-5 pl-5 pr-5 font-size-18 line-height-24 color7 flex-1">
                        {props.data.title}
                    </h3>
                </div>
            </a>
             
        </React.Fragment>
    );
}