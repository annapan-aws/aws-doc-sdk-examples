 
//snippet-sourcedescription:[iam_updateservercert.js demonstrates how to update the name of an IAM SSL/TLS server certificate.]
//snippet-keyword:[JavaScript]
//snippet-keyword:[Code Sample]
//snippet-keyword:[AWS Identity and Access Management (IAM)]
//snippet-service:[iam]
//snippet-sourcetype:[full-example]
//snippet-sourcedate:[2018-06-02]
//snippet-sourceauthor:[daviddeyo]


// Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// Licensed under the Apache-2.0 License on an "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND.   

// ABOUT THIS NODE.JS SAMPLE: This sample is part of the SDK for JavaScript Developer Guide topic at
// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/iam-examples-server-certificates.html
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'REGION'});

// Create the IAM service object
var iam = new AWS.IAM({apiVersion: '2010-05-08'});

var params = {
  ServerCertificateName: 'CERTIFICATE_NAME',
  NewServerCertificateName: 'NEW_CERTIFICATE_NAME'
};

iam.updateServerCertificate(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});
