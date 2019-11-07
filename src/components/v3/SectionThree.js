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
            <div className="container border-bottom s-border-none pb-20 mb-30">
                <Heading headerTitle={"অর্থনীতি"}/>

                <div className="grid">

                    <div className="col-6 col-s-12 border-right pr-12 s-border-none s-border-bottom s-pb-10 s-p-r-0">
                        {props.allData.slice(13, 14).map((data) => (

                            <BoxFour key={data.id} data ={{
                                key:data.id,
                                image:'http://thumbor-stg.assettype.com/'+data["hero-image-s3-key"],
                                title:data.headline,
                                tag:'বাংলা গান',
                                excerpt: 'আগের চুক্তি শেষ। আগামী চার বছরের চুক্তি করার আগে ফ্র্যাঞ্চাইজিগুলোর সঙ্গে কথা বলে নিচ্ছে বিপিএল. আগের চুক্তি শেষ। আগামী চার বছরের চুক্তি করার…',
                                time:'১৬ মিনিট আগে'                           
                            }}/>
                        ))}                       
                    </div> 
                    
                    <div className="col-6 col-s-12">
                        {props.allData.slice(14, 17).map((data) => (

                            <BoxFive key={data.id} data ={{
                                key:data.id,
                                image:'http://thumbor-stg.assettype.com/'+data["hero-image-s3-key"],
                                title:data.headline,
                                tag:'বাংলা গান',
                                excerpt: 'আগের চুক্তি শেষ। আগামী চার বছরের চুক্তি করার আগে ফ্র্যাঞ্চাইজিগুলোর সঙ্গে কথা বলে নিচ্ছে বিপিএল. আগের চুক্তি শেষ। আগামী চার বছরের চুক্তি করার…',
                                time:'১৬ মিনিট আগে'                           
                            }}/>
                        ))}                        
                    </div>                 
                   

                </div>
            </div>
        </React.Fragment>
    );
}