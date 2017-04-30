var Email = require('./api/email/email.js');
var RestTemplate = require('./api/rest/basic_rest.js');
var LOG = require('./api/util/log.js');
var RestUtil = require('./api/rest/restUtil.js');
var AWSS3 = require('./api/s3/s3.js');


var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser');
    session = require('express-session');

var app = express();
app.use(bodyParser.json());
app.use(session({secret: 'ssshhhhh'}));

var rcsession;

var raveCrateRouter = express.Router();
app.use('/resource',raveCrateRouter);
var port = process.env.PORT || 3000;

/* we need to set these for node.js to access all the files in the app */
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/node_modules')));
app.use(express.static(path.join(__dirname, '/api')));

var accessToken = '';

//this is for loading the index.html
app.get('/', function(req, res) {
    rcsession = req.session;
    rcsession.accessToken = accessToken;
    LOG.info("loading home page::::");
    res.sendFile(path.join(__dirname + '/index.html'));
});


RestTemplate.accessToken(RestUtil.urlBin.AuthAccessToken,function(response){
    accessToken = response.access_token;
    LOG.info('ACCESS TOKEN::::'+JSON.stringify(response));
});

raveCrateRouter.route('/validateUser').post(function(req,res) {
    RestTemplate.post(RestUtil.urlBin.ValidateUser,RestUtil.request.validateUser(req), rcsession.accessToken,function(response){
       createUserInSession(req,response);
       res.json(RestUtil.response.validateUser(JSON.parse(response)));
    })
});

raveCrateRouter.route('/signupUser').post(function(req,res) {
    RestTemplate.post(RestUtil.urlBin.SaveUser,RestUtil.request.signupUser(req), rcsession.accessToken,function(response){
        res.json(RestUtil.response.signupUser(JSON.parse(response)));
    })
});

raveCrateRouter.route('/saveEvent').post(function(req,res) {
    RestTemplate.post(RestUtil.urlBin.SaveEvent,RestUtil.request.saveEvent(req, rcsession.user.userId), rcsession.accessToken,function(response){
        res.json(RestUtil.response.saveEvent(JSON.parse(response)));
    })
});

raveCrateRouter.route('/getEvents').post(function(req,res) {
    RestTemplate.post(RestUtil.urlBin.ListEvents,RestUtil.request.getEvents(req), rcsession.accessToken,function(response) {
        res.json(RestUtil.response.getEvents(JSON.parse(response)));
    })
});

raveCrateRouter.route('/getEventDtls').post(function(req,res) {
    console.log(req.body.requestObj);
    RestTemplate.post(RestUtil.urlBin.GetEventDetails,RestUtil.request.getEventDtls(req), rcsession.accessToken,function(response){
        res.json(RestUtil.response.getEventDtls(JSON.parse(response)));
    })
});

raveCrateRouter.route('/saveFreelancer').post(function(req,res) {
    RestTemplate.post(RestUtil.urlBin.SaveFreelancer,RestUtil.request.saveFreelancer(req, rcsession.user.userId), rcsession.accessToken,function(response){
        res.json(RestUtil.response.saveFreelancer(JSON.parse(response)));
    })
});

raveCrateRouter.route('/resetpassword').post(function(req,res) {
    RestTemplate.post(RestUtil.urlBin.ResetPasswordAndLogin,RestUtil.request.saveFreelancer(req, rcsession.user.userId), rcsession.accessToken,function(response){
        res.json(RestUtil.response.saveFreelancer(JSON.parse(response)));
    })
});

raveCrateRouter.route('/gettxnidforpassword').post(function(req,res) {
    RestTemplate.post(RestUtil.urlBin.GetTxnIdForResetPassword,RestUtil.request.getTxnIdForPswrd(req), rcsession.accessToken,function(response){
        res.json(RestUtil.response.getTxnIdForPswrd(JSON.parse(response)));
    })
});

/* My profile resource calls start */
raveCrateRouter.route('/getMyProfile').post(function(req,res) {
    var userType = rcsession.user.type;
    var url = '';
    if(userType == 'U'){ url = RestUtil.urlBin.GetUserProfile; }
    else if(userType == 'EH'){ url = RestUtil.urlBin.GetUserProfile; }
    else if(userType == 'F'){ url = RestUtil.urlBin.GetFreelancerProfile; }
    RestTemplate.post(url, RestUtil.request.myProfile(req,rcsession.user), rcsession.accessToken,function(response){
        res.json(RestUtil.response.myProfile(JSON.parse(response),userType));
    })
});


raveCrateRouter.route('/updateProfile').post(function(req,res) {
    RestTemplate.post(RestUtil.urlBin.UpdateProfile, RestUtil.request.updateProfile(req,rcsession.user), rcsession.accessToken,function(response){
        res.json(RestUtil.response.updateProfile(JSON.parse(response)));
    })
});
/* My profile resource calls end */

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

app.get('*', function(req, res) {
   res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function(err) {
    LOG.info("running server on from gulp port:::::::" + port);
});


function createUserInSession(req,resp) {
    var res = JSON.parse(resp);
    if(res.dataAvailable){
        rcsession.user = res.user;
        LOG.info('user validated:::creating session with user id:::::'+JSON.stringify(rcsession.user));
    }else{
        LOG.info('user not validated:::session is not created for the:::'+req.body.email);
    }
    
}


