$(document).ready(function() {

    
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {

        var infoBox = $("<div>");

        
        var email = $("<div>" + "Email: " + data.email + "</div>");
        var address = $("<div>" + "Address: " + data.address + "</div>");

        
        infoBox.append(email);
        infoBox.append(address);

      $(".tenant-name").append(infoBox);
     
    });


  
      
  
    });