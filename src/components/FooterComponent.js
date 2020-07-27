import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
render(){
    return(
  <React.Fragment>
<div className = "footer">
            <div className ="container">
                <div className = "row ">
                  

                        <div className= "col-3">
                        <h5>Links</h5>
                        <ul className = "list-unstyled">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/art">Artwork</Link></li>
                        </ul>
                        
                        </div>
                        

                        <div className = 'col-3'>
                        <h4 style={{marginBottom:"0px",fontSize:"18px"}}>Remi@</h4>  
                        <a  className="btn btn-social-icon btn-instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/rembotthecat/"><i className="fa fa-instagram"></i></a>
                        </div>

                
                  
                </div>

            </div>

           
            
        </div>
         <div className = "container">
         <div clasName = "row">
             © Copyright 2020 Kit Fuderich
             </div>

         </div>
      
  </React.Fragment>
  
      
    )
}
}



export default Footer