var LOG = require('./../util/log.js');

var baseURL = "http://localhost:8080/";
//var baseURL = "http://stg-ravecrate.us-east-1.elasticbeanstalk.com/";
var RestUtil = function() { };

RestUtil.prototype.request = {};
RestUtil.prototype.response = {};

RestUtil.prototype.request.validateUser = function(req){
    var reqObj = {userName:req.body.email,password:req.body.password};
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
    LOG.info('sign up user Request object:::::::'+JSON.stringify(req.body.requestObj));
    var reqObj = req.body.requestObj;
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

RestUtil.prototype.request.saveEvent = function(req) {
    LOG.info('sign up user Request object:::::::'+JSON.stringify(req.body.requestObj));
    var reqObj = req.body.requestObj;
    return reqObj;
}

RestUtil.prototype.response.saveEvent = function(res) {
    var resObj = {eventSaved:'N'};
    LOG.info('sign up user Response object:::::::'+JSON.stringify(res));
    if(res.dataAvailable){
        resObj.eventSaved = 'Y';
        resObj.eventId = res.eventId;
    }else{
        resObj.errorMessage = res.errorMessage;
    }
    return resObj;
}

RestUtil.prototype.request.getEvents = function(req) {
    LOG.info('sign up user Request object:::::::'+JSON.stringify(req.body.requestObj));
    var reqObj = req.body.requestObj;
    return reqObj;
}

RestUtil.prototype.response.getEvents = function(res) {
    var resObj = {eventsFound:'N'};
    LOG.info('sign up user Response object:::::::'+JSON.stringify(res));
    if(res.dataAvailable){
        resObj.eventsFound = 'Y';
        resObj.events = res.events;
    }else{
        resObj.errorMessage = res.errorMessage;
    }
    return resObj;
}

RestUtil.prototype.request.getEventDtls = function(req) {
    LOG.info('sign up user Request object:::::::'+JSON.stringify(req.body.requestObj));
    var reqObj = req.body.requestObj;
    return reqObj;
}

RestUtil.prototype.response.getEventDtls = function(res) {
    var resObj = {eventDtlsFound:'N'};
    LOG.info('sign up user Response object:::::::'+JSON.stringify(res));
    if(res.dataAvailable){
        resObj.eventDtlsFound = 'Y';
        resObj.eventDtls = res.eventDtls;
    }else{
        resObj.errorMessage = res.errorMessage;
    }
    return resObj;
}

RestUtil.prototype.urlBin = {
        AuthAccessToken: baseURL+"oauth/token?grant_type=password&username=rc&password=rc9999",
        ValidateUser: baseURL+"auth/validate",
        SaveUser: baseURL+"user/save",

        ListEventsByAddress: baseURL+"event/list",
        ListEventsByDate:  baseURL+"event/list",
        SaveEvent:  baseURL+"event/create",
        GetEventDetails: baseURL+"event/detail",

        ListFreelancersByCity: baseURL+"freelancer/list",
        ListFreelancersByDate: baseURL+"freelancer/list",
        SaveFreelancer: baseURL+"freelancer/create",
        GetFreelancerDetails: baseURL+"freelancer/detail",
    }

module.exports = new RestUtil();