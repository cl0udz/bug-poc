"use strict";

var _require = require("consono"),
    consono = _require.consono;

//var utils = require('../TestcaseUtils.js');

var json = {
  key1: {
    "a": 1
  },
  key2: [2, 3, 4]
};

function test(userJson) {
  return consono(userJson);
}

//utils.entry(test, json);
test(json);
