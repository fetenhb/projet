import React from "react";
import { Carousel } from "react-bootstrap";
import carous1 from "../../img/carousel1.jpg";
import carous2 from "../../img/carousel2.jpg";
import carous3 from "../../img/carousel3.jpg";

const Carousell = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={carous1} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carous2} alt="Second slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carous3} alt="Third slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousell;
