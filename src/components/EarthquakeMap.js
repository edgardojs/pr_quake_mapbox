import React from 'react';
import Sketch from 'react-p5';

class EarthquakeMap extends React.Component {
    
    mapimg;
    clat = 18.10;
    clon = -66.35;
    ww = 1024;
    hh = 512;
    zoom = 8;
    earthquakes;    
    
	render() {
		return (
			<div>
				<Sketch
          preload={(p5)=>{
            this.mapimg = p5.loadImage(
              'https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/' +
              this.clon +
              ',' +
              this.clat +
              ',' +
              this.zoom +
              '/' +
              this.ww +
              'x' +
              this.hh +
              '?access_token=pk.eyJ1IjoiZWRnYXJkb2pzIiwiYSI6ImNrNWE0c3BwcjB3YnIzam1tOTBramtkZWoifQ.CMRwMajYt3aq8aLRoHRd4A'
              );
              this.earthquakes = p5.loadStrings(
                'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.csv'
              );
              this.mercX = (lon) => {
                lon = p5.radians(lon);
                var a = (256 / Math.PI) * Math.pow(2, this.zoom);
                var b = lon + Math.PI;
                return a * b;
              }
              this.mercY = (lat) => {
                lat = p5.radians(lat);
                var a = (256 / Math.PI) * Math.pow(2, this.zoom);
                var b = Math.tan(Math.PI / 4 + lat / 2);
                var c = Math.PI - Math.log(b);
                return a * c;
              }
            }
          }

                      
        setup={(p5, parentRef) => {
                        
          p5.createCanvas(this.ww, this.hh).parent(parentRef);
          p5.translate(p5.width / 2, p5.height / 2);
          p5.imageMode(p5.CENTER);
          p5.image(this.mapimg, 0, 0);
          var cx = this.mercX(this.clon);
          var cy = this.mercY(this.clat);
            for (var i = 1; i < this.earthquakes.length; i++) {
              var data = this.earthquakes[i].split(/,/);
              //console.log(data);
              var lat = data[1];
              var lon = data[2];
              var mag = data[4];    
              var x = this.mercX(lon) - cx;
              var y = this.mercY(lat) - cy;
              // This addition fixes the case where the longitude is non-zero and
              // points can go off the screen.
              if (x < - p5.width / 2) {
                x += p5.width;
              } else if (x > p5.width / 2) {
                x -= p5.width;
              }
              mag = Math.pow( 10, mag / 2 );
              var magmax = Math.sqrt(Math.pow(10, 10));
              var d = p5.map(mag, 0, magmax, 3, 200);
              p5.stroke(255, 1, 0,200);
              p5.fill(255, 0, 0, 100);
              p5.ellipse(x, y, d, d);
            }
          }}
				/>
			</div>
		);
	}
}

export default EarthquakeMap;