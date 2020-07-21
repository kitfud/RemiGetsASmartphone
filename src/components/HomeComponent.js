import React, {Component} from 'react'
import { Loading } from './LoadingComponent';

function Slides ({slides, isLoading, errMess}){
    if (isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else


    if(slides !=null){
        const slideStory = 
        <div>HELLOW WORLD</div> 
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
<Slides slides ={this.props.slides.slides} isLoading={this.props.slides.isLoading} errMess={this.props.slides.errMess}/>
        )
        }
}

export default Home;