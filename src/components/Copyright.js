import React from 'react';

export default function Copyright(props) {
    return (
        <React.Fragment>
            <div className="container">
                <div className="grid mb-15">
                    <div className="col-3">
                        <span className="f-color font-size-14">© প্রথম আলো ২০১৯</span>
                    </div> 
                    <div className="col-6">
                        <ul className="copyright-menu">
                            <li>
                                <a className="font-size-14 pl-15 pr-15 f-color" href="#">
                                    Terms & Condition
                                </a>
                            </li>
                            <li>
                                <a className="font-size-14 pl-15 pr-15 f-color" href="#">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a className="font-size-14 pl-15 pr-15 f-color" href="#">
                                    About
                                </a>
                            </li>
                            <li>
                                <a className="font-size-14 pl-15 pr-15 f-color" href="#">
                                    Advertise
                                </a>
                            </li>
                            <li>
                                <a className="font-size-14 pl-15 pr-15 f-color" href="#">
                                     Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>  
                    <div className="col-3 right-align">
                        <span className="f-color font-size-14">সম্পাদক ও প্রকাশক: মতিউর রহমান</span>
                    </div>  
                </div>     
            </div>
        </React.Fragment>
    );
}