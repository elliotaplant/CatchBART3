import {stations} from '../data';
import MathUtils from './MathUtils';

export default class BartUtils {
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
