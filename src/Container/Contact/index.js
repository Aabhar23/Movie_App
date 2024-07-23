import  React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsLinkedin,  BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si"
import './style.css';
const  ContactContainer = ()=>{
    const myData = [
        
        {name:'Linkedin', link:'www.linkedin.com/in/aabhar-gupta-2b0741217', text:'Follow to my linkedin.'},
       
        {name:'GitHub', link:'https://github.com/Aabhar23', text:'Follow to my github account.'},
        {name:'Gmail', link:'aabhargupta2310@gmail.com', text:'Follow to my github account.'}
    ]
    return (
        <div className='contactWrap'>
        <Container>
            <Row>
                <Col>
                    <p>CONNECT WITH US</p>
                    <h1>Get in Touch</h1>
                </Col>
            </Row>
            <Row>
                <Col className='conectIcon'>
                    <ul className='socialIconsList'>
                       
                        <li>
                            <a rel="noreferrer" href="www.linkedin.com/in/aabhar-gupta-2b0741217" target="_blank">
                                <BsLinkedin />
                            </a>
                        </li>
                        <li>
                            <a rel="noreferrer" href="https://github.com/Aabhar23" target="_blank">
                                <BsGithub />
                            </a>
                        </li>
                        <li>
                            <a rel="noreferrer" href="aabhargupta2310@gmail.com" target="_blank">
                                <SiGmail />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup className='contactList'>
                        {
                            myData && myData.length > 0 ? myData.map((item)=>{
                                return (
                                    <ListGroup.Item key={item.name}>
                                        <span>{item.text}</span>
                                        <a href={item.link} rel="noreferrer"  target="_blank">
                                            {item.link}
                                        </a>
                                    </ListGroup.Item>
                                )
                            }) : ''
                        }
                        
                    </ListGroup>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default ContactContainer;