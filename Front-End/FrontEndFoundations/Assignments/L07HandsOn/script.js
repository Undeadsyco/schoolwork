function regexChecker(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;

    let nameRegex = /^[A-Z][a-z]+$/;

    if(firstName.match(nameRegex) && lastName.match(nameRegex)){
        alert("Yay! Your inputs were all correct!");
    }else{
        alert("Oh no! Thats an invalid format!");
    }
}