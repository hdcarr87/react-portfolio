import React from "react";
import { Col, Card, CardHeader, CardBody, Container } from "reactstrap";
import "../styles/ContactMe.css"

const ContactMe = props => {
    return (
        <Col>
            <Card>
                <CardHeader>
                    <h1>Contact Me</h1>
                </CardHeader>
                <CardBody>
                    <Container>
                        hdmanley87@gmail.com
                        <br></br>
                        GitHub: <a rel="noopener noreferrer" href="http://url.com" target="_blank">https://github.com/hdcarr87</a>
                        <br></br>
                        LinkedIn: <a rel="noopener noreferrer" href="http://url.com" target="_blank">https://www.linkedin.com/in/heather-carr-b2812b190/</a>
                        <br></br>   
                    </Container>                              
                </CardBody>
            </Card>
        </Col>
    )
}

export default ContactMe;