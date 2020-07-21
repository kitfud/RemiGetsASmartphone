import React, {Component} from 'react'

function Slides ({slides}){
    if(slides !=null){
        const slideStory = slides.map((slide)=>
        <div key={slide.id}>{slide.name}</div> )
        return(
            slideStory
            )
    }
    else{
           return <div></div>;
    }
  

        
    }

class Home extends Component {
   
    
    render(){
        return(
<Slides slides ={this.props.slides}/>
        )
        }
}

export default Home;