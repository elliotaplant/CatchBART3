const Types = {
  LoadingState: {
    GETTING_USER_LOCATION: 'getting user location',
    FINDING_CLOSEST_STATION: 'finding closest station',
    LOADING_TIME_ESTIMATES: 'loading time estimates',
    LOADED: 'loaded',
  },

  TransportationMode: {
    WALKING: 'walking',
    RUNNING: 'running',
    DRIVING: 'driving'
  },

  Urgency: {
    DANGER: 'danger',
    WARNING: 'warning',
    SAFE: 'safe'
  }
}

export default Types;
