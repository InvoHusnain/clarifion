import React from "react";
import { Container } from "react-bootstrap";
import Logo from "../assets/logo.svg";
import One from "../assets/one.svg";
import Two from "../assets/two.svg";
import "./SubHeader.scss";

const SubHeader = () => {
  return (
    <Container maxWidth="xl">
      <div className="subHead_Wrapper">
        <img src={Logo} alt="logo" />
        <div className="logos_Wrapper">
          <img src={One} alt="one" />
          <img src={Two} alt="two" />
        </div>
      </div>
    </Container>
  );
};

export default SubHeader;
