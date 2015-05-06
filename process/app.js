"use strict";

var Q = require('q');

/**
 * process takes an array of data sources and sorts based on input field
 * @param input {object} input settings and input data
 * @returns {object}
 */
exports.process = function (input) {

    var deferred = Q.defer();

    var data = input.data;
    var settings = input.settings;

    var returnData = data.sort(function(a, b){
        return a[settings.field] > b[settings.field];
    });

    deferred.resolve(returnData);

    return deferred.promise;
};
