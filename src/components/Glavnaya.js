import { CardBody, CardText, Container, Col, Row, Card, Carousel, Accordion} from 'react-bootstrap';
import React from 'react';
import Slaider from './Slaider';
import natal from '../Asserts/natal.jpg'
import nadya from '../Asserts/nadya.jpg'
import sveta from '../Asserts/sveta.jpg'
import renderOne from '../Asserts/renderOne.jpg'
import renderTwo from '../Asserts/renderTwo.jpg'
import renderTr from '../Asserts/renderTr.jpg'
import classOne from '../Asserts/classOne.jpg'
import classTwo from '../Asserts/classTwo.jpg'
import classTr from '../Asserts/classTr.jpg'
import Price from '../components/Calculator/Price'
import styled from 'styled-components';
import ilona from '../Asserts/ilona.jpg';
import pavel from '../Asserts/pavel.jpg'
import ekater from '../Asserts/ekater.jpg'
import zadnik from '../Asserts/zadnik.jpg'

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
        <Carousel.Item interval={1000} style={{'height': '500px'}} >
          <img  src={ renderOne } alt="komnata" text="First slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500} style={{'height': '500px'}}>
          <img src={ renderTwo } alt="komnata" text="Second slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '500px'}}>
          < img src= { renderTr }  alt="komnata" text="Third slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </Col>
          <Col md={6}>
        <Carousel>



    <Carousel.Item interval={1000} style={{'height': '500px'}}>
          <img src={ classOne } alt="komnata" text="First slide" />
          <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500} style={{'height': '500px'}}>
          <img src={ classTwo } alt="komnata" text="Second slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '500px'}}>
          < img src= { classTr }  alt="komnata" text="Third slide" />
          <Carousel.Caption>
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
   <Card.Img variant = 'top rounded-2 '  src={ natal }/>
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
    <Accordion >
      <Accordion.Item eventKey="0" >
        <Accordion.Header >Комплекс "Люкс" - от 160 000 ₽</Accordion.Header>
        <Accordion.Body >
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

<Price/>

<Container>
<h3 class="text-center m-3"> Новые отзывы </h3>
<div class="row pt-5 kraska">
      <div class="col-lg-4 text-center">
      <svg src= { ilona } class="bd-placeholder-img rounded-circle" width="140" height="140" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em"></text></svg>
      <h4>Илона</h4>
         <p>Недавно я имел удовольствие сотрудничать с дизайн бюро Status Projects. Дизайнеры внимательно выслушали мои идеи, предложили свои решения. Каждый этап сопровождался консультациями. Девочки были внимательны к деталям, всегда пунктуальны и вежливы, у них действительно индивидуальный подход к заказчику. Я рекомендую бюро Status Projects всем, кто ищет профессионалов. Спасибо вам и успехов в вашем нелегком труде!!!</p>
            </div>
      <div class="col-lg-4 text-center">
      <svg src= { pavel } class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
        <h4>Павел</h4>
        <p>Выбирали в какой студии заказать проект дома, и остановились на Status Projects. И вот уже заканчивается ремонт, и очень захотелось выразить благодарность дизайнерам Надежде, Светлане и их руководителю Катюше! Их дружная слаженная работа создает атмосферу доверия и заслуживает уважения. Всегда открыты и на связи. Я сама почувствовала себя не заказчиком, а партнером в процессе создания проекта. Все проконтролируют, и рабочих, и поставку материалов. Я была спокойна и не нервничала. Всем кто думает заказывать проект, однозначно советую Status Projects !👍🏼🔥</p>
        </div>
      <div class="col-lg-4 text-center">
      <svg src= { ekater } class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
        <h4>Екатерина</h4>
        <p>Мы купили квартиру и очень хотели, чтобы все члены семьи имели личное пространство, свой уголок и в то же время необходимо было одно общее место, для сбора всей семьи. Надежда разработала всевозможные варианты и в итоге мы получили спальню, две детские и большую гостиную, совмещённую с кухней и столовой. 
Работать с Надеждой одно удовольствие, объясняет нюансы строительных работ и дизайнерских решений, внимательно относится к пожеланиям заказчика, а самое главное она может реализовать вашу мечту о прекрасном доме.
</p>
      </div>
    </div>

</Container>
    </>
)