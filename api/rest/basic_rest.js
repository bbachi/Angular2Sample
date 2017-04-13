var request = require('request');
var LOG = require('./../util/log.js');

var RestTemplate = function() { };

function resp(data){
    return data;
}

RestTemplate.prototype.accessToken = function(url,resp){
    LOG.info('url:::'+url);
    request.post({
        url: url,
        auth: {user: 'rc_node_client',pass: 'ravecrate000999'},
        form: {'grant_type': 'client_credentials'}
    }, function(err, res) {
    var json = JSON.parse(res.body);
        resp(json);
    });
}

RestTemplate.prototype.post = function(url, postData,accessToken,resp){
    LOG.info('url:::'+url+'::access token::::'+accessToken+':::postdata::::'+JSON.stringify(postData));
    request.post({
            headers: {'content-type' : 'application/json'},
            url:     url,
            body:    JSON.stringify(postData),
            auth: {'bearer': accessToken}
        }, function(error, response, body){
            LOG.info(response.statusCode);
            LOG.info(response.statusMessage);
            if(response.statusCode == 200){
                resp(body);
            }else{
                resp(response.statusMessage);
            }
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