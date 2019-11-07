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

                        <div className="col-12 col-s-12 mb-10">

                            {props.allData.slice(17, 18).map((data) => (

                                <BoxEleven key={data.id} data ={{
                                    key:data.id,
                                    image:'http://thumbor-stg.assettype.com/'+data["hero-image-s3-key"],
                                    title:data.headline,
                                    tag:'বাংলা গান',                          
                                    time:'১৬ মিনিট আগে'                           
                                }}/>
                            ))}

                        </div>                    

                        {props.allData.slice(0, 4).map((data) => (

                            <div key={data.id} className="col-3 col-s-12">

                                <BoxTweleve  data ={{
                                    key:data.id,
                                    image:'http://thumbor-stg.assettype.com/'+data["hero-image-s3-key"],
                                    title:data.headline
                                                            
                                }}/>

                            </div>
                        
                        ))}                       

                    </div>
                </div>

            </div>
        </React.Fragment>
    );
}