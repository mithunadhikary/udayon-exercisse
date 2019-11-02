import React from 'react';
import Heading from '../../components/common/Header';
import BoxOne from '../../components/common/BoxOne';
import image1 from '../../images/news/image-1.png';
import image2 from '../../images/news/image-2.png';
import image3 from '../../images/news/image-3.png';
import image4 from '../../images/news/image-4.png';

export default function SectionOne(props) {
    
    const DownIcon = require('../../images/common/down-arrow.png');

    return (
        
        <React.Fragment>
            <div className="container">
                <Heading headerTitle={"আমার পছন্দ"}/>

                <div className="grid">

                    <div className="col-3">
                        <BoxOne data ={{
                            image:image1,
                            title:'নাটোরে বিশ্বভারতী',
                            excerpt: 'আগের চুক্তি শেষ। আগামী চার বছরের চুক্তি করার আগে ফ্র্যাঞ্চাইজিগুলোর সঙ্গে কথা বলে নিচ্ছে বিপিএল'
                        }}/>
                    </div>

                    <div className="col-3">
                        <BoxOne data ={{
                            image:image2,
                            title:'আজ থেকে জয়া ও প্রসেনজিৎকে নিয়ে',
                            excerpt: 'আগের চুক্তি শেষ। আগামী চার বছরের চুক্তি করার আগে ফ্র্যাঞ্চাইজিগুলোর সঙ্গে কথা বলে নিচ্ছে বিপিএল'
                        }}/>
                    </div>

                    <div className="col-3">
                        <BoxOne data ={{
                            image:image3,
                            title:'‘ভারত-বাংলাদেশ ফিল্ম অ্যাওয়ার্ড’ ২১ অক্টোবর',
                            excerpt: 'আগের চুক্তি শেষ। আগামী চার বছরের চুক্তি করার আগে ফ্র্যাঞ্চাইজিগুলোর সঙ্গে কথা বলে নিচ্ছে বিপিএল'
                        }}/>
                    </div>

                    <div className="col-3">
                        <BoxOne data ={{
                            image:image4,
                            title:'মেয়েকে নিয়ে অস্ট্রেলিয়ায় গাইতে যাচ্ছেন ন্যান্‌সি',
                            excerpt: 'আগের চুক্তি শেষ। আগামী চার বছরের চুক্তি করার আগে ফ্র্যাঞ্চাইজিগুলোর সঙ্গে কথা বলে নিচ্ছে বিপিএল'
                        }}/>
                    </div>
                   

                </div>
            </div>
        </React.Fragment>
    );
}