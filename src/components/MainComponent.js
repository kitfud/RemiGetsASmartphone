import React, {Component} from 'react'
import Home from './HomeComponent.js';
import About from './AboutComponent.js';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Art from './ArtComponent';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchSlides } from '../redux/ActionCreators';

const mapDispatchToProps = dispatch => ({
    fetchSlides: ()=>dispatch(fetchSlides())
})

const mapStateToProps = state =>{
    return{
        slides: state.slides
    }
}


class Main extends Component {

    constructor(props) {
        super(props);
    
      }

 
componentDidMount(){
    this.props.fetchSlides();
}

    render(){
        return(
<React.Fragment>
<Header/>

<Switch>
<Route path='/home' component={() =><Home slides={this.props.slides}/>} />
<Route exact path='/about' component={About} />
<Route exact path='/art' component={()=> <Art slides={this.props.slides}/>} />
<Redirect to="/home" />
</Switch>

<Footer/>
</React.Fragment>            

        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));