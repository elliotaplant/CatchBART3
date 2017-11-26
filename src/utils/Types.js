const Types = {
  LoadingState: {
    GETTING_USER_LOCATION: 'getting-user-location',
    FINDING_CLOSEST_STATION: 'finding-closest-station',
    LOADING_TIME_ESTIMATES: 'loading-time-estimates',
    ESTIMATES_ERROR: 'estimates-error',
    STATION_LOCATION_ERROR: 'station-location-error',
    LOADED: 'loaded'
  },

  TransportationMode: {
    WALKING: 'walking',
    BICYCLING: 'bicycling',
    DRIVING: 'driving',
  },

  Urgency: {
    DANGER: 'danger',
    WARNING: 'warning',
    SAFE: 'safe',
  },

  View: {
    ESTIMATE: 'estimate',
    MAP: 'map',
    DONATE: 'donate',
    SETTINGS: 'settings',
  },

  Donated: {
    NOT_DONATED: 'not-donated',
    HAS_DONATED: 'has-donated',
  },

  LocalStorageKey: {
    TRANSPORTATION: 'transportation',
    DONATED: 'donated',
  }
}

export default Types;
