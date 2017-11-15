// Data
const stations = {
  '12TH': {
    location: [ 37.803768, -122.271450, ],
    longName: '12TH',
    abbr: '12TH'
  },
  '16TH': {
    location: [ 37.765062, -122.419694, ],
    longName: '16TH',
    abbr: '16TH'
  },
  '19TH': {
    location: [ 37.808350, -122.268602, ],
    longName: '19TH',
    abbr: '19TH'
  },
  '24TH': {
    location: [ 37.752470, -122.418143, ],
    longName: '24TH',
    abbr: '24TH'
  },
  'ASHB': {
    location: [ 37.852803, -122.270062, ],
    longName: 'ASHB',
    abbr: 'ASHB'
  },
  'BALB': {
    location: [ 37.721585, -122.447506, ],
    longName: 'BALB',
    abbr: 'BALB'
  },
  'BAYF': {
    location: [ 37.696924, -122.126514, ],
    longName: 'BAYF',
    abbr: 'BAYF'
  },
  'CAST': {
    location: [ 37.690746, -122.075602, ],
    longName: 'CAST',
    abbr: 'CAST'
  },
  'CIVC': {
    location: [ 37.779732, -122.414123, ],
    longName: 'CIVC',
    abbr: 'CIVC'
  },
  'COLS': {
    location: [ 37.753661, -122.196869, ],
    longName: 'COLS',
    abbr: 'COLS'
  },
  'COLM': {
    location: [ 37.684638, -122.466233, ],
    longName: 'COLM',
    abbr: 'COLM'
  },
  'CONC': {
    location: [ 37.973737, -122.029095, ],
    longName: 'CONC',
    abbr: 'CONC'
  },
  'DALY': {
    location: [ 37.706121, -122.469081, ],
    longName: 'DALY',
    abbr: 'DALY'
  },
  'DBRK': {
    location: [ 37.870104, -122.268133, ],
    longName: 'DBRK',
    abbr: 'DBRK'
  },
  'DELN': {
    location: [ 37.925086, -122.316794, ],
    longName: 'DELN',
    abbr: 'DELN'
  },
  'DUBL': {
    location: [ 37.701687, -121.899179, ],
    longName: 'DUBL',
    abbr: 'DUBL'
  },
  'EMBR': {
    location: [ 37.792874, -122.397020, ],
    longName: 'EMBR',
    abbr: 'EMBR'
  },
  'FRMT': {
    location: [ 37.557465, -121.976608, ],
    longName: 'FRMT',
    abbr: 'FRMT'
  },
  'FTVL': {
    location: [ 37.774836, -122.224175, ],
    longName: 'FTVL',
    abbr: 'FTVL'
  },
  'GLEN': {
    location: [ 37.733064, -122.433817, ],
    longName: 'GLEN',
    abbr: 'GLEN'
  },
  'HAYW': {
    location: [ 37.669723, -122.087018, ],
    longName: 'HAYW',
    abbr: 'HAYW'
  },
  'LAFY': {
    location: [ 37.893176, -122.124630, ],
    longName: 'LAFY',
    abbr: 'LAFY'
  },
  'LAKE': {
    location: [ 37.797027, -122.265180, ],
    longName: 'LAKE',
    abbr: 'LAKE'
  },
  'MCAR': {
    location: [ 37.829065, -122.267040, ],
    longName: 'MCAR',
    abbr: 'MCAR'
  },
  'MLBR': {
    location: [ 37.600271, -122.386702, ],
    longName: 'MLBR',
    abbr: 'MLBR'
  },
  'MONT': {
    location: [ 37.789405, -122.401066, ],
    longName: 'MONT',
    abbr: 'MONT'
  },
  'NBRK': {
    location: [ 37.873967, -122.283440, ],
    longName: 'NBRK',
    abbr: 'NBRK'
  },
  'NCON': {
    location: [ 38.003193, -122.024653, ],
    longName: 'NCON',
    abbr: 'NCON'
  },
  'OAKL': {
    location: [ 37.713238, -122.212191, ],
    longName: 'OAKL',
    abbr: 'OAKL'
  },
  'ORIN': {
    location: [ 37.878361, -122.183791, ],
    longName: 'ORIN',
    abbr: 'ORIN'
  },
  'PHIL': {
    location: [ 37.928468, -122.056012, ],
    longName: 'PHIL',
    abbr: 'PHIL'
  },
  'PITT': {
    location: [ 38.018914, -121.945154, ],
    longName: 'PITT',
    abbr: 'PITT'
  },
  'PLZA': {
    location: [ 37.902632, -122.298904, ],
    longName: 'PLZA',
    abbr: 'PLZA'
  },
  'POWL': {
    location: [ 37.784471, -122.407974, ],
    longName: 'POWL',
    abbr: 'POWL'
  },
  'RICH': {
    location: [ 37.936853, -122.353099, ],
    longName: 'RICH',
    abbr: 'RICH'
  },
  'ROCK': {
    location: [ 37.844702, -122.251371, ],
    longName: 'ROCK',
    abbr: 'ROCK'
  },
  'SANL': {
    location: [ 37.721947, -122.160844, ],
    longName: 'SANL',
    abbr: 'SANL'
  },
  'SBRN': {
    location: [ 37.637761, -122.416287, ],
    longName: 'SBRN',
    abbr: 'SBRN'
  },
  'SFIA': {
    location: [ 37.615966, -122.392409, ],
    longName: 'SFIA',
    abbr: 'SFIA'
  },
  'SHAY': {
    location: [ 37.634375, -122.057189, ],
    longName: 'SHAY',
    abbr: 'SHAY'
  },
  'SSAN': {
    location: [ 37.664245, -122.443960, ],
    longName: 'SSAN',
    abbr: 'SSAN'
  },
  'UCTY': {
    location: [ 37.590630, -122.017388, ],
    longName: 'UCTY',
    abbr: 'UCTY'
  },
  'WARM': {
    location: [ 37.502171, -121.939313, ],
    longName: 'WARM',
    abbr: 'WARM'
  },
  'WCRK': {
    location: [ 37.905522, -122.067527, ],
    longName: 'WCRK',
    abbr: 'WCRK'
  },
  'WDUB': {
    location: [ 37.699756, -121.928240, ],
    longName: 'WDUB',
    abbr: 'WDUB'
  },
  'WOAK': {
    location: [ 37.804872, -122.295140, ],
    longName: 'WOAK',
    abbr: 'WOAK'
  },
};
export default stations;
