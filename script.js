
let fhobby = document.getElementById("input");

function favoriteHobby() {
let greeting;

switch (fhobby) {
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
}
}

fhobby.addEventListener('submit', (event) => {
    favoriteHobby();
});

