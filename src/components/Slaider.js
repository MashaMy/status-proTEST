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
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500} style={{'height': '500px'}}>
          <img src={ interTWO } alt="komnata" text="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '500px'}}>
          < img src= { interTreee }  alt="komnata" text="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

  export default Slaider;