'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = {
  name: 'DELETE',
  req: function req(payload) {
    if (payload.req.method === 'DELETE') {
      payload.req.headers = {
        'Content-Type': 'application/vnd.api+json',
        'Accept': 'application/vnd.api+json'
      };

      var data = payload.req.data;
      if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
        if (Object.keys(data).length === 0) {
          delete payload.req.data;
        } else {
          payload.req.data = { data: data };
        }
      }
    }

    return payload;
  }
};