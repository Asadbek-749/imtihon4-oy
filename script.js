// 1-masala
function calculate(a, b, ishora) {
  if (ishora == "+") {
    return a + b;
  } else if (ishora == "-") {
    return a - b;
  } else if (ishora == "/") {
    return a / b;
  } else if (ishora == "*") {
    return a * b;
  } else if (ishora == "%") {
    return a % b;
  }
}

console.log(calculate(5, 2, "*"));

// 2-masala
let id = null;
function salomBer(name) {
  id = setInterval(() => {
    console.log("Salom", name);
  }, 1000);
}
// salomBer("Asadbek");
// clearInterval(id)

// 3-masala
let text = ["olma", "anor", "shovullashi", "behi"];

function textLeinght(arr) {
  arr.forEach((e) => {
    console.log(e.length);
  });
}
textLeinght(text);
