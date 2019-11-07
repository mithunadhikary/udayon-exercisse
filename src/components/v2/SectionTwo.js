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
            <div className="container border-bottom s-border-none pb-20 mb-30">
                <Heading headerTitle={"বিনোদন"}/>

                <div className="grid">

                    <div className="col-4 col-s-12 ">

                        {props.allData.slice(6, 10).map((data) => (

                            <BoxTwo key={data.id} data ={{
                                key:data.id,
                                image:'http://thumbor-stg.assettype.com/'+data["hero-image-s3-key"],
                                title:data.headline,
                                tag:'ক্রিকেট',
                                time:'১৬ মিনিট আগে'                           
                            }}/>
                        ))}
                        
                    </div>

                    <div className="col-4 col-s-12 j-1-full border-left border-right pl-10 pr-10 s-border-none s-border-bottom s-pb-10 s-p-l-0 s-p-r-0">
                        
                        {props.allData.slice(8, 9).map((data) => (

                            <BoxThree key={data.id} data ={{
                                key:data.id,
                                image:'http://thumbor-stg.assettype.com/'+data["hero-image-s3-key"],
                                title:data.headline,
                                tag:'ক্রিকেট',
                                excerpt: 'প্রধান অতিথি শিরীন শারমিন চৌধুরী বলেন, ‘দুই বোনের এই অসাধারণ আয়োজনে আসতে পেরে আমার ভালো লাগছে',
                                time:'১৬ মিনিট আগে'                           
                            }}/>
                        ))}
                     
                    </div>

                    <div className="col-4 col-s-12 flex-right-img-none">

                        {props.allData.slice(9, 13).map((data) => (

                            <BoxTwo key={data.id} data ={{
                                key:data.id,
                                image:'http://thumbor-stg.assettype.com/'+data["hero-image-s3-key"],
                                title:data.headline,
                                tag:'বাংলা গান',
                                time:'১৬ মিনিট আগে'                           
                            }}/>
                        ))}
                        
                    </div>
                   

                </div>
            </div>
        </React.Fragment>
    );
}