import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import interOne from '../Asserts/interOne.jpg';
import interTWO from '../Asserts/interTWO.jpg';
import interTreee from '../Asserts/interTreee.jpg';


function Slaider() {
    return (
        <Carousel>
        <Carousel.Item interval={1000} style={{'height': '500px'}}>
          <img src={ interOne } alt="komnata" text="First slide" />
          <Carousel.Caption>
            <h3>STATUS PROJECTS</h3>
            <p>Мы сочетаем функциональность и эстетику, и создаем гармонию и стиль</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500} style={{'height': '500px'}}>
          <img src={ interTWO } alt="komnata" text="Second slide" />
          <Carousel.Caption>
            <h3>STATUS PROJECTS</h3>
            <p>Создайте пространство, в котором каждый элемент будет отражать вашу индивидуальность</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '500px'}}>
          < img src= { interTreee }  alt="komnata" text="Third slide" />
          <Carousel.Caption>
            <h3>STATUS PROJECTS</h3>
            <p>
            Закажите дизайн проект уже сегодня и наслаждайтесь качеством и комфортом жизни.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

  export default Slaider;