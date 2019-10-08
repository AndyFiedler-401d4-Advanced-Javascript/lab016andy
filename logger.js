'use strict';

const eventHub = require('./event');

eventHub.on('save', file => {
  console.log(`Record ${file} was saved!`)});

  // eventHub.on('error', file => {
  //   console.log(`Record ${file} was saved!`)});