'use strict';

const fs = require('fs');
require('./logger');
const eventHub = require('./event');
const {promisify} = require('util');

const readFileProm = promisify(fs.readFile);

const writeFileProm = promisify(fs.writeFile);


const alterFile = (file) => {
  readFileProm(file)
  .then(data => {
    let text = data.toString().toUpperCase();
    writeFileProm(file, Buffer.from(text));
    console.log(text);
      console.log(`${file} saved`);
      eventHub.emit('save', file);
  })
   .catch(error => {
     eventHub.emit('error', error)
   })
  };


let file = process.argv.slice(2).shift();
alterFile(file);
