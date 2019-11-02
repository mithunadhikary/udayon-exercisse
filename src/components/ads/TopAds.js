import React from 'react';
import AddOne from '../../images/ads/add-1.gif';

export default function TopAds(props) {
    return (
        <React.Fragment>
            <div className="bg-1 ptb-15 center-align">
                <a href="#">
                    <img src={AddOne} alt="AddOne" />
                </a>                
            </div>
        </React.Fragment>
    );
}