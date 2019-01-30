$(document).ready(function() {
    // Getting references to our form and input
    var selectRoleForm = $("form.selectRole");
    var roleInput = $("#role-input");


    selectRoleForm.on("submit", function(event) {
          event.preventDefault();
          
          var roleValue = roleInput.val().trim();

          if(roleValue === "1"){
             window.location.replace("/managercreate");

          }

          if(roleValue === "2"){
            window.location.replace("/tenantcreate");

         }

          roleInput.val("");

        });
      });
          
     
  
  