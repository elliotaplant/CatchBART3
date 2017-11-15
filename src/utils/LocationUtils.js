import {stationCoords} from '../data';
import MathUtils from './MathUtils';

export class LocationUtils {
  static getUsersCurrentLocation() {
    return new Promise((resolve, reject) => {
      console.log('star');
      navigator
        .geolocation
        .getCurrentPosition(position => {
          console.log('fish', position);
          resolve([position.coords.latitude, position.coords.longitude,]);
        });
    });
  }

  static findClosestStation(userLocation) {
    let absoluteDistance = Infinity;
    let closestStation = null;
    for (let station in stationCoords) {
      console.log('station',station);
      const stationDist = MathUtils.getDistBetween(userLocation, stationCoords[station]);
      if (stationDist < absoluteDistance) {
        absoluteDistance = stationDist;
        closestStation = station;
      }
    }
    return {
      abbr: closestStation,
      longName: closestStation,
      location: stationCoords[closestStation],
      distance: absoluteDistance
    };
  }
}
export default LocationUtils;
