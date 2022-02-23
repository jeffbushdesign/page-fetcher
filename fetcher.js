// request library
const request = require('request');

//file system library
const fs = require('fs');

// Use process.argv to receive input 
let input = process.argv.slice(2);
let url = input[0];
let path = input[1];

request(`${url}`, (error, response, body) => {
  // Use the request library to request the given File
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  // Use node fs module to write the file to index
  fs.writeFile(path, body, (error) => {
    console.log('error:', error); // Print the error if one occurred
  });

  // log how big the file was
  console.log(`Downloaded and saved ${Buffer.byteLength(body, 'utf-8')} bytes to ${path}`);
});

// How to Use this file:
// node fetcher.js http://thingiverse ./index.html
