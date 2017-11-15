import {stations} from '../data';
import MathUtils from './MathUtils';

export class LocationUtils {
  static getUsersCurrentLocation() {
    return new Promise((resolve, reject) => {
      navigator
        .geolocation
        .getCurrentPosition(position => {
          resolve([position.coords.latitude, position.coords.longitude,]);
        });
    });
  }

  static findClosestStation(userLocation) {
    let absoluteDistance = Infinity;
    let closestStation = null;
    for (let station in stations) {
      const stationDist = MathUtils.getDistBetween(userLocation, stations[station].location);
      if (stationDist < absoluteDistance) {
        absoluteDistance = stationDist;
        closestStation = stations[station];
      }
    }
    return {
      ...closestStation,
      distance: absoluteDistance
    };
  }
}
export default LocationUtils;
