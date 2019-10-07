'use strict';

const fs = require('fs');
const logger = require('logger');
const eventHub = require('eventHub');

fs.writeFile( file, Buffer.from(text), (err, data) => {
  if(err) { throw err; }
  console.log(`${file} saved`);
});

fs.readFile( file, (err, data) => {
  if(err) { throw err; }
});

let text = data.toString().toUpperCase();

let file = process.argv.slice(2).shift();
alterFile(file);
