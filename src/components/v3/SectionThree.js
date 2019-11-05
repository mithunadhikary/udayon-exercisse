import React from 'react';
import Heading from '../../components/common/Header';
import BoxFour from '../../components/common/BoxFour';
import BoxFive from '../../components/common/BoxFive';
import image1 from '../../images/news/image-1.png';
import image2 from '../../images/news/image-2.png';
import image5 from '../../images/news/image-5.png';
import image6 from '../../images/news/image-6.png';


export default function SectionThree(props) {
    
    return (
        
        <React.Fragment>
            <div className="container border-bottom pb-20 mb-30">
                <Heading headerTitle={"অর্থনীতি"}/>

                <div className="grid">

                    <div className="col-6 col-s-12 border-right pr-12 s-border-none s-p-r-0">
                        <BoxFour data ={{
                            image:image6,
                            title:'ঢাকা ওয়াসা বিল কালেকশন অ্যাওয়ার্ড পেল',
                            excerpt: 'আগের চুক্তি শেষ। আগামী চার বছরের চুক্তি করার আগে ফ্র্যাঞ্চাইজিগুলোর সঙ্গে কথা বলে নিচ্ছে বিপিএল. আগের চুক্তি শেষ। আগামী চার বছরের চুক্তি করার…',
                            tag:'বাংলা গান',
                            time:'১৬ মিনিট আগে' 
                        }}/>
                    </div> 
                    
                    <div className="col-6 col-s-12">
                        <BoxFive data ={{
                            image:image1,
                            title:'জাতীয় ফার্নিচার মেলা শুরু, আসবাব রপ্তানি বাড়াতে বন্ড–সুবিধা চান উদ্যোক্তারা',
                            excerpt: 'আগের চুক্তি শেষ। আগামী চার বছরের চুক্তি করার আগে ফ্র্যাঞ্চাইজিগুলোর সঙ্গে কথা বলে নিচ্ছে বিপিএল. আগের চুক্তি শেষ।',
                            tag:'বাংলা গান',
                            time:'১৬ মিনিট আগে' 
                        }}/>
                        <BoxFive data ={{
                            image:image2,
                            title:'মিয়ানমার থেকে ২৩৩ টন পেঁয়াজ এসেছে',
                            excerpt: 'আগের চুক্তি শেষ। আগামী চার বছরের চুক্তি করার আগে ফ্র্যাঞ্চাইজিগুলোর সঙ্গে কথা বলে নিচ্ছে বিপিএল. আগের চুক্তি শেষ।',
                            tag:'বাংলা গান',
                            time:'১৬ মিনিট আগে' 
                        }}/>
                        <BoxFive data ={{
                            image:image5,
                            title:'এক্সেল শিট থেকে শতকোটি টাকার কোম্পানি',
                            excerpt: 'আগের চুক্তি শেষ। আগামী চার বছরের চুক্তি করার আগে ফ্র্যাঞ্চাইজিগুলোর সঙ্গে কথা বলে নিচ্ছে বিপিএল. আগের চুক্তি শেষ।',
                            tag:'বাংলা গান',
                            time:'১৬ মিনিট আগে' 
                        }}/>
                    </div>                 
                   

                </div>
            </div>
        </React.Fragment>
    );
}