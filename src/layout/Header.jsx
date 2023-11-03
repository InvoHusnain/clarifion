import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import Round from "../assets/fluent_arrow-sync-checkmark-20-regular.svg";
import Truck from "../assets/ph_truck-light.svg";
import Heart from "../assets/mdi_cards-heart-outline.svg";
import Tick from "../assets/fluent_checkmark-starburst-20-regular.svg";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Header.scss";

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="header_Wrapper">
      <Container>
        <Slider {...settings}>
          <div className="slider_Wrapper">
            <img src={Tick} alt="tick" />
            <p>30-DAY SATISFACTION GUARANTEE</p>
          </div>
          <div className="slider_Wrapper">
            <img src={Truck} alt="tick" />
            <p>30-DAY SATISFACTION GUARANTEE</p>
          </div>
          <div className="slider_Wrapper">
            <img src={Heart} alt="tick" />
            <p>30-DAY SATISFACTION GUARANTEE</p>
          </div>
          <div className="slider_Wrapper">
            <img src={Round} alt="tick" />
            <p>30-DAY SATISFACTION GUARANTEE</p>
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default Header;
