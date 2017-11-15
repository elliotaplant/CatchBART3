class MathUtils {
  static getDistBetween(coord1, coord2) {
    const R = 3959; // miles
    const phi1 = MathUtils.toRadians(coord1[0]);
    const phi2 = MathUtils.toRadians(coord2[0]);
    const deltaPhi = MathUtils.toRadians(coord2[0] - coord1[0]);
    const deltaLambda = MathUtils.toRadians(coord2[1] - coord1[1]);
    const a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) + Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  }

  static toRadians(num) {
    return num * Math.PI / 180;
  }
}
export default MathUtils;
