let password
let login =window.prompt("Login");
if (login == null|| login == ""){
    alert("Cancelled");
}else if (login == "Admin"){
    password= window.prompt("Please enter the Password");
    if (password == null  || password == ""){
        alert("Cancelled");
    }else if (password == "TheMaster"){
        alert("Welcome!");
    }else {
        alert ("Wrong Password");
    }
}else{
    alert("I don't know you")
}