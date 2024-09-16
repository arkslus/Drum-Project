const firstButton = document.querySelectorAll(".drum");

// loop over all buttons and detect which button was clicked
for (let i = 0; i < firstButton.length; i++) {
  firstButton[i].addEventListener("click", function () {
    let buttons = this.innerHTML;
    makeSound(buttons);
    buttonAnimation(buttons);
  });
}

// Add an event listener to detect which key was pressed or keyboard pressed
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      const audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "a":
      const audio2 = new Audio("sounds/kick-bass.mp3");
      audio2.play();
      break;

    case "s":
      const audio3 = new Audio("sounds/snare.mp3");
      audio3.play();
      break;

    case "d":
      const audio4 = new Audio("sounds/tom-1.mp3");
      audio4.play();
      break;

    case "j":
      const audio5 = new Audio("sounds/tom-2.mp3");
      audio5.play();
      break;

    case "k":
      const audio6 = new Audio("sounds/tom-3.mp3");
      audio6.play();
      break;

    case "l":
      const audio7 = new Audio("sounds/tom-4.mp3");
      audio7.play();
      break;

    default:
      buttons;
  }
}

function buttonAnimation(currentKey) {
  const activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  // Remove the animation after 3s
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}
