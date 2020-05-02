import React, { Component } from "react";
import Earthquakes from "./Earthquakes";

class EarthquakeContainer extends Component {

  render() {
    
    let quakeList = this.props.quakes.map((quake, idx) => {
        let lat = quake.geometry.coordinates[1];
        let lng = quake.geometry.coordinates[0];
        let dpth = quake.geometry.coordinates[2];
        let title = quake.properties.title;
        let time = new Date(quake.properties.time);
        
      return (
        <Earthquakes
          key= {idx}
          dpth= {dpth}
          title= {title}
          time={time}
          lat = {lat}
          lng = {lng}
        />
      );
    }
    );

    return (
      <div>
        <ul> { quakeList } </ul>
      </div>
    );
  }
}

export default EarthquakeContainer;