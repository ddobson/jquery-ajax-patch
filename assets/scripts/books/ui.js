'use strict';

const clearContent = function () {

  const $bookContent = $('#response-content');

  if ($bookContent.children().length > 0) {
    $bookContent.empty();
  }
};

const onError = function (response) {
  console.error(response);

  $('#response-content')
    .append('<p class="bg-danger delete-msg">Uh-oh! Something went wrong.</p>');
};

const onSuccess = function (data) {

  if (data.book) {
    console.log(data.book.id);
    $('#response-content')
      .append($("<h3>Book Info</h3>"))
      .append($("<p><strong>ID:</strong> " + data.book.id + "</p>"))
      .append($("<p><strong>Title:</strong> " + data.book.title + "</p>"))
      .append($("<p><strong>Author:</strong> " + data.book.author + "</p>"));
  } else {
    console.table(data.books);
  }
};

const onDeleteSuccess = function () {
  console.log('Book was successfully deleted.');

  $('#response-content')
    .append('<p class="bg-danger delete-msg">Book was successfully deleted.</p>');
};

const onUpdateSuccess = function () {
  $('#response-content')
    .append('<p class="bg-success create-msg">Book was successfully updated.</p>');
};

const onPostSuccess = function () {
  $('#response-content')
    .append('<p class="bg-success create-msg">Book was successfully created.</p>');
};

module.exports = {
  onSuccess,
  onError,
  onDeleteSuccess,
  onUpdateSuccess,
  onPostSuccess,
  clearContent,
};
