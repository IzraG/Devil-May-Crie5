function validateForm() {
    let name = document.getElementById("fullname").value;
    let pass = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let terms = document.getElementById("terms").checked;
   
    if (name.length <5) {
      alert("Name length must be more than 4");
      return false;
    }
    if (pass.length <9){
        alert("Password length must be more than 8");
        return false;
    }
    else if(pass.length>25){
        alert("Password length must be less than 25");
        return false;
    }
    if (email == "") {
        alert("Email must be filled out");
        return false;
      } 
    if (terms == false) {
        alert("You must accept terms & conditions");
        return false;
    } 
  }

