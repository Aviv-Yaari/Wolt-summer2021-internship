module.exports = (lon1, lat1, lon2, lat2) => {
  // Using Haversine formula to calculate distance between two positions
  // https://en.wikipedia.org/wiki/Haversine_formula
  // i found this function in stackoverflow -
  // https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
  // used this link to check the validity of results:
  // https://www.nhc.noaa.gov/gccalc.shtml
  var p = 0.017453292519943295; // Math.PI / 180
  var c = Math.cos;
  var a =
    0.5 -
    c((lat2 - lat1) * p) / 2 +
    (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;

  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
};
