import React, {Component, useState} from 'react'
import { Loading } from './LoadingComponent';
import { Link } from 'react-router-dom';
import {  Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Breadcrumb, BreadcrumbItem } from 'reactstrap';

const slideCollection = []




class Home extends Component {
    
    constructor(props){
        super(props);

        this.state = { activeIndex: 0 };
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.goToIndex = this.goToIndex.bind(this);
		this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);

    this.props.slides.slides.map(item=>
            slideCollection.push({src: item.image}))
        
    }
  
    onExiting() {
		this.animating = true;
	}

	onExited() {
		this.animating = false;
	}

	next() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === slideCollection.length - 1 ? 0 : this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
	}

	previous() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === 0 ? slideCollection.length - 1 : this.state.activeIndex - 1;
		this.setState({ activeIndex: nextIndex });
	}

	goToIndex(newIndex) {
		if (this.animating) return;
		this.setState({ activeIndex: newIndex });
    }
    
   
 
    
    render(){
        const { activeIndex } = this.state;

		const slides = slideCollection.map((item) => {
			return (
				<CarouselItem
					onExiting={this.onExiting}
					onExited={this.onExited}
                    key={item.src}
                    className = "itemStyle"
				>
					<img key={item.src} src={item.src} alt={item.altText} />

				</CarouselItem>
			);
		});


        return(
            <div className = "container">
            <div className="row row-content">
            <div className="col">
        	<div>
			
				<Carousel
					activeIndex={activeIndex}
					next={this.next}
					previous={this.previous}
				>
                   
                    {slides}
                       
					
                    <div className="row ">
                    <CarouselControl direction='prev' directionText='Previous' onClickHandler={this.previous} />
					<CarouselControl direction='next' directionText='Next' onClickHandler={this.next} />
                    <CarouselIndicators items={slideCollection} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    </div>
					
                    
				</Carousel>
			</div>




             </div>
        </div>

            </div>
          

        )
        }
}



export default Home;