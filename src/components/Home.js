
import React, {Component} from 'react'
import ComponentV1 from './v1/SectionOne';
import ComponentV2 from './v2/SectionTwo';

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
                  
        <ComponentV1 />
        <ComponentV2 />

         {/* {this.state.allData.map((data) => (
                console.log(data)
            ))} */}
      </React.Fragment>
    )
  }
}