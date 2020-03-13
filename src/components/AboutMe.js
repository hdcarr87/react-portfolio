import React from "react";
import { Col, Card, CardHeader, CardBody } from "reactstrap";
import "../styles/AboutMe.css"

const AboutMe = props => {
    return (
        <Col>
            <Card>
                <CardHeader>
                    <h1>About Me</h1>
                </CardHeader>
                <CardBody>
                    <h2>
                        <img src={`${process.env.PUBLIC_URL}/images/profilepic2.jpg`} alt="a picture of me" />
                    </h2>
                    <h3>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        I am a Colorado native and love this state!  I grew up in Boulder, but my husband and I live in Arvada with our 2 dogs.  We enjoy watching Colorado sports, especially the Broncos.  We get away to my family cabin in Red Feather Lakes whenever we can.
                    </h3>

                                 
                </CardBody>
            </Card>
        </Col>
    )
}

export default AboutMe;