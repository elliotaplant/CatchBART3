export default class ClientUtils {
  createGetRequest(url) {
    return ClientUtils.createCORSRequest('GET', url);
  }

  createCORSRequest(method, url) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, true);

    if ("withCredentials" in xhr) {
      // Check if the XMLHttpRequest object has a "withCredentials" property.
      // "withCredentials" only exists on XMLHTTPRequest2 objects.
      xhr.open(method, url, true);
    } else if (typeof XDomainRequest !== "undefined") {
      // Otherwise, check if XDomainRequest.
      // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      // Otherwise, CORS is not supported by the browser.
      throw new Error('Your browser does not support CORS. Try using Chrome, Safari, or Firefox');
    }

    xhr.onload = xhr.onerror = function() {
      console.error('There was an error with an xhr ');
    };

    return {
      send: () => {
        return new Promise((resolve, reject) => {
          xhr.onload = () => {
            resolve(JSON.parse(xhr.responseText));
          };

          xhr.onerror = () => {
            reject(xhr);
          };

          xhr.send();
        });
      }
    };
  }
}
