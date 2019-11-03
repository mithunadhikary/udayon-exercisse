import React from 'react';
import HeadingThree from '../../components/common/HeaderThree';
import BoxEleven from '../../components/common/BoxEleven';
import BoxTweleve from '../../components/common/BoxTweleve';

import image13 from '../../images/news/image-13.png';
import image14 from '../../images/news/image-14.png';
import image15 from '../../images/news/image-15.png';
import image16 from '../../images/news/image-16.png';
import image17 from '../../images/news/image-17.png';


export default function SectionSix(props) {
    
    return (
        
        <React.Fragment>
            <div className="bg-2">
            
                <div className="container mb-30 pb-30">
                    <HeadingThree headerTitle={"ভিডিও"}/>

                    <div className="grid">

                        <div className="col-12 mb-10">
                            <BoxEleven data ={{
                                image:image13,
                                title:'ফমুর্লা ওয়ান ট্র্যাকে বাংলাদেশের তৌহিদ আনোয়ার',
                                tag:'বাংলা গান',
                                time:'১৬ মিনিট আগে'                            
                            }}/>
                        </div>  

                        <div className="col-3">
                            
                            <BoxTweleve data ={{
                                image:image14,
                                title:'নাটোরে বিশ্বভারতী শান্তিনিকেতনের পরিবেশনায় ‘বর্ষামঙ্গল’'                                                           
                            }}/>

                        </div>

                        <div className="col-3">
                            
                            <BoxTweleve data ={{
                                image:image15,
                                title:'আজ থেকে জয়া ও প্রসেনজিৎকে নিয়ে ‘রবিবার’'                                                           
                            }}/>

                        </div>

                        <div className="col-3">
                            
                            <BoxTweleve data ={{
                                image:image16,
                                title:'‘ভারত-বাংলাদেশ ফিল্ম অ্যাওয়ার্ড’ ২১ অক্টোবর'                                                           
                            }}/>

                        </div>

                        <div className="col-3">
                            
                            <BoxTweleve data ={{
                                image:image17,
                                title:'মেয়েকে নিয়ে অস্ট্রেলিয়ায় গাইতে যাচ্ছেন ন্যান্‌সি'                                                           
                            }}/>

                        </div>

                    </div>
                </div>

            </div>
        </React.Fragment>
    );
}