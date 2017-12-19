const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);

/*
FINAL
{
  "name": "courierservice",
  "version": "0.0.0",
  "license": "MIT",
  "main": "app.js",
  "angular-cli": {},
  "scripts": {
    "ng": "ng",
    "start": "node server.js",
    "test": "ng test",
    "pree2e": "webdriver-manager update --standalone false --gecko false",
    "e2e": "protractor",
  "postinstall": "ng build --aot -prod"
  },
  "engines": {
    "node": "8.4.0",
    "npm": "5.5.1"
  },
  */


/* OLD

{
  "name": "courierservice",
  "version": "0.0.0",
  "license": "MIT",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "engines": {
    "node": "8.4.0",
    "npm": "5.5.1"
  },


*/


/*
  "postinstall": "ng build --aot -prod"
    "postinstall": "ng build && mv dist/* ."


  "preinstall": "npm install -g @angular/cli",
    "postinstall": "ng build --aot -prod"
    
/*
{
  "name": "trac-ko",
  "version": "0.0.0",
  "license": "MIT",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "engines": {
    "node": "8.4.0",
    "npm": "5.5.1"
  },
  "private": true,
  */



/*

  {
  "name": "trac-ko",
  "version": "0.0.0",
  "license": "MIT",
  "main": "app.js",
  "angular-cli": {},
  "scripts": {
    "ng": "ng",
    "start": "node server.js",
    "test": "ng test",
    "pree2e": "webdriver-manager update --standalone false --gecko false",
    "e2e": "protractor",
    "postinstall": "ng build --aot -prod"
  },
  "engines": {
    "node": "8.4.0",
    "npm": "5.5.1"
  },
*/

/*
    "start": "ng serve --port 4500 --proxy-config proxy.conf.json node server.js",
*/

