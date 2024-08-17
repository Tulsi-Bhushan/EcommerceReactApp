import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Beyond aesthetics, clothing plays a crucial role in comfort and
          functionality, with innovations in fabric technology enhancing
          durability, flexibility, and environmental sustainability. Ultimately,
          the clothes we wear are a testament to the ever-evolving intersection
          of practicality, creativity, and cultural significance.
        </p>
        <p>
          Online platforms present an extensive range of styles, brands, and
          sizes, often surpassing what is available in physical stores. Detailed
          product descriptions, high-resolution images, and customer reviews
          provide valuable insights into fit, quality, and overall satisfaction,
          helping consumers make informed decisions from the comfort of their
          homes.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
