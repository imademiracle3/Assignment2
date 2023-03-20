function showError(errorElement, errorMessage){
    document.querySelector("."+errorElement).classList.add("display-error");
    document.querySelector("."+errorElement).innerHTML = errorMessage;
}

function clearError(){
    let errors = document.querySelectorAll(".error");
    for(let error of errors){
        error.classList.remove("display-error");
    }
}




let form = document.forms['sign-up-form'];

form.onsubmit = function(event){

    clearError();





    if(form.email.value ===""){
        showError("email-error", "You have to enter your email");
        return false;


    }

    
    if(form.name.value ===""){
        showError("name-error", "You have to enter a username");
        return false;


    }

    
    if(form.password.value ===""){
        showError("email-error", "You have to enter your password");
        return false;


    }

    document.querySelector(".success").classList.add("display-success");
    document.querySelector(".success").innerHTML = "Congratulation your registration was successful";


    event.preventDefault();
}