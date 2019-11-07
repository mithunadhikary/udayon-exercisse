
import React, {Component} from 'react'
import ComponentV1 from './v1/SectionOne';
import ComponentV2 from './v2/SectionTwo';
import ComponentV3 from './v3/SectionThree';
import ComponentV4 from './v4/SectionFour';
import ComponentV5 from './v5/SectionFive';
import ComponentV6 from './v6/SectionSix';

export default class Home extends Component {
	constructor(props){
		super(props)

        this.state = {
            allData: [],
        }
	}  

	componentDidMount (){
      this.fetchData()
  }

    async fetchData() {
        const {stories} = await  window.API.fetchPopularDatas();
        this.setState({
            allData: stories
        })
    }


  render() {
    return(
        
      <React.Fragment>
        <ComponentV1 allData={this.state.allData}/>         
        <ComponentV2 allData={this.state.allData}/>
        <ComponentV3 allData={this.state.allData}/>
        <ComponentV6 allData={this.state.allData}/>
        <ComponentV4 allData={this.state.allData}/>
        <ComponentV5 allData={this.state.allData}/> 

         {/* {this.state.allData.map((data) => (
                console.log(data)
            ))} */}
      </React.Fragment>
    )
  }
}