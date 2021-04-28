// Write your code here!

// We remove the node element here

document.getElementById("main").remove() //no longer has DOM node 'main#main'

// We create a new element here and assign it to a newHeader 

let newHeader = document.createElement("h1") //has a 'newHeader' variable that points to node 'h1#victory'
newHeader.id = "victory" //has a 'newHeader' variable that points to node 'h1#victory'
newHeader.innerHTML = "Amanda is the champion" // has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside