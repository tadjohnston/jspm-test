import React from 'react';
import FeaturedCarousel from 'components/carousel.jsx!';

export default class Hello extends HTMLElement {
  createdCallback() {
    this.innerHTML = 'Hello World';
  }
}

document.registerElement('x-hello', Hello)
