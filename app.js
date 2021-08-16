let dateEl = document.querySelector("#date");
let numEl = document.querySelector("#num");
let btn = document.querySelector("button");
let outputDiv = document.querySelector('#output')

function check(bDate, num) {
  let sum = 0;

  for (let val of bDate) {
    if (val !== "-") {
      console.log(val);
      let a = val - "0";
      sum += a;
    }
  }

  
  num = parseInt(num);
  let temp = sum % num;

  if (!temp) 
  return "Hurray, your birthday is lucky!";
  else 
  return "Sorry, your birtday is not lucky.";

}

btn.addEventListener("click", () => {
    
  let ans = check(dateEl.value, numEl.value);
  outputDiv.innerText = ans ;

  dateEl.value = "";
  numEl.value = "";
});
