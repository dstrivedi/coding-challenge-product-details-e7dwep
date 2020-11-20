import React from "react";
import { Carousel } from "react-responsive-carousel";

const ImageCarousel = props => {
  return (
    <Carousel showArrows={true} showThumbs={false}>
      {props.imageUrl.map(i => {
        return (
          <div>
            <img
              alt="Sofa"
              src={i.href}
              style={{ height: "300px", width: "100px" }}
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default ImageCarousel;
