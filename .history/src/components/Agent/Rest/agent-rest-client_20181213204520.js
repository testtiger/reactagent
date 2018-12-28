export function getURIList() {
  var prefix = "/ccagentui";
  var version = "/v1/";

  return {
    newProfile_URI: prefix + version + "profiles/",
    posts: prefix + version + "posts/",
    recentOrders_URI: prefix + version + "agentReports/recentOrders/",
    myPendingActions_URI: prefix + version + "agentReports/myPendingActions/",
    GET_SKU: prefix + version + "skus/"
  };
}

export function makeRestcall(type, uri, payload) {
  console.log("type is -----" + type);
  console.log("uri is -----" + uri);
  console.log("payload is -----" + payload);

  uri = "/ccagentui/v1/login";
  var formData = frameFormBody(payload);

  var reqObj = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Origin: ""
    },
    body: formData
  }; //JSON.stringify(payload)
  return new Promise(function(resolve, reject) {
    return fetch(uri, reqObj)
      .then(response => response.json())
      .then(responseJson => {
        return resolve(responseJson);
      })
      .catch(error => {
        console.error(error);
        reject(error);
      });
  });
}

function frameFormBody(credentials) {
  var formBody = [];
  for (var property in credentials) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(credentials[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  return formBody;
}

export function makeGetCall(uri, extraHeaders, queryParams) {
  console.log("uri is -----" + uri);
  var qString = "";
  if (queryParams) {
    qString = frameFormBody(queryParams);
  }
  if (qString) {
    uri = uri + "?" + qString;
  }

  var reqObj = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  if (extraHeaders) {
    for (var property in extraHeaders) {
      reqObj.headers[property] = extraHeaders[property];
    }
  }

  return new Promise(function(resolve, reject) {
    return fetch(uri, reqObj)
      .then(response => {
        if (response.status !== 204) {
          return response.json();
        }
      })
      .then(responseJson => {
        return resolve(responseJson);
      })
      .catch(error => {
        console.error(error);
        reject(error);
      });
  });
}

export function makePostCall(uri, extraHeaders, payload) {
  console.log("uri is -----" + uri);

  var reqObj = {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" }
  };

  if (extraHeaders) {
    for (var property in extraHeaders) {
      reqObj.headers[property] = extraHeaders[property];
    }
  }
  payload = JSON.stringify(payload);

  reqObj["body"] = payload;

  return new Promise(function(resolve, reject) {
    return fetch(uri, reqObj)
      .then(response => response.json())
      .then(responseJson => {
        return resolve(responseJson);
      })
      .catch(error => {
        console.error(error);
        reject(error);
      });
  });
}

export function makeDeleteCall(uri, extraHeaders) {
  console.log("uri is -----" + uri);

  var reqObj = {
    method: "delete",
    headers: { Accept: "application/json", "Content-Type": "application/json" }
  };

  if (extraHeaders) {
    for (var property in extraHeaders) {
      reqObj.headers[property] = extraHeaders[property];
    }
  }

  return new Promise(function(resolve, reject) {
    return fetch(uri, reqObj)
      .then(response => response.json())
      .then(responseJson => {
        return resolve(responseJson);
      })
      .catch(error => {
        console.error(error);
        reject(error);
      });
  });
}
