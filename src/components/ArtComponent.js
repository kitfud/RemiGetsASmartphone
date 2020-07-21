import React, {Component} from 'react'
import { Card, CardImg, CardText, CardTitle, Breadcrumb, BreadcrumbItem, CardImgOverlay,Button, Row, Col, CardBody } from 'reactstrap';
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
    const slideStory = slides.map((slide)=>
           <div className="col-12 col-md-4" key={slide._id}>
            <Card >
            <CardBody>
            <CardImg width="100%" top src={slide.image} alt="" />
            </CardBody>
            </Card> 
            </div>
    )


        return(
            slideStory
            )
    }
    else{
           return <div>Something unexpected happened! No images to display.</div>;
    }
  

        
    }
class Art extends Component {
    
    render(){
        return(
            <React.Fragment>
            <div>Artwork:</div>
            <div className="container">
<div className="row">
<Slides slides = {this.props.slides.slides} isLoading={this.props.slides.isLoading} 
            errMess={this.props.slides.errMess}/>
</div>
            </div>
           
            </React.Fragment>  

        )
    }
}

export default Art;