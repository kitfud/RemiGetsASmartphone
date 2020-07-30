import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

function Footer () {

   

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
   
    return(
 
        <React.Fragment>
        <div className = "footer">
       
                    <div className ="container">
                        <div className = "row ">
                          
        
                                <div className="col-8">
                                <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Links</Button>
                                <Collapse id="Dcollapse" isOpen={isOpen}>
        <Card >
          <CardBody >
          <ul className = "list-unstyled">
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/art">Artwork</Link></li>
                                </ul>
          </CardBody>
        </Card>
      </Collapse>
                              
                                
                                </div>
                                
        
                                <div  className = 'col-1'>
                            
                                             
                        <h4  >Remi@</h4>  
                        <a  className="btn btn-social-icon btn-instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/rembotthecat/"><i className="fa fa-instagram"></i></a>
                   
                           
                          
                              
                            </div>  
                        
                          
                        </div>
                      
                    </div>
        
              
                    
                </div>
                
                <span style={{marginBottom:"2px",marginTop:"1px"}}>
                     © Copyright 2020 Kit Fuderich + Rita Chen
                </span>
        
               
              
          </React.Fragment >
        
      

  
      
    )

}


export default Footer