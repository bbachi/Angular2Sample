var LOG = require('./../util/log.js');

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
    LOG.info('validateUser Response object:::::::'+res);
    return resObj;
}


RestUtil.prototype.urlBin = {
        ValidateUser: "http://stg-ravecrate.us-east-1.elasticbeanstalk.com/auth/validate",
        SaveUser: "http://stg-ravecrate.us-east-1.elasticbeanstalk.com/user/save",

        ListEventsByAddress: "http://stg-ravecrate.us-east-1.elasticbeanstalk.com/event/list",
        ListEventsByDate:  "http://stg-ravecrate.us-east-1.elasticbeanstalk.com/event/list",
        SaveEvent:  "http://stg-ravecrate.us-east-1.elasticbeanstalk.com/event/create",
        GetEventDetails: "http://stg-ravecrate.us-east-1.elasticbeanstalk.com/event/detail",

        ListFreelancersByCity: "http://stg-ravecrate.us-east-1.elasticbeanstalk.com/freelancer/list",
        ListFreelancersByDate: "http://stg-ravecrate.us-east-1.elasticbeanstalk.com/freelancer/list",
        SaveFreelancer: "http://stg-ravecrate.us-east-1.elasticbeanstalk.com/freelancer/create",
        GetFreelancerDetails: "http://stg-ravecrate.us-east-1.elasticbeanstalk.com/freelancer/detail",
    }

module.exports = new RestUtil();