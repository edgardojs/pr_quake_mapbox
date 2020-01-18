import React from 'react';
import usgsfeed from '../api/usgsfeed';
import EarthquakeMap from './EarthquakeMap';
import EarthquakeContainer from './EarthquakeContainer';
import './site.css';
  
class App extends React.Component {
  
  state = {
      quakes: []      
    }

    onPageLoad = async (quakes) => {
        
      const response = await usgsfeed.all();
      const features = response.data.features;
      const prData = [];
      
      features.forEach(e => {
        const coordinates = e.geometry.coordinates
        if (
          (coordinates[1] > 17 &&
            coordinates[1] < 19) &&
            (coordinates[0] > -67 &&
              coordinates[0] < -65 )
              ){ 
                prData.push(e);
        }
      });


      this.setState({ quakes:prData })
    
    };
      
    componentDidMount(){
      
      this.onPageLoad();

    }
    render() {
    return(
    <div className='App'>
    <div className='ui huge header'><h1>USGS All Day Seismic Data for Puerto Rico</h1></div>
    <div className='ui grid relaxed stackable content'>
          
          <div className='mapContainer twelve wide column'>
              <EarthquakeMap quakes={this.state.quakes}/>
            </div>   
          <div className='four wide column'>
            <div className='ui medium header'>Latest Seismic Events</div>
            <div className='quakeContainer'>
              <div>
              <EarthquakeContainer quakes={this.state.quakes}/>
              </div>
              
          </div>
        </div>      
        </div>
      </div>
    
    );
  }
  }
export default App;