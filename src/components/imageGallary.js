import React from "react";
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

class ImageSliderComponent extends React.Component {
  render() {
    console.log();
    return (
      <div className="wrapper">
        <ImageGallery items={this.props.product_data} />
      </div>
    );
  }
}
export default ImageSliderComponent;
