let userInput = prompt("What month is it? (Enter 1-12): " );
let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

if (userInput <= 12){
    userInput -= 1;

    console.log (month[userInput]);
}
else {
    
    alert("ERROR! Enter 1-12")
}