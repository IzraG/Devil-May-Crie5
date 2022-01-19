function validateForm() {
    let name = document.forms["register"]["fullname"].value;
    let pass = document.forms["register"]["password"].value;
    let email = document.forms["register"]["email"].value;
    let terms = document.forms["register"]["terms"].checked;
    
    if (name == "") {
      alert("Name must be filled out");
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
      if (terms == "false") {
        alert("You must accept terms & conditions");
        return false;
      } 
  }