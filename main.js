let list = ["BlockChain Developer", "SDE", "EnterPrenuer"];
let typeWriter = document.getElementById("dynamic-content");

let letterIndex = 0;
let phraseIndex = 0;

function printLetter(list) {
  if (letterIndex == list.length) {
    clearLetter();
  } else if (letterIndex < list.length) {
    typeWriter.textContent += list.charAt(letterIndex);
    letterIndex += 1;
    setTimeout(function () {
      printLetter(list);
    }, 300);
  }
}

function clearLetter() {
  if (letterIndex == -1) {
    phraseIndex = (phraseIndex + 1) % list.length;
    letterIndex = 0;
    printLetter(list[phraseIndex]);
  } else if (letterIndex > -1) {
    let updated = "";
    for (let index = 0; index < letterIndex; index++) {
      updated += list[phraseIndex].charAt(index);
    }
    typeWriter.textContent = updated;
    letterIndex -= 1;
    setTimeout(clearLetter, 100);
  }
}

printLetter(list[phraseIndex]);
