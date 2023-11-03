import React from "react";
import { Button, Col } from "react-bootstrap";
import "./ProductCard.scss";
import ProductImage from "../assets/image-removebg.svg";
import Stars from "../assets/Stars.svg";
import Dot from "../assets/Dot.svg";
import Tick from "../assets/tick-circle-one.svg";
import Save from "../assets/save.svg";
import Line from "../assets/line-btn.svg";

const ProductCard = () => {
  return (
    <div className="productCard_Wrapper">
      <h2>
        <span className="one_Time">ONE TIME ONLY</span> special price for 6
        extra Clarifion for only <span className="each">$14 each</span> ($84.00
        total!)
      </h2>
      <div className="product_Info">
        <div className="product_Image_Wrapper">
          <img src={ProductImage} alt="image" />
        </div>
        <div className="product_Name_Wrapper">
          <div className="product_Name">
            <p>Clarifion Air Ionizer</p>
            <div className="product_Price">
              <p>$180</p>
              <p>$84</p>
            </div>
          </div>
          <div className="stars_Wrapper">
            <img src={Stars} alt="stars" />
          </div>
          <div className="stock_Wrapper">
            <img src={Dot} alt="dot" />
            <p>12 left in Stock</p>
          </div>
          <p>
            Simply plug a Clarifion into any standard outlet and replace bulky,
            expensive air purifiers with a simple.
          </p>
        </div>
      </div>
      <div className="list_Div">
        <div className="list_wrapper">
          <img src={Tick} alt="list" />
          <p>
            Negative Ion Technology may <span>help with allergens</span>
          </p>
        </div>
        <div className="list_wrapper">
          <img src={Tick} alt="list" />
          <p>
            Designed for <span>air rejuvenation </span>
          </p>
        </div>
        <div className="list_wrapper">
          <img src={Tick} alt="list" />
          <p>
            <span>Perfect for every room</span> in all types of places.
          </p>
        </div>
      </div>
      <div className="save_Wrapper">
        <img src={Save} alt="save" />
        <p>
          Save <span>53%</span> and get <span>6 extra Clarifision</span> for
          only <span>$14 Each</span>.
        </p>
      </div>
      <div className="discount_Wrapper">
        <Button>Yes - Claim my discount</Button>
        <img src={Line} alt="line" />
      </div>
      <div>
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
