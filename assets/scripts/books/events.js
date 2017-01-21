'use strict';

const api = require('./api.js');
const ui = require('./ui.js');

// attach getFormFields globally

const getFormFields = require('../../../lib/get-form-fields.js');

// get in the habit of naming your handlers, it eases debugging
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked

const getBooks = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  if (data.book.id.length === 0) {
    api.index()
      .then(ui.onSuccess)
      .catch(ui.onError);
  } else {
    api.show(data.book.id)
      .then(ui.onSuccess)
      .catch(ui.onError);
  }
};

const deleteBook = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.destroy(data.book.id)
    .then(ui.onDeleteSuccess)
    .catch(ui.onError);
};

const patchBook = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.patch(data.book.id, data)
    .then(ui.onUpdateSuccess)
    .catch(ui.onError);
};

const postBook = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.post(data)
    .then(ui.onPostSuccess)
    .catch(ui.onError);
};

const sendApiRequest = function (event) {
  ui.clearContent();

  const submitType = this.name;

  if (submitType === 'search') {
    getBooks(event);
  } else if (submitType === 'create') {
    postBook(event);
  } else if (submitType === 'update') {
    patchBook(event);
  } else if (submitType === 'delete') {
    deleteBook(event);
  }
};

module.exports = {
  sendApiRequest,

  // onGetBooks,
  // onDeleteBook,
  // onPatchBook,
  // onCreateBook,

};
