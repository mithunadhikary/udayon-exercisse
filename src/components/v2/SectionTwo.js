import React from 'react';
import Heading from '../../components/common/Header';
import BoxOne from '../../components/common/BoxOne';
import BoxTwo from '../../components/common/BoxTwo';
import BoxThree from '../../components/common/BoxThree';
import image1 from '../../images/news/image-1.png';
import image2 from '../../images/news/image-2.png';
import image3 from '../../images/news/image-3.png';
import image4 from '../../images/news/image-4.png';
import image5 from '../../images/news/image-5.png';

export default function SectionTwo(props) {
    
    return (
        
        <React.Fragment>
            <div className="container border-bottom pb-20 mb-30">
                <Heading headerTitle={"বিনোদন"}/>

                <div className="grid">

                    <div className="col-4 col-s-12 ">
                        <BoxTwo data ={{
                            image:image1,
                            title:'নাটোরে বিশ্বভারতী শান্তিনিকেতনের পরিবেশনায় ‘বর্ষামঙ্গল’',
                            tag:'বাংলা গান',
                            time:'১৬ মিনিট আগে'                            
                        }}/>

                        <BoxTwo data ={{
                            image:image2,
                            title:'আজ থেকে জয়া ও প্রসেনজিৎকে নিয়ে ‘রবিবার’',
                            tag:'ক্রিকেট',
                            time:'১৬ মিনিট আগে' 
                        }}/>

                        <BoxTwo data ={{
                            image:image3,
                            title:'‘ভারত-বাংলাদেশ ফিল্ম অ্যাওয়ার্ড’ ২১ অক্টোবর',
                            tag:'ক্রিকেট',
                            time:'১৬ মিনিট আগে' 
                        }}/>

                        <BoxTwo data ={{
                            image:image4,
                            title:'মেয়েকে নিয়ে অস্ট্রেলিয়ায় গাইতে যাচ্ছেন ন্যান্‌সি',
                            tag:'ক্রিকেট',
                            time:'১৬ মিনিট আগে' 
                        }}/>
                    </div>

                    <div className="col-4 col-s-12 j-1-full border-left border-right pl-10 pr-10 s-border-none s-p-l-0 s-p-r-0">
                        <BoxThree data ={{
                            image:image5,
                            title:'শিল্পী পলিন, মডেল নিপুণ',
                            excerpt: 'প্রধান অতিথি শিরীন শারমিন চৌধুরী বলেন, ‘দুই বোনের এই অসাধারণ আয়োজনে আসতে পেরে আমার ভালো লাগছে',
                            tag:'বাংলা গান',
                            time:'১৬ মিনিট আগে' 
                        }}/>
                    </div>

                    <div className="col-4 col-s-12 flex-right-img-none">
                        <BoxTwo data ={{
                            image:image1,
                            title:'নাটোরে বিশ্বভারতী শান্তিনিকেতনের পরিবেশনায় ‘বর্ষামঙ্গল’',
                            tag:'বাংলা গান',
                            time:'১৬ মিনিট আগে'                            
                        }}/>

                        <BoxTwo data ={{
                            image:image2,
                            title:'আজ থেকে জয়া ও প্রসেনজিৎকে নিয়ে ‘রবিবার’',
                            tag:'ক্রিকেট',
                            time:'১৬ মিনিট আগে' 
                        }}/>

                        <BoxTwo data ={{
                            image:image3,
                            title:'‘ভারত-বাংলাদেশ ফিল্ম অ্যাওয়ার্ড’ ২১ অক্টোবর',
                            tag:'ক্রিকেট',
                            time:'১৬ মিনিট আগে' 
                        }}/>

                        <BoxTwo data ={{
                            image:image4,
                            title:'মেয়েকে নিয়ে অস্ট্রেলিয়ায়',
                            tag:'ক্রিকেট',
                            time:'১৬ মিনিট আগে' 
                        }}/>
                    </div>
                   

                </div>
            </div>
        </React.Fragment>
    );
}