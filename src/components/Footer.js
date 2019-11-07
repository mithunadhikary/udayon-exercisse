import React from 'react';
import Logo from '../images/logo.png';

export default function Footer(props) {
    return (
        <React.Fragment>
            <div className="container">
                <div className="grid border-bottom mb-10">
                    <div className="col-8 col-t-12 s-align-center">
                        <a href="#">
                            <img src={Logo} alt="Logo" className="footer-logo" />
                        </a>
                        <ul className="footer-menu">
                            <li>
                                <a className="font-size-16 pl-0 pr-15" href="#">মোবাইল ভ্যাস</a>
                            </li>
                            <li>
                                <a className="font-size-16 pl-15 pr-15" href="#">ট্রাস্ট</a>
                            </li>
                            <li>
                                <a className="font-size-16 pl-15 pr-15" href="#">প্রতিচিন্তা</a>
                            </li>
                            <li>
                                <a className="font-size-16 pl-15 pr-15" href="#">কিশোর আলো</a>
                            </li>
                            <li>
                                <a className="font-size-16 pl-15 pr-15" href="#">এবিসি রেডিও</a>
                            </li>
                            <li>
                                <a className="font-size-16 pl-15 pr-15" href="#">বন্ধুসভা</a>
                            </li>
                            <li>
                                <a className="font-size-16 pl-15 pr-15" href="#">প্রথমা</a>
                            </li>
                        </ul>
                    </div> 
                    <div className="col-4 col-t-12">
                        
                    </div>   
                </div>     
            </div>
        </React.Fragment>
    );
}