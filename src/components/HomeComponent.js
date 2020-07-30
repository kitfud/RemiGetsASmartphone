import React, {Component} from 'react'
import uuid from 'uuid'




import {  Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
     } from 'reactstrap';

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

		
   
        
	}

	componentDidMount(){

		if(!this.props.slidesLoaded){
			this.props.slides.slides.map((item)=>
			slideCollection.push({url: item.image, src:uuid()}),
			
			)
		}

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
	

		

		const slides = slideCollection.map(item => {
			return (
				<CarouselItem
					onExiting={this.onExiting}
					onExited={this.onExited}
                    key={uuid()}
					className = "itemStyle"
					
				>
					<img  src={item.url} alt={item.altText} />

				</CarouselItem>
			);
		});


        return(
	
 			<div className = "container">
            <div className="row row-content align-items-center">
            <div className="col">
        	
			

				<Carousel
					activeIndex={activeIndex}
					next={this.next}
					previous={this.previous}
					id="myCarousel"
					interval={10000}
				
					
				>
                   
                    {slides}
                   
					
                    
				</Carousel>
			
				  
				   

				<CarouselControl href="#carousel-example-generic" direction='prev' directionText='Previous' onClickHandler={this.previous}/>
				<CarouselControl href="#carousel-example-generic" direction='next' directionText='Next' onClickHandler={this.next} />
				<CarouselIndicators items={slideCollection} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
             </div>
			 
        </div>

	

            </div>

   

          
	
           

        )
        }
}



export default Home;