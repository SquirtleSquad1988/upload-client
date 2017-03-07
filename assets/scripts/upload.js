'use strict';

const getFormFields = require('../../lib/get-form-fields');

const createUploadEncoded = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log('data is: ', data);

  return $.ajax({
    url: 'http://localhost:4741/uploads',
    method: 'POST',
    data
  });
};

const createUploadMultiPart = function (event) {
  event.preventDefault();
  let data = new FormData(event.target);
  // data.get('formField') gets whichever data attribute given in html form
  console.log('data is: ', data.get('image[file]').name);
  // takes a form object, takes the stuff out of it and puts it in ajax
  // allows you to include files in the form, in contrase to getFormFields
  return $.ajax({
    url: 'http://localhost:4741/uploads',
    method: 'POST',
    data,
    // tells ajax not to encode our data, leave data as is
    contentType: false,
    processData: false
  });
};

module.exports = {
  createUploadEncoded,
  createUploadMultiPart
};
