export default class ObjectUtils {
  static safeGet(getFn, defaultValue = undefined) {
    let returnValue = defaultValue;

    try {
      returnValue = getFn();
    } catch (e) { }
    if (returnValue === undefined) {
      returnValue = defaultValue;
    }
    return returnValue;
  }
}
