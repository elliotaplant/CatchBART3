export class LocationUtils {
  static getUsersCurrentLocation(cb) {
    navigator.geolocation.getCurrentPosition(position => {
      console.log('position',position);
      if (cb) {
        cb(position);
      }
    });
  }
}
export default LocationUtils;
