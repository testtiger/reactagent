var restObject = {
  response: "",
  getPosts: function(additonalHeaders) {
    this.restCall(this.sucessCallBack.bind(this), additonalHeaders);
    return this.response;
  },
  uri: "/ccagentui/v1/posts",
  sucessCallBack: function(resJson) {
    this.response = JSON.stringify(resJson);
  },
  restCall: function(callBack, additonalHeaders) {
    var reqObj = {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };
    for (var property in additonalHeaders) {
      reqObj.headers[property] = additonalHeaders[property];
    }
    console.log("headers---" + reqObj.headers);
    console.log("headers---" + additonalHeaders);

    fetch(this.uri, reqObj)
      .then(function(res) {
        return res.json();
      })
      .then(callBack);
  }
};
var loginRestObject = {
  authToken: "",
  sucessCallBack: function(resJson) {
    var token = resJson.access_token;
    this.authToken = "Bearer " + token;
  },
  getAuthToken: function() {
    this.restCall(this.sucessCallBack.bind(this));
    return this.authToken;
  },
  uri: "/ccagentui/v1/login",
  restCall: function(callBack) {
    function frameFormBody(credentials) {
      var details = {
        username: "service",
        password: "service",
        grant_type: "password"
      };
      var formBody = [];
      for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");
      return formBody;
    }
    var formData = frameFormBody();
    var reqObj = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Origin: ""
      },
      body: formData
    };
    console.log(callBack + "----------sucesscallback");
    var x = fetch(this.uri, reqObj)
      .then(function(res) {
        return res.json();
      })
      .then(callBack);
  }
};

export function getToken() {
  loginRestObject.getAuthToken();
  var token = loginRestObject.authToken;
}

export function doGet(uri, payload, sucecessCallBack, additionalHeaders) {
  var reqObj = {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };
 /*  additionalHeaders = additionalHeaders||{};
  for (var property in additonalHeaders) {
    reqObj.headers[property] = additonalHeaders[property];
  }
 */
  var restObject = {
    response: "",
    sucessCallBack: function(resJson) {
      this.response = JSON.stringify(resJson);
    },
    makeRestCall: function() {
      this.restCall(this.sucessCallBack.bind(this));
      return this.response;
    },
    restCall: function(callBack) {
      fetch(this.uri, this.reqObj)
        .then(function(res) {
          return res.json();
        })
        .then(callBack);
    }
  };

  restObject["uri"] = "/ccagentui/v1/posts";
  restObject["reqObj"] = reqObj;
  restObject.makeRestCall();
  return restObject.response;
}
