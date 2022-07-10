let names, username, email, password, confirmPassword;
let uppercase = 0, lowercase = 0, number = 0, special = 0;

let nam=document.getElementByI("Name");


function details() {
    setTimeout(function () {
        alert('User is succesfully registered')
    }, 5000)
    names = document.getElementById("Name").value;
    if (names.length < 3 || names.length > 30)
        document.getElementById('getName').innerHTML = "*Name must be under 3 to 30 characters "
    else
        setTimeout(function () {
            console.log(names)
        }, 5000)


    
    username = document.getElementById("username").value;
    if (username.length < 3 || username.length > 30)
        document.getElementById('getUsername').innerHTML = "*userName must be under 3 to 30 characters "
    else
        setTimeout(function () {
            console.log(username)
        }, 5000)


    email = document.getElementById("email").value;
    


    
    const validateEmail =String(email).toLowerCase().match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      console.log(validateEmail)
    


    


 password = document.getElementById("password").value;


    for (let index = 0; index < password.length; index++) {
        if (password[index] >= 'A' && password[index] <= 'Z') {
            uppercase = 1;
        }
        if (password[index] >= 'a' && password[index] <= 'z') {
            lowercase = 1;

        }
        if (password[index] >= '0' && password[index] <= '9') {
            number = 1;

        }
        if (password[index] >= '!' && password[index] <= '&' || password[index] == '@') {
            special = 1;

        }
    }
    if (uppercase == 0)
        document.getElementById('getPassword').innerHTML = "*password must contain atleast one uppercase"

    if (lowercase == 0)
        document.getElementById('getPassword').innerHTML = "*password must contain atleast one lowercase"

    if (number == 0)
        document.getElementById('getPassword').innerHTML = "*password must contain atleast one number"

    if (special == 0)
        document.getElementById('getPassword').innerHTML = "*password must contain atleast one special character"
    if (uppercase == 1 && lowercase == 1 && number == 1 && special == 1)
        setTimeout(function () {
            console.log(password)
        }, 5000)


    confirmPassword = document.getElementById("confirmpassword").value;
    if (confirmPassword === password)
        setTimeout(function () {
            console.log(confirmPassword)
        }, 5000)
    else
        document.getElementById('getConfirmpassword').innerHTML = "*confirmpassword does not matched with password"

}


function enable() {
    var checkbox = document.getElementById("check-box")
    var submitbutton = document.getElementById("submit-button")
    if (checkbox.checked)

        submitbutton.removeAttribute("disabled")

    else {
        submitbutton.disabled = "true"
    }
}


