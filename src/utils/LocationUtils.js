import Types from './Types';

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

  static speedForTransportationMode(transportationMode) {
    if (transportationMode === Types.TransportationMode.DRIVING) {
      return 25; // mph
    } else if (transportationMode === Types.TransportationMode.RUNNING) {
      return 5; // mph
    }
    return 3; // walking mph
  }

  static calculateUrgency(arrivalMinutes, stationDistance, transportationMode) {
    try {
      const travelTime = stationDistance / (LocationUtils.speedForTransportationMode(transportationMode) / 60); // min
      const timeQuotient = arrivalMinutes / travelTime;
      if (timeQuotient < 1) {
        return Types.Urgency.DANGER;
      } else if (timeQuotient < 1.2) {
        return Types.Urgency.WARNING;
      }
    } catch (e) { }

    return Types.Urgency.SAFE
  }
}
