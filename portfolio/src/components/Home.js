import React from "react";
import { Col, Card, CardHeader, CardBody } from "reactstrap";
import "../styles/AboutMe.css"

const Home = props => {
    return (
        <Col>
            <Card>
                <CardHeader>
                    <h1>Heather Carr</h1>
                </CardHeader>
                <CardBody>
                    <h2>
                        <img src={`${process.env.PUBLIC_URL}/images/profilepic.jpg`} alt="a picture of me" />
                    </h2>
                    <h3>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Hello, my name is Heather Carr.  I have recently graduated from the University of Denver's Coding Bootcamp.  I am looking forward to my new career in full stack web develepment.  
                        <br></br>
                        <br></br>
                        My background is in dentistry.  I worked for 5 years as a dental hygienist.  I enjoyed helping people and making personal connections.  I hope to use my background in my healthcare in my future career.  As a hygienist I learned important skills such as leadership, team work, and time managment skills.
                    </h3>         
                </CardBody>
            </Card>
        </Col>
    )
}

export default Home;