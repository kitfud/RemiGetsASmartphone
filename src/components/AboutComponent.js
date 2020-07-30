import React, {Component} from 'react'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';

class About extends Component {
    render(){
        return(
            <div style={{marginBottom:"20px"}} className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About</h3>
                    <hr />
                </div>                
            </div>
            <div style ={{tableStyle}}className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Backstory:</h2>
                    <p>Rita and I thought it would be great to make a storybook based on our cat, Remi, and how she travelled to Seattle from Pennsylvania and still wants to keep in touch with her best cat pal, Tara.</p> 
                </div>
                <div className="col-12 col-md-6">
                <Card>
                        <CardHeader className=" text-black">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Project Started:</dt>
                                <dd className="col-6">July, 2020</dd>
                                <dt className="col-6">Illustrations:</dt>
                                <dd className="col-6">Rita</dd>
                                <dt className="col-6">Story:</dt>
                                <dd className="col-6">Rita + Kit</dd>
                                <dt className="col-6">Watercolors:</dt>
                                <dd className="col-6">Kit</dd>
                                <dt className="col-6">Webdev:</dt>
                                <dd className="col-6">Kit</dd>

                            </dl>
                        </CardBody>
                    </Card>
                </div>
                </div>

          
              
                
            </div>
          
       
        )
    }
}

const tableStyle = {
    padding: "20px",
    marginBottom:"20px"
}

export default About;