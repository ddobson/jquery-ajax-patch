'use strict';

const clearContent = function () {

  const bookContent = $('#response-content');

  if (bookContent.children().length > 0) {
    bookContent.empty();
  }
};

const onSuccess = function (data) {
  clearContent();

  if (data.book) {
    console.log(data.book);
  } else {
    console.table(data.books);
  }
};

const onError = function (response) {
  console.error(response);

  clearContent();

  $('#response-content')
    .append('<p class="bg-danger delete-msg">Uh-oh! Something went wrong.</p>');
};

const onDeleteSuccess = function () {
  console.log('Book was successfully deleted.');

  clearContent();

  $('#response-content')
    .append('<p class="bg-danger delete-msg">Book was successfully deleted.</p>');
};

const onPatchSuccess = function () {
  console.log('Book was successfully updated.');
};

const onPostSuccess = function () {
  console.log('Book was successfully created.');

  clearContent();

  $('#response-content')
    .append('<p class="bg-success create-msg">Book was successfully created.</p>');
};

module.exports = {
  onSuccess,
  onError,
  onDeleteSuccess,
  onPatchSuccess,
  onPostSuccess,
  clearContent,
};
