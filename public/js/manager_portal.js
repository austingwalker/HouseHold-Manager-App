// $(document).ready(function() {
//     // This file just does a GET request to figure out which user is logged in
//     // and updates the HTML on the page
//     $.get("/api/user_data").then(function(data) {
//       $(".member-name").text(data.email);
//     });
  
//     $("#continue").on("click", function(event) {
//       event.preventDefault();

//       var userName = $(".member-name").text();

//       console.log("userName: " + userName);
  
//       $.get("/api/manager/" + userName, function(data) {
//         console.log(data);
//       });
      
  
//     });
//   });