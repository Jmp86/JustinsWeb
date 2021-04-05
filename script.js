
let fun = document.getElementById("input");

function favoriteHobby(hobby) {
let greeting;
console.log(fun);
switch (fun) {
  case "Golf":
    greeting = "Golf is hard!";
    break;
  case "Video games":
    greeting = "Wish I had more time to play!";
    break;
  case "Going to the beach":
    greeting = "I need to work on my tan!";
    break;
  case "Exercising":
    greeting = "I need to work out more!";
    break;
  case "Coding":
        greeting = "I can't wait to learn more!";
        break;
  default:
    greeting = "I should try that!";

    alert (greeting);
    return greeting;
}
}


document.addEventListener("submit", function () {
  favoriteHobby();
});

let float = document.getElementById('hobbies');

document.addEventListener("click", function (event) {
    float.style.color = "blue";

  });
  document.addEventListener("mouseout", function (event) {
    float.style.color = "#000";

  });
  

