import React from 'react';
import Heading from '../../components/common/Header';
import BoxOne from '../../components/common/BoxOne';
import image1 from '../../images/news/image-1.png';
import image2 from '../../images/news/image-2.png';
import image3 from '../../images/news/image-3.png';
import image4 from '../../images/news/image-4.png';

export default function SectionOne(props) {
    
    return (
        
        <React.Fragment>
            
            <div className="container border-bottom pb-20 mb-40 border-bottom">
                <Heading headerTitle={"আমার পছন্দ"}/>

                <div className="grid">

                    {props.allData.slice(0, 1).map((data) => (
                        
                        <div key={data.id} className="col-3 col-m-6 col-s-12">
                            <BoxOne data ={{
                                image:'http://thumbor-stg.assettype.com/'+data["hero-image-s3-key"],
                                title:data.headline,
                                excerpt: data.subheadline
                            }}/>
                        </div>

                    ))}

                    {props.allData.slice(1, 4).map((data) => (
                        
                        <div key={data.id} className="col-3 col-m-6 col-s-12 s-img-r-h3-l s-p-n">
                            <BoxOne data ={{
                                image:'http://thumbor-stg.assettype.com/'+data["hero-image-s3-key"],
                                title:data.headline,
                                excerpt: data.subheadline
                            }}/>
                        </div>

                    ))}

                   

                </div>
            </div>
        </React.Fragment>
    );
}