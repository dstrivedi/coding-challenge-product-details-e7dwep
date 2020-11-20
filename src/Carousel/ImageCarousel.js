import React from "react";
import { Carousel } from "react-responsive-carousel";

const ImageCarousel = props => {
  console.log(props.url);
  return (
    <Carousel showArrows={true}>
      <div>
        <img alt="" src={props.url} />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
