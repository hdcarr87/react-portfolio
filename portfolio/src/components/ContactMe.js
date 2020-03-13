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
                        GitHub: https://github.com/hdcarr87
                        <br></br>
                        LinkedIn: https://www.linkedin.com/in/heather-carr-b2812b190/
                        <br></br>   
                    </Container>                              
                </CardBody>
            </Card>
        </Col>
    )
}

export default ContactMe;