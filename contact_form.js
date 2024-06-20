function clearerrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors){
        item.innerHTML="";
    }
}
function seterror(id, error){
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}
function validateForm(){
    var returnVal = true;
    clearerrors();
    let name = document.forms['ContactForm']["fname"].value;
    if(name.length<5){
        seterror("iname", "*Length of name is too short");
        returnVal = false;
    }
    let email = document.forms['ContactForm']["femail"].value;
    if(email.length>80){
        seterror("iemail", "*Length of email is too long");
        returnVal = false;
    }
    let phone = document.forms['ContactForm']["fphone"].value;
    if(phone.length<10 || phone.length>10){
        seterror("iphone", "*Phone no. not valid");
        returnVal = false;
    }
    return returnVal;
}