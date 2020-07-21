import React, {Component} from 'react';
import {Navbar,NavbarBrand,Jumbotron,Nav,NavbarToggler,Collapse,NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props);
        //this.toggleNav = this.toggleNav.bind(this);

        this.state={
            isNavOpen:false
        }
    }

    toggleNav=()=>{
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render(){
        return(
            <React.Fragment>
                <Navbar light >
                    <div className ="container">
                        <NavbarToggler onClick= {this.toggleNav}/>

                        <NavbarBrand  href="/">
                            <em> Remi Gets A Smartphone </em>
                        </NavbarBrand>
                        <Collapse isOpen = {this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className = "nav-link" to='/home'><span className="fa fa-home fa-la"></span>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className = "nav-link" to='/about'><span className="fa fa-list fa-la"></span>About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className = "nav-link" to='/art'><span className="fa fa-paint-brush fa-la"></span>Artwork</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className = "container">
                        <div className = "row row-header">
                            <div className= "col-12 col-sm-6">
                                Remi Gets A Smartphone
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        )
    }
}

export default Header;