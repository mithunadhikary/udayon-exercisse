import React from 'react';
import MenuIcon from '../../images/common/menu.png';
import SearchIcon from '../../images/common/search.png';
import CoundIcon from '../../images/common/cloud.png';
import NotificationIcon from '../../images/common/notification.png';
import DownIcon from '../../images/common/down-arrow.png';
import Logo from '../../images/logo.png';

export default function Top(props) {
    return (
        <React.Fragment>
            <div className="grid pt-15 pb-15">
                <div className="col-3">
                    <div className="row">
                        <div className="full-width">
                            <img className="mr-30" src={MenuIcon} alt="Menu" />
                            <img src={SearchIcon} alt="Search" />
                        </div>
                    </div>
                    <div className="row mt-10">
                        <div className="full-width">
                            <span className="float-left f-color f-weight-bold mr-10">মঙ্গলবার</span>
                            <span className="float-left f-color mr-10">১৮ জুন ২০১৯, ঢাকা</span>
                            <span className="float-left f-color">
                                <img className="float-left mr-5" src={CoundIcon} alt="Cloud Icon" /> ২৭°সে.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-6 center-align">
                    <a href="#">
                        <img src={Logo} alt="Logo" className="" />
                    </a>                    
                </div>
                <div className="col-3">
                    
                    <div className="float-right border-1 pt-5 pr-15 pb-5 pl-35">
                        <span className="color3 pr-5">লগইন</span>
                        <img src={DownIcon} alt="Down" className="width-10" />
                    </div>
                    <img src={NotificationIcon} alt="Notification" className="float-right mt-5 mr-20" />

                </div>
            </div>
        </React.Fragment>
    );
}