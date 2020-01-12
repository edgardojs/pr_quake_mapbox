import React from 'react';
import './site.css';
import mapboxgl from 'mapbox-gl';

//USE ACCES TOKEN or import for when using git on prod
mapboxgl.accessToken = 'pk.eyJ1IjoiZWRnYXJkb2pzIiwiYSI6ImNrNWE0c3BwcjB3YnIzam1tOTBramtkZWoifQ.CMRwMajYt3aq8aLRoHRd4A';

//Map redering with react and mapbox
class RenderMap extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            lng: -66.67, 
            lat: 18.00,
            zoom: 9,
        };
    }
    componentDidMount(){

    
       const map = new mapboxgl.Map({
       
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/dark-v9',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
    

    map.on('move',()=>{
        this.setState({
            width:this.width,
            height:this.height,
            lng: map.getCenter().lng.toFixed(4),
            lat: map.getCenter().lat.toFixed(4),
            zoom: map.getZoom().toFixed(2)
        });
    });
}



    render() {

        return(
            <div>
                <div className="sidebarStyle"> 
                    <div>
                        Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}
                    </div>
                </div>
                <div 
                ref={el =>this.mapContainer = el}  
                className="mapContainer"
                />
                
            </div>
        )
    }
}

export default RenderMap;