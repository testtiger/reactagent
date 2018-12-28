var authToken = "";

export default function login(credentials, successCallBack, failureCallBack) {
  var formData = frameFormBody();
  var reqObj = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Origin: "",
      Host: "busgk0711.us.oracle.com:9080"
    },
    body: formData
  };
  fetch("/ccagentui/v1/login", reqObj)
    .then(function(res) {
      return res.json();
    })
    .then(successCallBack);
}

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
var successCallBack = function(resJson) {
  console.log(resJson);
  authToken = resJson.access_token;
  console.log(authToken);
  return resJson;
};


//---------------------------------------


var restObject = {
  response1: '',
  saveResponse: function (resp1) {
    console.log('posts are --------->' + resp1);
    this.response1 = resp1;
  }.bind(restObject),
  getPosts: '',
  assignAuthToken: function (resJson) {
    console.log(resJson.access_token);
    var token = resJson.access_token;
    this.authToken = 'Bearer ' + token;
  }.bind(restObject),

  uri: '/ccagentui/v1/posts',
  sucessCallBack: function (resJson) {
    console.log(resJson);
    this.saveResponse(JSON.stringify(resJson))
  }.bind(restObject),
  restCall: function (callBack, additonalHeaders) {
    var reqObj = {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    };
    reqObj.headers['Authorization'] = this.authToken;
    fetch(this.uri, reqObj).then(function (res) {
      return res.json();
    }).then(callBack);
  }.bind(restObject)
}

var loginRestObject = {
  authToken: '',
  sucessCallBack: function (resJson) {
    console.log(resJson.access_token);
    var token = resJson.access_token;
    this.authToken = 'Bearer ' + token;
  },
  getAuthToken: function () {
    this.restCall(this.sucessCallBack.bind(this))
    return this.authToken;
  },
  uri: '/ccagentui/v1/login',
  restCall: function (callBack) {
    function frameFormBody(credentials) {
      var details = {
        username: 'service',
        password: 'service',
        grant_type: 'password'
      };
      var formBody = [
      ];
      for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + '=' + encodedValue);
      }
      formBody = formBody.join('&');
      return formBody;
    }
    var formData = frameFormBody();
    var reqObj = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        Origin: '',
      },
      body: formData
    };
    console.log(callBack + '----------sucesscallback')
    var x = fetch(this.uri, reqObj).then(function (res) {
      return res.json();
    }).then(callBack);
  }
}
