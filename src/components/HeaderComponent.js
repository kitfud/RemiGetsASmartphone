import React, {Component} from 'react';
import {Navbar,NavbarBrand,Jumbotron} from 'reactstrap';

class Header extends Component {
    render(){
        return(
            <React.Fragment>
                <Navbar dark>
                    <div className ="container">
                        <NavbarBrand href="/">
                            Remi Gets A Smartphone
                        </NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className = "container">
                        <div className = "row row-header">
                            <div className= "col-12 col-sm-6">
                                Remi Gets A Smartphone:
                            </div>
                            <p>An interactive story book</p>

                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        )
    }
}

export default Header;