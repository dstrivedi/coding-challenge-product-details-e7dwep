import React from "react";
import { Carousel } from "react-responsive-carousel";

const ImageCarousel = () => {
  return (
    <Carousel showArrows={true}>
      <div>
        <img alt="" src={this.props.image} />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
