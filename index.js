let myNote = [];
let input = document.getElementById("input-el");
let noteText = input.value;
let submitButton = document.getElementById("input-btn");

submitButton.addEventListener("click", function () {
  alert(noteText);
});
