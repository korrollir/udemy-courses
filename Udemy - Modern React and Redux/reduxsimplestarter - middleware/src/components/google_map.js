import React, { Component } from 'react';

class GoogleMap extends Component {
  // Lifecycle method that gets called once component is loaded
  // Also a possible way to integrate 3rd party libraries easily
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    // ref is a part of React that allows us to get a reference to an
    // HTML element and render to the page
    // access with this.refs.map anywhere in the component
    return <div ref='map' />
  }
}

export default GoogleMap;
