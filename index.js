/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

// function greet(str){
//   if(str === 12 ){
//     return "Good Morning";
//   } elsif (str === 12){
//     return "Good afternoon";
//   } elsif (str === )
// };


  

function greet(str) {
  const hour = parseInt(str)

    if (hour < 12) {
      return "Good Morning"
    } else if (hour < 18) {
      return "Good Afternoon"
    } else {
      return "Good Evening"
    }
}

// function greet(str) {
//   let today = new Date()
//   let currentHr = today.getHours()

//   if (currentHr < 12){
//     return "Good Morning"
//   } else if (currentHr < 18) {
//     return "Good Afternoon"
//   } else {
//     return "Good Evening"
//   }
// }


// function displayMessage(str) {
//   let fieldElement = document.getElementById("greeting");
//   if(fieldElement){
//     fieldElement.innerHTML = str
//   }
// }

function displayMessage(str) {
 document.getElementById("greeting").innerText = str;
}