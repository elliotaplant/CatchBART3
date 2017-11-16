import {stations} from '../data';
import MathUtils from './MathUtils';
import ClientUtils from './ClientUtils';

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

  static getStationEstimates(abbr) {
    const bartApiUrl = BartUtils.createUrlForStation(abbr);
    return ClientUtils.createGetRequest(bartApiUrl).send()
      .then(bartApiResponse => bartApiResponse.root.station[0].etd);
  }

  static createUrlForStation(abbr) {
    // Use the public bart api key
    const key = 'MW9S-E7SL-26DU-VV8V';
    return `https://api.bart.gov/api/etd.aspx?cmd=etd&orig=${abbr}&key=${key}&json=y`
  }
}
