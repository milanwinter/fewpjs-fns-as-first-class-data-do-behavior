/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time) {
  let arr = time.split(":")
  let a = parseInt(arr[0])
  if(a < 12) {
    return "Good Morning";
  } else if (a> 12 && a < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

function displayMessage(message) {
  let greeting = document.getElementById("greeting")

  greeting.innerText = message
}