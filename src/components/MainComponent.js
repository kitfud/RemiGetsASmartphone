import React, {Component} from 'react'
import Home from './HomeComponent.js';
import About from './AboutComponent.js';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SLIDES } from '../shared/slides';

class Main extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          slides: SLIDES 
        };
      }

componentDidMount(){
    console.log(this.state.slides)
}

    render(){
        return(
<React.Fragment>
<Header/>

<Switch>
<Route path='/home' component={() =><Home slides={this.state.slides}/>} />
<Route path='/about' component={About} />
<Redirect to="/home" />
</Switch>

<Footer/>
</React.Fragment>            

        )
    }
}

export default Main;