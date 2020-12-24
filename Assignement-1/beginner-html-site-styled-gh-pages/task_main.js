// 1. Create the button
var button = document.getElementById("myButton");

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
    var name = window.prompt("Enter your name: ");
    var header = document.getElementById("myHeader");
    header.innerHTML = "Welcome, "+ name + "!";
}
);