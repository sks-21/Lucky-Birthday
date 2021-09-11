let dateEl = document.querySelector("#date");
let numEl = document.querySelector("#num");
let checkBtn = document.querySelector("#check");
let clearBtn = document.querySelector("#clear");
let outputDiv = document.querySelector("#output");
let imageDiv = document.querySelector("#div-image");

function check(bDate, num) {
  let sum = 0;

  for (let val of bDate) {
    if (val !== "-") {
      let a = val - "0";
      sum += a;
    }
  }

  num = parseInt(num);
  let temp = sum % num;

  if (!temp) return 1;
  else return 0;
}

function addImage(ans) {
  let el = document.createElement("img");
  el.setAttribute("width", "150px");
  el.setAttribute("height", "150px");

  if (ans) {
    el.setAttribute("src", "images/happy-image.svg");
    el.setAttribute("alt", "happy");
  } else {
    el.setAttribute("src", "images/sad-image.svg");
    el.setAttribute("alt", "sad");
  }

  imageDiv.appendChild(el);
}

checkBtn.addEventListener("click", () => {
  if (imageDiv.children[0]) {
    imageDiv.children[0].remove();
  }

  if (!dateEl.value || !numEl.value) {
    msg = "Please enter correct values !";
  } else {
    let ans = check(dateEl.value, numEl.value);

    if (ans) msg = "Hurray, your birthday is lucky!";
    else msg = "Sorry, your birtday is not lucky.";

    addImage(ans);
  }
  
  outputDiv.innerText = msg;
  dateEl.value = "";
  numEl.value = "";
});

clearBtn.addEventListener("click", () => {
  dateEl.value = "";
  numEl.value = "";
  outputDiv.innerText = " ";
  imageDiv.children[0].remove();
});