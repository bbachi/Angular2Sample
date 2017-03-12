var request = require('request');

var RestTemplate = function() { };

function resp(data){
    return data;
}

RestTemplate.prototype.accessToken = function(url,resp){
    console.log('url:::'+url);
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
    request.post({
            headers: {'content-type' : 'application/json'},
            url:     url,
            body:    JSON.stringify(postData),
            auth: {'bearer': accessToken}
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