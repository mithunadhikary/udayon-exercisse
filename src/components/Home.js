
import React, {Component} from 'react'
import ComponentV1 from './v1/SectionOne';

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

         {/* {this.state.allData.map((data) => (
                console.log(data)
            ))} */}
      </React.Fragment>
    )
  }
}