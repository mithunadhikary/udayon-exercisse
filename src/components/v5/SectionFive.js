import React from 'react';
import HeadingTwo from '../../components/common/HeaderTwo';
import BoxEight from '../../components/common/BoxEight';
import BoxNine from '../../components/common/BoxNine';
import BoxTen from '../../components/common/BoxTen';
import image11 from '../../images/news/image-11.png';
import image12 from '../../images/news/image-12.png';


export default function SectionFive(props) {
    
    return (
        
        <React.Fragment>
            <div className="container border-bottom pb-20 mb-30">
                
                <div className="grid">

                    <div className="col-3">
                        <HeadingTwo headerTitle={"আন্তর্জাতিক"}/>
                        <BoxEight data ={{
                            image:image11,
                            title:'জম্মু-কাশ্মীরে স্বাভাবিক পরিস্থিতি ফেরাতে আদালতের নির্দেশ'                            
                        }}/>

                        <BoxNine data ={{
                            title:'এনআরসি ও ভাষানীতি নিয়ে ভূমিকায় কলকাতায় বুদ্ধিজীবীদের ক্ষোভ'                            
                        }}/>

                        <BoxNine data ={{
                            title:'আফগান প্রেসিডেন্টের নির্বাচনী সমাবেশে বোমা হামলায় নিহত ২৪'                            
                        }}/>

                        <BoxTen data ={{
                            title:'আরও খবর'                            
                        }}/>
                    </div> 

                    <div className="col-3">
                        <HeadingTwo headerTitle={"জীবনযাপন"}/>
                        <BoxEight data ={{
                            image:image12,
                            title:'দেশলাইয়ের বাক্সে লুকিয়ে রাখা যাবে মসলিন, সিল্ক, নকশিকাঁথাসহ কত'                            
                        }}/>

                        <BoxNine data ={{
                            title:'ঈদের দিন হালকা মেকআপ নেওয়াটাই হবে বুদ্ধিমানের কাজ'                            
                        }}/>

                        <BoxNine data ={{
                            title:'সন্তানের চলার পথ রুদ্ধ করে দিচ্ছেন না তো?'                            
                        }}/>

                        <BoxTen data ={{
                            title:'আরও খবর'                            
                        }}/>
                    </div> 

                    <div className="col-3">
                        <HeadingTwo headerTitle={"উত্তর আমেরিকা"}/>
                        <BoxEight data ={{
                            image:image11,
                            title:'পরীক্ষায় মেয়ের উত্তর ঠিক করতে ঘুষ, মার্কিন অভিনেত্রীর সাজা'                            
                        }}/>

                        <BoxNine data ={{
                            title:'মার্কিন সেনাবাহিনীতে বাংলাদেশি আফিয়া'                            
                        }}/>

                        <BoxNine data ={{
                            title:'লাইসেন্স প্লেটের জন্য পঞ্চম নকশাই নির্বাচিত হলো শেষ পর্যন্ত'                            
                        }}/>

                        <BoxTen data ={{
                            title:'আরও খবর'                            
                        }}/>
                    </div> 

                    <div className="col-3">
                        <HeadingTwo headerTitle={"ENGLISH"}/>
                        <BoxEight data ={{
                            image:image12,
                            title:'Saudi Arabia sends back 160 Bangladeshi workers'                            
                        }}/>

                        <BoxNine data ={{
                            title:'Arrested man killed in ‘gunfight’Arrested man killed in ‘gunfight’'                            
                        }}/>

                        <BoxNine data ={{
                            title:'‘The essence of democracy is participation, freedom of expression’'                            
                        }}/>

                        <BoxTen data ={{
                            title:'More'                            
                        }}/>
                    </div> 

                </div>
            </div>
        </React.Fragment>
    );
}