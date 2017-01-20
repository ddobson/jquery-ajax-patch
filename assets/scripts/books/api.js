'use strict';

const config = require('../config.js');

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/books',
    method: 'GET',
  });
};

const show = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/books/' + id,
    method: 'GET',
  });
};

const destroy = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/books/' + id,
    method: 'DELETE',
  });
};

const patch = function (id, json) {
  return $.ajax({
    url: config.apiOrigin + '/books/' + id,
    method: 'PATCH',
    data: json,
  });
};

module.exports = {
  index,
  show,
  destroy,
  patch,
};
