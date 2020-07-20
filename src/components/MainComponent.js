import React, {Component} from 'react'
import Home from './HomeComponent.js'
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {
    render(){
        return(
<React.Fragment>
<Header/>
<Home/>
<Footer/>
</React.Fragment>            

        )
    }
}

export default Main;