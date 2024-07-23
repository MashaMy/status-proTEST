import { CardBody, CardText, Container, Col, Row, Card, Carousel, Accordion} from 'react-bootstrap';
import React from 'react';
import Slaider from './Slaider';
import natal from '../Asserts/natal.jpg'
import nadya from '../Asserts/nadya.jpg'
import sveta from '../Asserts/sveta.jpg'
import interOne from '../Asserts/interOne.jpg'
import interTWO from '../Asserts/interTWO.jpg';
import interTreee from '../Asserts/interTreee.jpg';
import Price from './Price'
import styled from 'styled-components';

const Styles = styled.div `
a {
padding: 6px;
text-decoration: none;
color: white;
}

a:hover {
color: black;
}

.cvet {
   background-color: #d4dde4;
  }

h3 {
color: white;
}
`


export const Glavnaya = () => (
    <>
    <Slaider/>
    <Styles >
     <Container style={{marginBottom: '30px'}} >
    <h3 class="text-center m-3">Наши работы</h3>
      <Row>
          <Col md={6} >
    <Carousel >
        <Carousel.Item interval={1000} style={{'height': '400px'}} >
          <img  src={ interOne } alt="komnata" text="First slide" />
          <Carousel.Caption>
            <h3>Зал</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500} style={{'height': '400px'}}>
          <img src={ interTWO } alt="komnata" text="Second slide" />
          <Carousel.Caption>
            <h3>Комната</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '400px'}}>
          < img src= { interTreee }  alt="komnata" text="Third slide" />
          <Carousel.Caption>
            <h3>Кухня</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </Col>

          <Col md={6}>
        <Carousel>
    <Carousel.Item interval={1000} style={{'height': '400px'}}>
          <img src={ interOne } alt="komnata" text="First slide" />
          <Carousel.Caption>
            <h3>Зал</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500} style={{'height': '400px'}}>
          <img src={ interTWO } alt="komnata" text="Second slide" />
          <Carousel.Caption>
            <h3>Комната</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '400px'}}>
          < img src= { interTreee }  alt="komnata" text="Third slide" />
          <Carousel.Caption>
            <h3>Кухня</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
</Col>
</Row>
   </Container>


<main >
   <Container class='about my-3' id='about'>
   <h3 class="text-center m-3">Дизайнеры</h3>
   <Row > 
   <Col  md={4}>
    <div class='container'>
<div class='row'>
   <div style = {{width: '18rem'}}>
   <Card.Img variant = 'top rounded-2' src={ natal }/>
   </div>
   <div>
   <CardBody >
   <CardText class='text-center pt-1'>
<h4>Екатерина Великая</h4>
<p>
"Осуществляю полный цикл работ по дизайну"
</p>
</CardText>
<div class='text-center py-2'>
<button type="button" class="btn btn-outline-light"> <a  href="https://wa.me/79184055993" target="_blank ">Написать Екатерине</a></button>
</div>
</CardBody>
</div>
   </div>
</div>
</Col>

<Col  md={4}>
    <div class='container'>
<div class='row'>
   <div style = {{width: '18rem'}}>
   <Card.Img variant = 'top rounded-2' src={ nadya }/>
   </div>
   <div>
   <CardBody >
   <CardText class='text-center'>
<h4>Надежда Коваленко</h4>
<p>
"Создаю пространство, которое будет работать на Вас"
</p>
</CardText>
<div class='text-center py-2'>
<button type="button" class="btn btn-outline-light "> <a href="https://wa.me/79631612833" target="_blank ">Написать Надежде</a></button>
</div>
</CardBody>
</div>
   </div>
</div>
</Col>


<Col  md={4}>
    <div class='container'>
<div class='row '>
   <div style = {{width: '18rem'}}>
   <Card.Img  variant = 'top rounded-2' src={ sveta } />
   </div>
   <div>
   <CardBody >
   <CardText class='text-center'>
<h4>Светлана Томилина</h4>
<p>
"Мой подход основан на открытом диалоге и внимании к деталям"
</p>
</CardText>
<div class='text-center py-2'>
<button type="button" class="btn btn-outline-light "> <a href="https://wa.me/79183004489" target="_blank ">Написать Светлане</a></button>
</div>
</CardBody >
</div>
   </div>
</div>
</Col>
</Row>
</Container>
</main>
    </Styles>

<Container class='pt-5' >
    <Container >
        <h3 class="text-center m-3"> Стоимость услуг </h3>
    <Accordion>
      <Accordion.Item eventKey="0" >
        <Accordion.Header>Комплекс "Люкс" - от 160 000 ₽</Accordion.Header>
        <Accordion.Body>
        <ul class="list-group list-group-flush">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Комплекс "Стандарт" - от 90 000 ₽</Accordion.Header>
        <Accordion.Body>
        <ul class="list-group list-group-flush ">
  <li class="list-group-item cvet">An item</li>
  <li class="list-group-item cvet">A second item</li>
  <li class="list-group-item cvet">A third item</li>
  <li class="list-group-item cvet">A fourth item</li>
  <li class="list-group-item cvet">And a fifth one</li>
</ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
 
    </Container>
</Container>

<Price />




    </>
)