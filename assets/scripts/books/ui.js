'use strict';

const clearContent = function () {

  const $bookContent = $('#response-content');
  const $tableContent = $('.table');

  if ($bookContent.children().length > 0) {
    $bookContent.empty();
  }

  $tableContent.fadeOut();
};

const createTable = function(data) {
  const $tableConent = $('tbody');

  for (let i = 0; i < data.books.length; i++) {
    const $row = $('<tr/>');
    const book = data.books[i];

    $tableConent.append($row);

    for (let key in book) {
      $row.append('<td>' + book[key] + '</td>');
    }
  }

  $('.table').fadeIn();
};

const onError = function (response) {
  console.error(response);

  $('#response-content')
    .append('<p class="bg-danger delete-msg">Uh-oh! Something went wrong.</p>');
};

const onSuccess = function (data) {

  if (data.book) {
    console.log(data.book);
    $('#response-content')
      .append($('<h3>Book Info</h3>'))
      .append($('<p><strong>ID:</strong> ' + data.book.id + '</p>'))
      .append($('<p><strong>Title:</strong> ' + data.book.title + '</p>'))
      .append($('<p><strong>Author:</strong> ' + data.book.author + '</p>'));
  } else {
    createTable(data);
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
