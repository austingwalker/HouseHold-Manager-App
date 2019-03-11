$(document).ready(function () {

  var username = "";
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {

    username = data.email

    var infoBox = $("<div>");


    var email = $("<div>" + "Email: " + data.email + "</div>");
    var address = $("<div>" + "Address: " + data.address + "</div>");


    infoBox.append(email);
    infoBox.append(address);

    $(".manager-name").append(infoBox);

    // getTenantData(username);
  });

  // function getTenantData(name) {

  //   $.get("/api/tenant_data" + name).then(function (data) {
  //     console.log(JSON.stringify(data, null, 2));

  //   });

  // }

});
