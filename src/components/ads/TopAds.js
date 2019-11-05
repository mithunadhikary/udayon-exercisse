import React from 'react';
import AddOne from '../../images/ads/add-1.gif';
import AddOneMobile from '../../images/ads/m-ad-1.gif';

export default function TopAds(props) {
    return (
        <React.Fragment>
            <div className="bg-1 pt-15 pb-15 center-align">
                <a href="#">
                    <img src={AddOne} alt="AddOne" className="add-show-desktop" />
                    <img src={AddOneMobile} alt="AddOne" className="add-show-mobile" />
                </a>                
            </div>
        </React.Fragment>
    );
}