import React from "react";
import productStyles from "./product.module.css";
import ImageCarousel from "./../../Carousel/ImageCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Product = props => {
  return (
    <div className={productStyles.details}>
      {props.product.map(p => {
        return (
          <div className={productStyles.product}>
            <a
              className={productStyles.link}
              href={p.links.www}
              target="_blank"
            >
              <p style={{ padding: "2px" }}>{p.name}</p>
            </a>
            <ImageCarousel imageUrl={p.images} />
            <p
              style={{
                position: "absolute",
                marginTop: "-50px",
                marginLeft: "20px",
                padding: "5px",
                backgroundColor: "black",
                color: "white",
                opacity: "0.6"
              }}
            >
              $799
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
