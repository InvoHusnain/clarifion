import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Image from "../assets/image.svg";
import "./ClarifionCard.scss";
import FeedbackCard from "./FeedbackCard";
import ProductCard from "./ProductCard";

const ClarifionCard = () => {
  return (
    <Container>
      <Card className="clarifion_Card">
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="clarifion_imageCard_Wrapper">
              <img src={Image} alt="image" className="w-100" />
            </div>
            <FeedbackCard />
          </Col>
          <Col lg={6} md={6} sm={12}>
            <ProductCard />
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ClarifionCard;
