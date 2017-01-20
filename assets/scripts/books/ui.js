'use strict';

const onSuccess = function (data) {
  if (data.book) {
    console.log(data.book);
  } else {
    console.table(data.books);
  }
};

const onError = function (response) {
  console.error(response);
};

const onDeleteSuccess = function () {
  console.log('Book was successfully deleted.');
};

const onPatchSuccess = function () {
  console.log('Book was successfully patched.');
};

const onPostSuccess = function () {
  console.log('Book was successfully created.');
};

module.exports = {
  onSuccess,
  onError,
  onDeleteSuccess,
  onPatchSuccess,
  onPostSuccess,
};
