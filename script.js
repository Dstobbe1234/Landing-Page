// Landing Page by David S.

// Prompt user for data
let name_ = prompt("What is your name?");
let focus_ = prompt("What is your main focus for today?");

// Output Data into the page
document.getElementById("nameSpan").innerHTML = name_;
document.getElementById("focus").innerHTML = focus_;