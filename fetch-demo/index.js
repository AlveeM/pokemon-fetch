// document.addEventListener('DOMContentLoaded', function() {
//   console.log("First");

//   const button = document.getElementById('log-button');
//   button.addEventListener('click', function() {
//     console.log("Second");
//   })

//   console.log("Third");
// })

// console.log("First");

// // setTimeout(callback, timeInMs) 
// setTimeout(function() {
//   console.log("Second");
// }, 0)

// console.log("Third");


const TODO_URL = "https://jsonplaceholder.typicode.com/todos/1";


// console.log("start fetching");

fetch(TODO_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (todo) {
    console.log(todo);
  })

// console.log("end fetching");

// fetch(TODO_URL)
//   .then(res => res.json())
//   .then(data => console.log(data))