// const greet = (age, callback) => {
//   const name = "Michael";
//   callback(`hi, Michael, you are ${age}`);
// };

// greet(31, sentence => {
//   console.log(sentence);
// });

// fetch("https://api.adviceslip.com/advice")
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     const advice = data.slip.advice;
//     return advice;
//   });
fetch("https://api.adviceslip.com/advice")
.then(response => {
return response.json();
})
.then(data => {
console.log(data.slip.advice);
});
