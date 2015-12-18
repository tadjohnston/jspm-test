import React from 'react';
import ReactDOM from 'react-dom';
import { ImageGallery } from 'react-responsive-carousel';

export default class FeaturedCarousel extends React.Component {
  render() {
    return(
      <ImageGallery showControls={true} showStatus={true}>
        <img src="http://leandrowd.github.io/react-responsive-carousel/assets/1.jpeg" />
        <img src="http://leandrowd.github.io/react-responsive-carousel/assets/2.jpeg" />
        <img src="http://leandrowd.github.io/react-responsive-carousel/assets/3.jpeg" />
        <img src="http://leandrowd.github.io/react-responsive-carousel/assets/4.jpeg" />
        <img src="http://leandrowd.github.io/react-responsive-carousel/assets/5.jpeg" />
        <img src="http://leandrowd.github.io/react-responsive-carousel/assets/6.jpeg" />
        <img src="http://leandrowd.github.io/react-responsive-carousel/assets/7.jpeg" />
      </ImageGallery>
    )
  }
}

ReactDOM.render(<FeaturedCarousel />, document.querySelector('.demo-slider-controls'));
