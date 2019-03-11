// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {


  app.post("/api/login/manager", passport.authenticate("Manager"), function(req, res) {
    console.log("Manager URL ran")
    
    res.json("/managerportal");
  });

  app.post("/api/login/tenant", passport.authenticate("Tenant"), function(req, res) {
    console.log("Tenant URL ran")
    
    res.json("/tenantportal");
  });

  /////////////////////////////////////////////////////////////////////////////////////

  app.post("/api/manager", passport.authenticate("Manager"), function(req, res) {
    console.log("Manager URL ran")
   
    res.json("/managerportal");
  });

  app.post("/api/tenant", passport.authenticate("Tenant"), function(req, res) {
    console.log("Tenant URL ran")
    
    res.json("/tenantportal");
  });

  /////////////////////////////////////////////////////////////////////////////////////

 

app.post("/api/login", function(req, res) {
  
  if(req.body.role === '1'){

    res.redirect(307, "/api/login/manager");
  }

  if(req.body.role === '2'){

    res.redirect(307, "/api/login/tenant");
  }

  });




/////////////////////////////////////////////////////////////////////////////////////

app.post("/api/role", function(req, res){

  console.log(req.body.role);

  if(req.body.role === "1"){
    res.redirect(307, "/managercreate");
  }

  if(req.body.role === "2"){
    res.redirect(307, "/tenantcreate");
  }
  
});

///////////////////////////////////////////////////////////////////////////////////////////////

app.post("/api/create/manager", function(req, res) {
 
  var accountInfo = {
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
  }

  db.Manager.create(accountInfo).then(function() {
    console.log("It's a manager");
    res.redirect(307, "/api/manager");
  }).catch(function(err) {
    console.log(err);
    res.json(err);
   
  });

});

app.post("/api/create/tenant", function(req, res) {
 
  var accountInfo = {
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
  }

  db.Tenant.create(accountInfo).then(function() {
    console.log("It's a tenant");
    res.redirect(307, "/api/tenant");
  }).catch(function(err) {
    console.log(err);
    res.json(err);
    
  });



});


// app.post("/api/signup", function(req, res) {
 
//   var accountInfo = {
//     email: req.body.email,
//     password: req.body.password,
//     address: req.body.address,
//     role: req.body.role
//   }

//   if(req.body.role === '1'){

//   db.Manager.create(accountInfo).then(function() {
//     console.log("It's a manager");
//     res.redirect(307, "/api/manager");
//   }).catch(function(err) {
//     console.log(err);
//     res.json(err);
   
//   });
// } 

// if (req.body.role === '2') {

//   db.Tenant.create(accountInfo).then(function() {
//     console.log("It's a tenant");
//     res.redirect(307, "/api/tenant");
//   }).catch(function(err) {
//     console.log(err);
//     res.json(err);
    
//   });

// }

// });

/////////////////////////////////////////////////////////////////////////////////////


  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

/////////////////////////////////////////////////////////////////////////////////////

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email, id, and address
      
      res.json({
        email: req.user.email,
        id: req.user.id,
        address: req.user.address
      });
    }
  });

  // app.get("/api/tenant_data", function(req, res) {
  
  //   db.Manager.findOne({
  //     where: {
  //       id: req.params.id
  //     },
  //     include: [db.Post]
  //   }).then(function(dbAuthor) {
  //     res.json(dbAuthor);
  //   });

  // });

  

};


