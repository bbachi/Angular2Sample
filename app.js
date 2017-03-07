var Email = require('./api/email/email.js');
var RestTemplate = require('./api/rest/basic_rest.js');
var LOG = require('./api/util/log.js');
var RestUtil = require('./api/rest/restUtil.js');


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

raveCrateRouter.route('/validateUser').post(function(req,res){
    RestTemplate.post(RestUtil.urlBin.ValidateUser,RestUtil.request.validateUser(req), function(response){
        res.json(RestUtil.response.validateUser(response));
    })
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


