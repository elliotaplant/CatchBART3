export class LocationUtils {
  static getUsersCurrentLocation(cb) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(position => {
        resolve([position.coords.latitude, position.coords.longitude]);
      });
    });
  }
}
export default LocationUtils;
