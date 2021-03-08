// var text=document.getElementById("paragraph").innerHTML;

// document.getElementById("paragraph").innerHTML=text+" and i am awesome";

// var btn=document.getElementById("submitbtn");

// btn.addEventListener("click", function(){
//     alert("button was clicked")
// })

let container = document.getElementById('container');
// container.innerHTML = '<h1>Hello World!</h1>';

var heading = document.createElement("h1");
heading.innerHTML = ("hello world");

container.appendChild(heading);

function setHeading() {
    var output = document.createElement("h1");
    output.innerHTML = document.getElementById("message").value;
    document.getElementById("output").appendChild(output);
}