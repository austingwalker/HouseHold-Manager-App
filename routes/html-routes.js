var db = require("../models");

// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
   
    res.sendFile(path.join(__dirname, "../public/selectrole.html"));
  });

  //////////////////////////////////////////////////////////////////////

  app.get("/managercreate", function(req, res) {


    res.sendFile(path.join(__dirname, "../public/managercreate.html"));
  });

  app.get("/tenantcreate", function(req, res) {
 
    res.sendFile(path.join(__dirname, "../public/tenantcreate.html"));
  });


   //////////////////////////////////////////////////////////////////////

  app.get("/login", function(req, res) {
   
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

   //////////////////////////////////////////////////////////////////////

  app.get("/managerportal", isAuthenticated, function(req, res) {
    var username = req.user.email;
    var userId = req.user.id;
  
    db.Manager.findOne({
      where: {
        email: username
      }
    }).then(function(data) {
      if (data == null) {
        return res.send(`Username ${username} not found`);
      }
      console.log(JSON.stringify(data, null, 2))
      var id = data.id;
      res.render("manager", { data: data, id: id });
    });
  });

  app.get("/tenantportal", isAuthenticated, function(req, res) {
    var username = req.user.email;
    var userId = req.user.id;
  
    db.Tenant.findOne({
      where: {
        email: username
      }
    }).then(function(data) {
      if (data == null) {
        return res.send(`Username ${username} not found`);
      }
      console.log(JSON.stringify(data, null, 2));
      var id = data.id;
      res.render("tenant", { data: data, id: id});
    });
  });

   //////////////////////////////////////////////////////////////////////


};


