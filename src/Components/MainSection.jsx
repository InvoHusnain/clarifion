import React from "react";
import { Container } from "react-bootstrap";
import "./MainSection.scss";
import TickCircle from "../assets/tick-circle.svg";

const MainSection = () => {
  return (
    <Container>
      <div className="heading_Wrapper">
        <h1>Wait ! your order in progress.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
      </div>
      <div className="steps_Wrapper">
        <div className="step_Content">
          <div className="image_Wrapper">
            <img src={TickCircle} alt="tick" />
          </div>
          <p>Step 1 : Cart Review</p>
        </div>
        <div className="step_Content">
          <div className="image_Wrapper">
            <img src={TickCircle} alt="tick" />
          </div>
          <p>Step 2 : Checkout</p>
        </div>
        <div className="step_Content">
          <div className="number_Wrapper_Current">
            <p>3</p>
          </div>
          <p>Step 3 : Special Offer</p>
        </div>
        <div className="step_Content">
          <div className="number_Wrapper_Next">
            <p>4</p>
          </div>
          <p>Step 4 : Confirmation</p>
        </div>
      </div>
    </Container>
  );
};

export default MainSection;
