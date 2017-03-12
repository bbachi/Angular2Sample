var Email = require('./api/email/email.js');
var RestTemplate = require('./api/rest/basic_rest.js');
var LOG = require('./api/util/log.js');
var RestUtil = require('./api/rest/restUtil.js');
var AWSS3 = require('./api/s3/s3.js');


var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

var raveCrateRouter = express.Router();
app.use('/resource',raveCrateRouter);
var port = process.env.PORT || 3000;

/* we need to set these for node.js to access all the files in the app */
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/node_modules')));
app.use(express.static(path.join(__dirname, '/api')));

//this is for loading the index.html
app.get('/', function(req, res) {
    LOG.info("loading home page::::");
    res.sendFile(path.join(__dirname + '/index.html'));
});

var accessToken = '';

RestTemplate.accessToken(RestUtil.urlBin.AuthAccessToken,function(response){
    accessToken = response.access_token;
    LOG.info('ACCESS TOKEN::::'+JSON.stringify(response));
});

raveCrateRouter.route('/validateUser').post(function(req,res) {
    RestTemplate.post(RestUtil.urlBin.ValidateUser,RestUtil.request.validateUser(req), accessToken,function(response){
        res.json(RestUtil.response.validateUser(JSON.parse(response)));
    })
});

raveCrateRouter.route('/signupUser').post(function(req,res) {
    console.log(req.body.requestObj);
    RestTemplate.post(RestUtil.urlBin.SaveUser,RestUtil.request.signupUser(req), accessToken,function(response){
        res.json(RestUtil.response.signupUser(JSON.parse(response)));
    })
});

raveCrateRouter.route('/saveEvent').post(function(req,res) {
    console.log(req.body.requestObj);
    RestTemplate.post(RestUtil.urlBin.SaveEvent,RestUtil.request.SaveEvent(req), accessToken,function(response){
        res.json(RestUtil.response.SaveEvent(JSON.parse(response)));
    })
});

raveCrateRouter.route('/getEvents').post(function(req,res) {
    console.log(req.body.requestObj);
    RestTemplate.post(RestUtil.urlBin.SaveUser,RestUtil.request.getEvents(req), accessToken,function(response){
        res.json(RestUtil.response.getEvents(JSON.parse(response)));
    })
});

raveCrateRouter.route('/getEventDtls').post(function(req,res) {
    console.log(req.body.requestObj);
    RestTemplate.post(RestUtil.urlBin.SaveUser,RestUtil.request.getEventDtls(req), accessToken,function(response){
        res.json(RestUtil.response.getEventDtls(JSON.parse(response)));
    })
});

raveCrateRouter.route('/uploadEventImg').post(function(req,res){
    AWSS3.uploadImage(req.body.file, function(response){
        LOG.info(response.status);
    });
});

/* sending email logic start */
raveCrateRouter.route('/sendemail').post(function(req,res){
    var emailOptions =  req.body.emailOptions;
    Email.log(JSON.stringify(emailOptions));
    Email.sendEmail(emailOptions);
});

app.listen(port, function(err) {
    LOG.info("running server on from gulp port:::::::" + port);
});


