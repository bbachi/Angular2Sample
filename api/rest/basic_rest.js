var request = require('request');

var RestTemplate = function() { };

function resp(data){
    return data;
}

RestTemplate.prototype.post = function(url, postData,resp){
    request.post({
            headers: {'content-type' : 'application/json'},
            url:     url,
            body:    JSON.stringify(postData)
        }, function(error, response, body){
            resp(body);
        });
}

RestTemplate.prototype.get = function(url,resp){
    request.get({url:url
        }, function(error, response, body){
            console.log(body);
            resp(body);
        });
}

module.exports = new RestTemplate();