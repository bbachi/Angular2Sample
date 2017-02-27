var express = require('express'),
    path = require('path');

var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser');

var request = require('request');

var nodemailer = require('nodemailer');

var app = express();
app.use(bodyParser.json());

var raveCrateRouter = express.Router();
app.use('/resource',raveCrateRouter);
var port = process.env.PORT || 3000;

/* we need to set these for node.js to access all the files in the app */
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/node_modules')));

//this is for loading the index.html
app.get('/', function(req, res) {
    console.log("sendiing html for the path /");
    res.sendFile(path.join(__dirname + '/index.html'));
});

var users = [{}];

/* validate user post request */
raveCrateRouter.route('/validateUser').post(function(req,res){
    
    var userName = req.body.email;
    var password = req.body.password;
    var responseObj = {userValidated:'N'};
    console.log("request in the server::::"+userName+":::"+password);
    for(let i=0; i<users.length; i++){
        if(users[i].email === userName && users[i].password === password){
            console.log('user validated for the username::::::' + userName);
            responseObj.userValidated = 'Y';
        }
    }
    console.log('returning response for validate user:::::' + JSON.stringify(responseObj));
    res.json(responseObj);
});


var events = [
        {"eventId":1,"title":"THING0", "address":{"streetNumber":"1201","streetName":"Fannin st","city":"Houston","state":"TX","zipcode":"77002"},"venue":"exchange LA","host":"zanzibar","type":"public","phone":"3104523434", "email":"abc@gmail.com"},
        {"eventId":2,"title":"THING1", "address":{"streetNumber":"4400","streetName":"Memorial Dr","city":"Houston","state":"TX","zipcode":"77007"},"venue":"exchange LA","host":"zanzibar","type":"public","phone":"3104523434", "email":"abc@gmail.com"},
        {"eventId":3,"title":"THING2", "address":{"streetNumber":"7979","streetName":"Westheimer Rd","city":"Houston","state":"TX","zipcode":"77063"},"venue":"exchange LA","host":"zanzibar","type":"public","phone":"3104523434", "email":"abc@gmail.com"},
        {"eventId":4,"title":"THING3", "address":{"streetNumber":"2525","streetName":"Old Farm Rd","city":"Houston","state":"TX","zipcode":"77063"},"venue":"exchange LA","host":"zanzibar","type":"public","phone":"3104523434", "email":"abc@gmail.com"},
        {"eventId":5,"title":"THING4", "address":{"streetNumber":"2601","streetName":"Woodland park Dr","city":"Houston","state":"TX","zipcode":"77077"},"venue":"exchange LA","host":"zanzibar","type":"public","phone":"3104523434", "email":"abc@gmail.com"},
        {"eventId":6,"title":"THING5", "address":{"streetNumber":"1301","streetName":"5th street","city":"santa monica","state":"CA","zipcode":"90046"},"venue":"exchange LA","host":"zanzibar","type":"public","phone":"3104523434", "email":"abc@gmail.com"},
        {"eventId":7,"title":"THING6", "address":{"streetNumber":"1301","streetName":"5th street","city":"santa monica","state":"CA","zipcode":"90046"},"venue":"exchange LA","host":"zanzibar","type":"public","phone":"3104523434", "email":"abc@gmail.com"},
        {"eventId":8,"title":"THING7", "address":{"streetNumber":"1301","streetName":"5th street","city":"santa monica","state":"CA","zipcode":"90046"},"venue":"exchange LA","host":"zanzibar","type":"public","phone":"3104523434", "email":"abc@gmail.com"},
        {"eventId":9,"title":"THING8", "address":{"streetNumber":"1301","streetName":"5th street","city":"santa monica","state":"CA","zipcode":"90046"},"venue":"exchange LA","host":"zanzibar","type":"public","phone":"3104523434", "email":"abc@gmail.com"},
        {"eventId":10,"title":"THING9", "address":{"streetNumber":"1301","streetName":"5th street","city":"santa monica","state":"CA","zipcode":"90046"},"venue":"exchange LA","host":"zanzibar","type":"public","phone":"3104523434", "email":"abc@gmail.com"},
        {"eventId":11,"title":"THING10", "address":{"streetNumber":"1301","streetName":"5th street","city":"santa monica","state":"CA","zipcode":"90046"},"venue":"exchange LA","host":"zanzibar","type":"public","phone":"3104523434", "email":"abc@gmail.com"},
        {"eventId":12,"title":"THING11", "address":{"streetNumber":"1301","streetName":"5th street","city":"santa monica","state":"CA","zipcode":"90046"},"venue":"exchange LA","host":"zanzibar","type":"public","phone":"3104523434", "email":"abc@gmail.com"},
        {"eventId":13,"title":"THING12", "address":{"streetNumber":"1301","streetName":"5th street","city":"santa monica","state":"CA","zipcode":"90046"},"venue":"exchange LA","host":"zanzibar","type":"public","phone":"3104523434", "email":"abc@gmail.com"},
        {"eventId":14,"title":"THING13", "address":{"streetNumber":"1301","streetName":"5th street","city":"santa monica","state":"CA","zipcode":"90046"},"venue":"exchange LA","host":"zanzibar","type":"public","phone":"3104523434", "email":"abc@gmail.com"},
        {"eventId":15,"title":"THING14", "address":{"streetNumber":"1301","streetName":"5th street","city":"santa monica","state":"CA","zipcode":"90046"},"venue":"exchange LA","host":"zanzibar","type":"public","phone":"3104523434", "email":"abc@gmail.com"},
        {"eventId":16,"title":"THING15", "address":{"streetNumber":"1301","streetName":"5th street","city":"santa monica","state":"CA","zipcode":"90046"},"venue":"exchange LA","host":"zanzibar","type":"public","phone":"3104523434", "email":"abc@gmail.com"},
        {"eventId":17,"title":"THING16", "address":{"streetNumber":"1301","streetName":"5th street","city":"santa monica","state":"CA","zipcode":"90046"},"venue":"exchange LA","host":"zanzibar","type":"public","phone":"3104523434", "email":"abc@gmail.com"},
        {"eventId":18,"title":"THING17", "address":{"streetNumber":"1301","streetName":"5th street","city":"santa monica","state":"CA","zipcode":"90046"},"venue":"exchange LA","host":"zanzibar","type":"public","phone":"3104523434", "email":"abc@gmail.com"},
        {"eventId":19,"title":"THING18", "address":{"streetNumber":"1301","streetName":"5th street","city":"santa monica","state":"CA","zipcode":"90046"},"venue":"exchange LA","host":"zanzibar","type":"public","phone":"3104523434", "email":"abc@gmail.com"},
        {"eventId":20,"title":"THING19", "address":{"streetNumber":"1301","streetName":"5th street","city":"santa monica","state":"CA","zipcode":"90046"},"venue":"exchange LA","host":"zanzibar","type":"public","phone":"3104523434", "email":"abc@gmail.com"},
        {"eventId":21,"title":"THING20", "address":{"streetNumber":"1301","streetName":"5th street","city":"santa monica","state":"CA","zipcode":"90046"},"venue":"exchange LA","host":"zanzibar","type":"public","phone":"3104523434", "email":"abc@gmail.com"},
        {"eventId":22,"title":"THING21", "address":{"streetNumber":"1301","streetName":"5th street","city":"santa monica","state":"CA","zipcode":"90046"},"venue":"exchange LA","host":"zanzibar","type":"public","phone":"3104523434", "email":"abc@gmail.com"},
        {"eventId":23,"title":"THING22", "address":{"streetNumber":"1301","streetName":"5th street","city":"santa monica","state":"CA","zipcode":"90046"},"venue":"exchange LA","host":"zanzibar","type":"public","phone":"3104523434", "email":"abc@gmail.com"},
        {"eventId":24,"title":"THING23", "address":{"streetNumber":"1301","streetName":"5th street","city":"santa monica","state":"CA","zipcode":"90046"},"venue":"exchange LA","host":"zanzibar","type":"public","phone":"3104523434", "email":"abc@gmail.com"},
        {"eventId":25,"title":"THING24", "address":{"streetNumber":"1301","streetName":"5th street","city":"santa monica","state":"CA","zipcode":"90046"},"venue":"exchange LA","host":"zanzibar","type":"public","phone":"3104523434", "email":"abc@gmail.com"},
        {"eventId":26,"title":"THING25", "address":{"streetNumber":"1301","streetName":"5th street","city":"santa monica","state":"CA","zipcode":"90046"},"venue":"exchange LA","host":"zanzibar","type":"public","phone":"3104523434", "email":"abc@gmail.com"},
        {"eventId":27,"title":"THING26", "address":{"streetNumber":"1301","streetName":"5th street","city":"santa monica","state":"CA","zipcode":"90046"},"venue":"exchange LA","host":"zanzibar","type":"public","phone":"3104523434", "email":"abc@gmail.com"},
        {"eventId":28,"title":"THING27", "address":{"streetNumber":"1301","streetName":"5th street","city":"santa monica","state":"CA","zipcode":"90046"},"venue":"exchange LA","host":"zanzibar","type":"public","phone":"3104523434", "email":"abc@gmail.com"},
        {"eventId":29,"title":"THING28", "address":{"streetNumber":"1301","streetName":"5th street","city":"santa monica","state":"CA","zipcode":"90046"},"venue":"exchange LA","host":"zanzibar","type":"public","phone":"3104523434", "email":"abc@gmail.com"},
        {"eventId":30,"title":"THING29", "address":{"streetNumber":"1301","streetName":"5th street","city":"santa monica","state":"CA","zipcode":"90046"},"venue":"exchange LA","host":"zanzibar","type":"public","phone":"3104523434", "email":"abc@gmail.com"},
        {"eventId":31,"title":"THING30", "address":{"streetNumber":"1301","streetName":"5th street","city":"santa monica","state":"CA","zipcode":"90046"},"venue":"exchange LA","host":"zanzibar","type":"public","phone":"3104523434", "email":"abc@gmail.com"}
    ];


/* signup user post request */
raveCrateRouter.route('/signupUser').post(function(req,res){
    
    var user = req.body.user;
    console.log('request for the sign up user::::' + JSON.stringify(user));
    users.push(user);
    res.json(user);
});


/* get events post request 
   A = search by address
   D = search by date
*/
raveCrateRouter.route('/getEvents').post(function(req,res){
    
    var address = req.body.address;
    var selectedDate = req.body.eventDate;
    var searchCriteria = req.body.searchItem;
    console.log('search criteria::::::' + searchCriteria);
    console.log('selectedDate::::::' + selectedDate);
    console.log('address::::::' + JSON.stringify(address));
    var returnEvents = [];
    if(searchCriteria === 'A'){
        returnEvents = events.filter(e => {
             if(e.address.city.toLocaleLowerCase() === address.city.toLocaleLowerCase()){
                return e;
            }}
        );
    }else if(searchCriteria === 'D'){

    }else{
        returnEvents = events;
    }
    res.json(returnEvents);
});


/* get events post request */
raveCrateRouter.route('/saveevent').post(function(req,res){
    
    var event =  req.body.event;
    event.eventId = (events.length)+1;
    console.log('event received while saving event:::::' + JSON.stringify(event));
    events.push(event);
    res.json(event);
});


var freelancers = [
    {firstName:"firstName0", lastName:"lastName0",type:"stylist",description:"description0",hourlyRate:"3.78",city:"LA"},
    {firstName:"firstName1", lastName:"lastName0",type:"stylist",description:"description0",hourlyRate:"3.78",city:"LA"},
    {firstName:"firstName2", lastName:"lastName0",type:"stylist",description:"description0",hourlyRate:"3.78",city:"LA"},
    {firstName:"firstName3", lastName:"lastName0",type:"stylist",description:"description0",hourlyRate:"3.78",city:"LA"},
    {firstName:"firstName4", lastName:"lastName0",type:"stylist",description:"description0",hourlyRate:"3.78",city:"LA"},
    {firstName:"firstName5", lastName:"lastName0",type:"stylist",description:"description0",hourlyRate:"3.78",city:"LA"},
    {firstName:"firstName0", lastName:"lastName0",type:"Waitress",description:"description0",hourlyRate:"3.78",city:"LA"},
    {firstName:"firstName1", lastName:"lastName0",type:"Waitress",description:"description0",hourlyRate:"3.78",city:"LA"},
    {firstName:"firstName2", lastName:"lastName0",type:"Waitress",description:"description0",hourlyRate:"3.78",city:"LA"},
    {firstName:"firstName3", lastName:"lastName0",type:"Musician",description:"description0",hourlyRate:"3.78",city:"LA"},
    {firstName:"firstName4", lastName:"lastName0",type:"Musician",description:"description0",hourlyRate:"3.78",city:"LA"},
    {firstName:"firstName5", lastName:"lastName0",type:"Musician",description:"description0",hourlyRate:"3.78",city:"LA"},
    {firstName:"firstName1", lastName:"lastName0",type:"Dancer",description:"description0",hourlyRate:"3.78",city:"LA"},
    {firstName:"firstName2", lastName:"lastName0",type:"Dancer",description:"description0",hourlyRate:"3.78",city:"LA"},
    {firstName:"firstName3", lastName:"lastName0",type:"Dancer",description:"description0",hourlyRate:"3.78",city:"LA"},
    {firstName:"firstName4", lastName:"lastName0",type:"DJ",description:"description0",hourlyRate:"3.78",city:"LA"},
    {firstName:"firstName5", lastName:"lastName0",type:"DJ",description:"description0",hourlyRate:"3.78",city:"LA"},
    {firstName:"firstName0", lastName:"lastName0",type:"stylist",description:"description0",hourlyRate:"3.78",city:"CHI"},
    {firstName:"firstName1", lastName:"lastName0",type:"stylist",description:"description0",hourlyRate:"3.78",city:"CHI"},
    {firstName:"firstName2", lastName:"lastName0",type:"stylist",description:"description0",hourlyRate:"3.78",city:"CHI"},
    {firstName:"firstName3", lastName:"lastName0",type:"stylist",description:"description0",hourlyRate:"3.78",city:"CHI"},
    {firstName:"firstName4", lastName:"lastName0",type:"Waitress",description:"description0",hourlyRate:"3.78",city:"CHI"},
    {firstName:"firstName5", lastName:"lastName0",type:"Waitress",description:"description0",hourlyRate:"3.78",city:"CHI"},
    {firstName:"firstName0", lastName:"lastName0",type:"Waitress",description:"description0",hourlyRate:"3.78",city:"CHI"},
    {firstName:"firstName1", lastName:"lastName0",type:"Waitress",description:"description0",hourlyRate:"3.78",city:"CHI"},
    {firstName:"firstName2", lastName:"lastName0",type:"Waitress",description:"description0",hourlyRate:"3.78",city:"CHI"},
    {firstName:"firstName3", lastName:"lastName0",type:"Musician",description:"description0",hourlyRate:"3.78",city:"CHI"},
    {firstName:"firstName4", lastName:"lastName0",type:"Musician",description:"description0",hourlyRate:"3.78",city:"CHI"},
    {firstName:"firstName5", lastName:"lastName0",type:"Musician",description:"description0",hourlyRate:"3.78",city:"CHI"},
    {firstName:"firstName1", lastName:"lastName0",type:"Musician",description:"description0",hourlyRate:"3.78",city:"CHI"},
    {firstName:"firstName2", lastName:"lastName0",type:"Dancer",description:"description0",hourlyRate:"3.78",city:"CHI"},
    {firstName:"firstName3", lastName:"lastName0",type:"Dancer",description:"description0",hourlyRate:"3.78",city:"CHI"},
    {firstName:"firstName4", lastName:"lastName0",type:"Dancer",description:"description0",hourlyRate:"3.78",city:"CHI"},
    {firstName:"firstName5", lastName:"lastName0",type:"Dancer",description:"description0",hourlyRate:"3.78",city:"CHI"},
    {firstName:"firstName0", lastName:"lastName0",type:"stylist",description:"description0",hourlyRate:"3.78",city:"LV"},
    {firstName:"firstName1", lastName:"lastName0",type:"Waitress",description:"description0",hourlyRate:"3.78",city:"LV"},
    {firstName:"firstName2", lastName:"lastName0",type:"Musician",description:"description0",hourlyRate:"3.78",city:"LV"},
    {firstName:"firstName3", lastName:"lastName0",type:"Dancer",description:"description0",hourlyRate:"3.78",city:"LV"},

    {firstName:"firstName4", lastName:"lastName0",type:"Waitress",description:"description0",hourlyRate:"3.78",city:"MI"},
    {firstName:"firstName5", lastName:"lastName0",type:"Waitress",description:"description0",hourlyRate:"3.78",city:"MI"},
    {firstName:"firstName0", lastName:"lastName0",type:"Waitress",description:"description0",hourlyRate:"3.78",city:"MI"},
    {firstName:"firstName1", lastName:"lastName0",type:"Waitress",description:"description0",hourlyRate:"3.78",city:"MI"},

    {firstName:"firstName2", lastName:"lastName0",type:"Waitress",description:"description0",hourlyRate:"3.78",city:"SFO"},
    {firstName:"firstName3", lastName:"lastName0",type:"Musician",description:"description0",hourlyRate:"3.78",city:"SFO"},
    {firstName:"firstName4", lastName:"lastName0",type:"Musician",description:"description0",hourlyRate:"3.78",city:"SFO"},
    {firstName:"firstName5", lastName:"lastName0",type:"Musician",description:"description0",hourlyRate:"3.78",city:"SFO"},
    {firstName:"firstName1", lastName:"lastName0",type:"Musician",description:"description0",hourlyRate:"3.78",city:"SFO"},
    {firstName:"firstName2", lastName:"lastName0",type:"Dancer",description:"description0",hourlyRate:"3.78",city:"SFO"},
    {firstName:"firstName3", lastName:"lastName0",type:"Dancer",description:"description0",hourlyRate:"3.78",city:"SFO"},
    {firstName:"firstName4", lastName:"lastName0",type:"Dancer",description:"description0",hourlyRate:"3.78",city:"SFO"},
    {firstName:"firstName5", lastName:"lastName0",type:"Dancer",description:"description0",hourlyRate:"3.78",city:"SFO"}
]


/* get freelancers by city */
raveCrateRouter.route('/freelancerbycity').post(function(req,res) {
    
    var city =  req.body.city;
    console.log('getting freelancers by city:::::' + city);
    var returnFreelancers = freelancers.filter(function(el) {return (el.city.toLocaleLowerCase() === city.toLocaleLowerCase());});
    console.log('freelancers found for the city::::::'+city+':::length::'+returnFreelancers.length)
    res.json(returnFreelancers);
});

/* save freelancer */
raveCrateRouter.route('/savefreelancer').post(function(req,res){
    
    var freelancer =  req.body.freelancer;
    console.log('saving freelancer:::::' + freelancer);
    freelancers.push(freelancer);
    res.json(freelancer);
});


/* get all cities for the state */
raveCrateRouter.route('/getcitiesforstate').post(function(req,res){
    
    var state =  req.body.state;
    console.log('getting cities for the:::::' + state);
    var returnResp = {};
    request('http://api.sba.gov/geodata/city_county_links_for_state_of/'+state.toLocaleLowerCase() +'.json', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            //console.log(body) // Print the google web page.
            returnResp = body;
        }
    })
    res.json(returnResp);
});


/* sending email logic start */

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'appprojectify@gmail.com',
        pass: 'Tester123'
    }
});

// setup email data with unicode symbols
var createMailOptions = function(options) {
    console.log('in create ');
    let toEmail = '';
    if(null != options && undefined != options){
        let toEmail = options.toEmail;
        for(var i=0; i<toEmail.length; i++){
            toEmail += toEmail[i];
        }
        console.log('created to email::::::: '+ toEmail);
    }
   
    return mailOptions;
}

raveCrateRouter.route('/sendemail').post(function(req,res){
    
    var emailOptions =  req.body.emailOptions;
    console.log('email options:::::' + JSON.stringify(emailOptions));
    var module = emailOptions.module;
    if(module == 'contactus'){
         mailOptions = {
            from: 'Ravecrate Support team <appprojectify@gmail.com>', // sender address
            to: emailOptions.fromEmail, // list of receivers
            subject: 'Ravecrate Support team', // Subject line
            html: '<p>Your email has been received. our support team will contact you.</p>' // html body
        };
    }else{
        mailOptions = {
            from: '<appprojectify@gmail.com>', // sender address
            to: emailOptions.toEmail, // list of receivers
            subject: 'Ravecrate Password Asistance', // Subject line
            html: '<h1>Your Ravecrate password has been reset<h1><br><br><p>Please click below link to rest your password</p><br><br><a href="www.ravecrate.com">link to rest password</a>' // html body
        };
    }
    
    console.log('mailOptions created:::::' + JSON.stringify(mailOptions));
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
    
});

// send mail with defined transport object



/* sending email logic end */
app.listen(port, function(err) {
    console.log("running server on from gulp port:::::::" + port);
});


