"use strict";
const fs = require('fs');

fs.readFile('./maze.js', (err, data) => {
  let decode = data.toString('utf8');
  console.log(decode);
})
