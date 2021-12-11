const winBuzz = document.querySelector(".buzz-sound-win");
const looseBuzz = document.querySelector(".buzz-sound");
var hasComefromStart = false;

const isCursorInWire = (cursorLocation) => {
  //CHECKS IF THE CURSOR HAS LEFT THE WIRE
  if (cursorLocation === "setup" || cursorLocation === "pole-l") {
    looseBuzz.play();
    alert("You Lost!! Better luck next time.");
    hasComefromStart = false;
  }

  //CHECKS IF THE CURSOR HAS REACHED THE END SIGN. IF YES, 'YOU WON' WILL BE ALERTED
  if (cursorLocation === "end-sign" || cursorLocation === "pole-r") {
    winBuzz.play();
    alert("Congratulations!! You Won");
    hasComefromStart = false;
  }
};

document.body.addEventListener("mousemove", (e) => {
  let where = e.target.classList.value;

  //CHECKS IF THE CURSOR IS AT START SIGN. if YES, THE GAME STARTS.
  if (where === "start-sign") {
    hasComefromStart = true;
  }

  //CHECKS IF THE CURSOR CAME FROM START. IF NOT, GAME WON'T BE INITIATED UNLESS IT TOUCHES FROM START SIGN
  if (hasComefromStart) {
    isCursorInWire(where);
  }
});
