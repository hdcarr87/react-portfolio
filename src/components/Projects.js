import React from "react";
import { Col, Card, CardHeader, CardBody } from "reactstrap";
import "../styles/Projects.css"

const Projects = props => {
    return (
        <Col>
            <Card>
                <CardHeader>
                    <h1>Projects</h1>
                </CardHeader>
                <CardBody>
                    <h2>
                        <img src={`${process.env.PUBLIC_URL}/images/nasapic.jpg`} alt="a picture of space" />
                    </h2>
                    <h3>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                            Space Port
                            <br></br>
                            <br></br>
                            <a rel="noopener noreferrer" href="http://url.com" target="_blank">https://hdcarr87.github.io/project-2/</a>
                    </h3>
                    <h4>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <img src={`${process.env.PUBLIC_URL}/images/traveLink.jpg`} alt="a picture of a plane" />
                    </h4>
                    <h3>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                        TraveLink
                        <br></br>
                        <br></br>
                        <br></br>
                        <a rel="noopener noreferrer" href="http://url.com" target="_blank">https://hdcarr87.github.io/project-1/</a>
                    </h3>
                    <h2>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                        <img src={`${process.env.PUBLIC_URL}/images/ocean.jpg`} alt="a picture of the ocean" />
                    </h2>
                    <h3>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Ocean Port
                        <br></br>
                        <br></br>
                        <br></br>
                        <a rel="noopener noreferrer" href="http://url.com" target="_blank">https://github.com/amandasimonds/ocean-port.git</a>
                    </h3>   
                </CardBody>
            </Card>
        </Col>
    )
}

export default Projects;