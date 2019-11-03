import React from 'react';
import Heading from '../../components/common/Header';
import BoxSix from '../../components/common/BoxSix';
import BoxSeven from '../../components/common/BoxSeven';
import image7 from '../../images/news/image-7.png';
import image8 from '../../images/news/image-8.png';
import image9 from '../../images/news/image-9.png';
import image10 from '../../images/news/image-10.png';


export default function SectionFive(props) {
    
    return (
        
        <React.Fragment>
            <div className="container border-bottom pb-20 mb-30">
                <Heading headerTitle={"বিজ্ঞান ও প্রযুক্তি"}/>

                <div className="grid">

                    <div className="col-6 border-right pr-12">
                        <BoxSix data ={{
                            image:image7,
                            title:'ডেটা জার্নালিজম–বিষয়ক প্রশিক্ষণ কর্মশালা অনুষ্ঠিত'                            
                        }}/>
                    </div> 
                    
                    <div className="col-2">
                        <BoxSeven data ={{
                            image:image8,
                            title:'স্মার্টফোন হারানোর আগে ও পরে কী করবেন'                            
                        }}/>
                    </div>  

                    <div className="col-2">
                        <BoxSeven data ={{
                            image:image9,
                            title:'টিকে থাকতে অ্যাপলের নতুন কৌশল'                            
                        }}/>
                    </div>  

                    <div className="col-2">
                        <BoxSeven data ={{
                            image:image10,
                            title:'মোবাইল থেকে যে ২৪ অ্যাপ এখনই সরিয়ে'                            
                        }}/>
                    </div>                 
                   

                </div>
            </div>
        </React.Fragment>
    );
}