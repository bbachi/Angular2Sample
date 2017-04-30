var LOG = require('./../util/log.js');

var baseURL = "http://localhost:8080/";
//var baseURL = "http://stg-ravecrate.us-east-1.elasticbeanstalk.com/";
var RestUtil = function() { };

RestUtil.prototype.request = {};
RestUtil.prototype.response = {};

RestUtil.prototype.request.validateUser = function(req){
    var user = {email:req.body.email,password:req.body.password};
    var reqObj = {};
    reqObj.appName = "WEB";
    reqObj.user = user;
    LOG.info('validateUser Request object:::::::'+JSON.stringify(reqObj));
    return reqObj; 
}

RestUtil.prototype.response.validateUser = function(res){
    var resObj = {userValidated:'N'};
    LOG.info('validateUser Response object:::::::'+JSON.stringify(res));
    if(res.dataAvailable){
        resObj.userValidated = 'Y';
        resObj.userId = res.userId;
    }else{
        resObj.errorMessage = res.errorMessage;
    }
    return resObj;
}

RestUtil.prototype.request.signupUser = function(req) {
    var user = req.body.requestObj;
    var reqObj = {};
    reqObj.appName = "WEB";
    reqObj.user = user;
    LOG.info('sign up user Request object:::::::'+JSON.stringify(reqObj));
    return reqObj;
}

RestUtil.prototype.response.signupUser = function(res) {
    var resObj = {userSaved:'N'};
    LOG.info('sign up user Response object:::::::'+JSON.stringify(res));
    if(res.dataAvailable){
        resObj.userSaved = 'Y';
        resObj.userId = res.userId;
    }else{
        resObj.errorMessage = res.errorMessage;
    }
    return resObj;
}

RestUtil.prototype.request.saveEvent = function(req,userId) {
    LOG.info('save event Request object:::::::'+JSON.stringify(req.body.event));
    LOG.info('user id from the session:::::::'+userId);
    var event = req.body.event;
    var reqObj = {};
    reqObj.event = event;
    reqObj.appName = "WEB";
    reqObj.userId = userId;
    return reqObj;
}

RestUtil.prototype.response.saveEvent = function(res) {
    var resObj = {eventSaved:'N'};
    LOG.info('save event Response object:::::::'+JSON.stringify(res));
    if(res.dataAvailable){
        resObj.eventSaved = 'Y';
        resObj.eventId = res.eventId;
    }else{
        resObj.errorMessage = res.errorMessage;
    }
    return resObj;
}

RestUtil.prototype.request.getEvents = function(req) {
    LOG.info('get events Request object:::::::'+JSON.stringify(req.body.requestObj));
    var address = req.body.address;
    var date = req.body.eventDate;
    var searchItem = req.body.searchItem;
    var reqObj = {};
    reqObj.appName = "WEB";
    reqObj.address = req.body.address;
    reqObj.date = req.body.eventDate;
    return reqObj;
}

RestUtil.prototype.response.getEvents = function(res) {
    var resObj = {eventsFound:'N'};
    LOG.info('get events Response object:::::::'+JSON.stringify(res));
    if(res.dataAvailable){
        resObj.eventsFound = 'Y';
        resObj.events = res.eventList;
        LOG.info('Events list size:::::::'+resObj.events.length);
    }else{
        resObj.events = [];
        resObj.errorMessage = res.errorMessage;
    }
    return resObj;
}

RestUtil.prototype.request.getEventDtls = function(req) {
    LOG.info('get event details Request object:::::::'+JSON.stringify(req.body.requestObj));
    var reqObj = {};
    reqObj.appName = "WEB";
    reqObj.eventId = req.body.eventId;
    return reqObj;
}

RestUtil.prototype.response.getEventDtls = function(res) {
    var resObj = {eventDtlsFound:'N'};
    LOG.info('get event details Response object:::::::'+JSON.stringify(res));
    if(res.dataAvailable){
        var resObj = {eventDtlsFound:'Y'};
        var eventDetail = {};
        eventDetail.event = res.eventDetail.event;
        eventDetail.attendees = [];
        resObj.eventDetail = eventDetail;
    }else{
        resObj.errorMessage = res.errorMessage;
    }
    return resObj;
}


RestUtil.prototype.request.saveFreelancer = function(req,userId) {
    LOG.info('save freelancer Request object:::::::'+JSON.stringify(req.body.event));
    LOG.info('user id from the session:::::::'+userId);
    var freelancer = req.body.freelancer;
    var reqObj = {};
    reqObj.freelancer = freelancer;
    reqObj.appName = "WEB";
    reqObj.userId = userId;
    return reqObj;
}

RestUtil.prototype.response.saveFreelancer = function(res) {
    var resObj = {freelancerSaved:'N'};
    LOG.info('save event Response object:::::::'+JSON.stringify(res));
    if(res.dataAvailable){
        resObj.freelancerSaved = 'Y';
        resObj.freelancerId = res.freelancerId;
    }else{
        resObj.errorMessage = res.errorMessage;
    }
    return resObj;
}


RestUtil.prototype.request.getTxnIdForPswrd = function(req){
    var reqObj = {};
    reqObj.appName = "WEB";
    reqObj.email = req.body.email;
    LOG.info('validateUser Request object:::::::'+JSON.stringify(reqObj));
    return reqObj; 
}

RestUtil.prototype.response.getTxnIdForPswrd = function(res){
    var resObj = {transactionId:''};
    LOG.info('validateUser Response object:::::::'+JSON.stringify(res));
    if(res.dataAvailable){
        resObj.transactionId = data.transactionId;
        resObj.email = data.email;
    }else{
        resObj.errorMessage = res.errorMessage;
    }
    return resObj;
}


RestUtil.prototype.request.resetPassword = function(req){
    var reqObj = {};
    reqObj.appName = "WEB";
    reqObj.transactionId = req.body.transactionId;
    reqObj.password = req.body.password;
    LOG.info('reset password Request object:::::::'+JSON.stringify(reqObj));
    return reqObj; 
}

RestUtil.prototype.response.resetPassword = function(res){
    var resObj = {userValidated:'N'};
    LOG.info('reset password Response object:::::::'+JSON.stringify(res));
   if(res.dataAvailable){
        resObj.userValidated = 'Y';
        resObj.userId = res.user.userId;
    }else{
        resObj.errorMessage = res.errorMessage;
    }
    return resObj;
}


/* My profile request and responses  start*/

RestUtil.prototype.request.myProfile = function(req, user){
    var reqObj = {};
    reqObj.appName = "WEB";
    reqObj.userId = user.userId;
    LOG.info('my profile Request object:::::::'+JSON.stringify(reqObj));
    return reqObj; 
}

RestUtil.prototype.response.myProfile = function(res,userType){
    var resObj = {dataAvailable:false};
    LOG.info('my profile Response object:::::::'+JSON.stringify(res));
    if(res.dataAvailable){
        resObj.dataAvailable = true;
        if(userType == 'U'){
            resObj.user = res.user;
        }else if(userType == 'F'){
            resObj.freelancer = res.freelancer;
            resObj.upcomingEvents = res.upcomingEvents;
            resObj.oldEvents = res.oldEvents;
        }
    }else{
        resObj.errorMessage = res.errorMessage;
    }
    return resObj;
}

RestUtil.prototype.request.updateProfile = function(req, user){
    var reqObj = {};
    reqObj.appName = "WEB";
    reqObj.user = req.body.user;
    reqObj.userType = user.type;
    reqObj.userId = user.userId;
    LOG.info('update profile Request object:::::::'+JSON.stringify(reqObj));
    return reqObj;
}

RestUtil.prototype.response.updateProfile = function(res){
    var resObj = {userUpdated:'N'};
    LOG.info('validateUser Response object:::::::'+JSON.stringify(res));
    if(res.dataAvailable){
        resObj.userUpdated = 'Y';
    }else{
        resObj.errorMessage = res.errorMessage;
    }
    return resObj;
}

/* My profile request and responses  end*/

RestUtil.prototype.urlBin = {
        AuthAccessToken: baseURL+"oauth/token?grant_type=password&username=rc&password=rc9999",
        ValidateUser: baseURL+"auth/validate",
        SaveUser: baseURL+"user/save",

        ListEventsByAddress: baseURL+"event/list",
        ListEventsByDate:  baseURL+"event/list",
        ListEvents: baseURL+"event/list",
        SaveEvent:  baseURL+"event/create",
        GetEventDetails: baseURL+"event/detail",

        ListFreelancersByCity: baseURL+"freelancer/list",
        ListFreelancersByDate: baseURL+"freelancer/list",
        SaveFreelancer: baseURL+"freelancer/create",
        GetFreelancerDetails: baseURL+"freelancer/detail",

        ResetPasswordAndLogin: baseURL+"password/reset",
        GetTxnIdForResetPassword: baseURL+"password/forgot",

        GetFreelancerProfile: baseURL+"myprofile/freelancer",
        GetUserProfile: baseURL+"myprofile/user",
        UpdateProfile: baseURL+"myprofile/update"
    }

module.exports = new RestUtil();