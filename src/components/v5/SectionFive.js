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
            <div className="container border-bottom s-border-none pb-20 mb-30">
                
                <div className="grid">

                    <div className="col-3 col-t-6 col-s-12 s-mb-20">
                        <HeadingTwo headerTitle={"আন্তর্জাতিক"}/>

                        {props.allData.slice(10, 11).map((data) => (

                            <BoxEight key={data.id} data ={{
                                image:'http://thumbor-stg.assettype.com/'+data["hero-image-s3-key"],
                                title:data.headline                                                           
                            }}/>                            

                        ))}
                        
                        {props.allData.slice(11, 13).map((data) => (

                            <BoxNine key={data.id} data ={{
                                title:data.headline                                                           
                            }}/>                            

                        ))}

                        <BoxTen data ={{
                            title:'আরও খবর'                            
                        }}/>
                    </div> 

                    <div className="col-3 col-t-6 col-s-12 s-mb-20">
                        <HeadingTwo headerTitle={"জীবনযাপন"}/>

                        {props.allData.slice(13, 14).map((data) => (

                            <BoxEight key={data.id} data ={{
                                image:'http://thumbor-stg.assettype.com/'+data["hero-image-s3-key"],
                                title:data.headline                                                           
                            }}/>                            

                        ))}

                        {props.allData.slice(14, 16).map((data) => (

                            <BoxNine key={data.id} data ={{
                                title:data.headline                                                           
                            }}/>                            

                        ))}

                        <BoxTen data ={{
                            title:'আরও খবর'                            
                        }}/>
                    </div> 

                    <div className="col-3 col-t-6 col-s-12 s-mb-20">
                        <HeadingTwo headerTitle={"উত্তর আমেরিকা"}/>

                        {props.allData.slice(16, 17).map((data) => (

                            <BoxEight key={data.id} data ={{
                                image:'http://thumbor-stg.assettype.com/'+data["hero-image-s3-key"],
                                title:data.headline                                                           
                            }}/>                            

                        ))}
                       
                        {props.allData.slice(17, 19).map((data) => (

                            <BoxNine key={data.id} data ={{
                                title:data.headline                                                           
                            }}/>                            

                        ))}
                       
                        <BoxTen data ={{
                            title:'আরও খবর'                            
                        }}/>
                    </div> 

                    <div className="col-3 col-t-6 col-s-12 s-mb-20">
                        <HeadingTwo headerTitle={"ENGLISH"}/>
                       
                        {props.allData.slice(19, 20).map((data) => (

                            <BoxEight key={data.id} data ={{
                                image:'http://thumbor-stg.assettype.com/'+data["hero-image-s3-key"],
                                title:data.headline                                                           
                            }}/>                            

                        ))}

                        {props.allData.slice(0, 2).map((data) => (

                            <BoxNine key={data.id} data ={{
                                title:data.headline                                                           
                            }}/>                            

                        ))}
                      
                        <BoxTen data ={{
                            title:'More'                            
                        }}/>
                    </div> 

                </div>
            </div>
        </React.Fragment>
    );
}