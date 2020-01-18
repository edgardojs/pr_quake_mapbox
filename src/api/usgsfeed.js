import axios from 'axios';
let center = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';

class usgsfeed {

    static all() {

        let request = axios.get(center);
        return request;
    }
}
export default usgsfeed;

