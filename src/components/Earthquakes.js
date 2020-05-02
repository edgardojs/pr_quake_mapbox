import React, { Component } from "react";

class Earthquakes extends Component {
  render() {
    return (
      <div className="ui divided list">
          <ul className="item">
          
          <li className="ui header">{this.props.title}</li>  
          <div className="description">
          <li>{this.props.time.toString()}</li>
          <li> Lat: {this.props.lat} | Long: {this.props.lng} | Depth: {this.props.dpth}</li>
          </div>
        </ul> 
      </div>
    );
  }
}

export default Earthquakes;