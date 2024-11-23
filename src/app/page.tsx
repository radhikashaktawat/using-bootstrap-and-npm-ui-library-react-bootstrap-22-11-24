import Image from "next/image";

//1. Import area 

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Home() {
  return (
   
    <Container className="container-fluid">

      <Row>
        <Col className="r_tbdr col-12 text-center h-100">Header</Col>
      </Row>
      <Row className=" r_tbdr text-center">
      
      <Col className="r_tbdr text-center col-4" > Aside</Col>
        <Col className="tbdr text-center col-8">Section</Col>
      </Row>
      <Row className="text-center r_tbdr ">
        <Col className="r_tbdr col-12">footer</Col>
      </Row>
    </Container>
  




     
 


  );
}
