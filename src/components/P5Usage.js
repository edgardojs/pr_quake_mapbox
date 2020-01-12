import React from 'react';
import Sketch from 'react-p5';
 
export default class P5Usage extends React.Component {
  mapimg;
  clat = 0;
  clon = 0;
  width = 1024;
  height = 512;
  zoom = 9;
  earthquakes;

  preload = (p5, canvasParentRef) =>{
    this.mapimg = p5.loadImage(`https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/' +
    ${this.clon}+
    , +
    ${this.clat}+
    , +
    ${this.zoom}+
    / +
    ${this.ww}+
    x +
    ${this.hh}+
    ?access_token=pk.eyJ1IjoiZWRnYXJkb2pzIiwiYSI6ImNrNWE0c3BwcjB3YnIzam1tOTBramtkZWoifQ.CMRwMajYt3aq8aLRoHRd4A` 
);
// earthquakes = loadStrings('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.csv');
earthquakes = p5.loadStrings(
  'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv'
);
  }
 
  setup = (p5, canvasParentRef) => {
    };
  render() {
    return <Sketch preload = {this.preload} setup={this.setup}/>;
  }
}