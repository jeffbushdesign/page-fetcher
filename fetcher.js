
// Use process.argv to receive input 
// Make a new function that receives a callback
// Use the request library to request the given File
// Use node fs module to write the file and read the size
// Use the writeFile function for this (not the Sync version)
const fetch = function (input, callback) {

};

function fetch(url, localPath, callback) {
  let sum = num1 + num2;
  myCallback(sum);

}
// function download(url, callback) {
//   setTimeout(() => {
//     console.log(`Downloading ${url} ...`);
//     callback(url);
//   }, 1000);
// }

myCalculator(5, 5, myDisplayer);

const map = function (array, callback) {
  // temporary code:
  console.log('array: ', array);
  console.log('callback: ', callback);

  const results = [];
  return results;
};


const sum = function () {
  const args = process.argv.slice(2); // get only the 3rd and 4th indexed array items
  let total = 0; // total variable starts at 0
  for (let i = 0; i < args.length; i++) { // loop through all the items in the array
    total = total + Number(args[i]); // update the total by adding each array item. number converts string array items to numbers
  }
  console.log(total); // print the total
};

sum(); // call the sum function




const request = require('request');
request('https://nathanwentworth.co/', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

