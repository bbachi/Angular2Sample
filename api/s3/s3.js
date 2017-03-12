var LOG = require('./../util/log.js');
var AWS = require('aws-sdk');     // import entire SDK 
var AWS = require('aws-sdk/global');  // import AWS object without services 
var S3 = require('aws-sdk/clients/s3');  // import individual service 
var awsConfig = require('aws-config');

var s3 = new AWS.S3(awsConfig({accessKeyId: 'AKIAJG5U7PDPVTOTRDEQ', 
                secretAccessKey: "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"}));

var AWSS3 = function() {};
//AWS.config.loadFromPath('./config.json');  // Load credentials and set region from JSON file
//s3 = new AWS.S3({apiVersion: '2006-03-01'}); // Create S3 service object

var s3Bucket = new AWS.S3( { params: {Bucket: 'ravecrateimages'} } );

AWSS3.prototype.listBuckets = function() {
    // Call S3 to list current buckets
    s3.listBuckets(function(err, data) {
    if (err) {LOG.info("Error", err);
    } else {LOG.info("Bucket List", data.Buckets);}
    });
}

AWSS3.prototype.uploadImage = function(file,respCallback){
    
    LOG.info('D::::'+JSON.stringify(s3Bucket.endpoint));
    LOG.info(file);
    respCallback({status:'OK'});
}

function respCallback(data){
    return data;
}                  


module.exports = new AWSS3();