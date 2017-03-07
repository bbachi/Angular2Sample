var LOG = function() {};

LOG.prototype.info = function(logText) {
    console.log(new Date()+':::::'+logText);
};

module.exports = new LOG();