export default class LocationUtils {
  static getUsersCurrentLocation() {
    return new Promise((resolve, reject) => {
      navigator
        .geolocation
        .getCurrentPosition(position => {
          resolve([position.coords.latitude, position.coords.longitude,]);
        });
    });
  }
}
