import { combineReducers } from 'redux';
import usgsfeed from '../api/usgsfeed';

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



export default combineReducers({});