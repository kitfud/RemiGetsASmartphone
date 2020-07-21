import React, {Component} from 'react'
import Home from './HomeComponent.js';
import About from './AboutComponent.js';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    render(){
        return(
<React.Fragment>
<Header/>

<Switch>
<Route path='/home' component={Home} />
<Route path='/about' component={About} />
<Redirect to="/home" />
</Switch>

<Footer/>
</React.Fragment>            

        )
    }
}

export default Main;