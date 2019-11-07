import React from 'react';
import Heading from '../../components/common/Header';
import BoxSix from '../../components/common/BoxSix';
import BoxSeven from '../../components/common/BoxSeven';
import image7 from '../../images/news/image-7.png';
import image8 from '../../images/news/image-8.png';
import image9 from '../../images/news/image-9.png';
import image10 from '../../images/news/image-10.png';


export default function SectionFour(props) {
    
    return (
        
        <React.Fragment>
            <div className="container border-bottom s-border-none pb-20 mb-30">
                <Heading headerTitle={"বিজ্ঞান ও প্রযুক্তি"}/>

                <div className="grid">

                    {props.allData.slice(6, 7).map((data) => (

                        <div key={data.id} className="col-6 col-t-3 col-s-12 border-right s-border-none s-border-bottom pr-12 s-p-r-0">

                            <BoxSix data ={{
                                key:data.id,
                                image:'http://thumbor-stg.assettype.com/'+data["hero-image-s3-key"],
                                title:data.headline
                                                        
                            }}/>

                        </div>

                    ))}

                    {props.allData.slice(7, 10).map((data) => (

                        <div key={data.id} className="col-2 col-t-3 col-s-12 s-border-bottom s-pb-15">

                            <BoxSeven data ={{
                                key:data.id,
                                image:'http://thumbor-stg.assettype.com/'+data["hero-image-s3-key"],
                                title:data.headline
                                                        
                            }}/>

                        </div>

                    ))}

                </div>
            </div>
        </React.Fragment>
    );
}