let myNote = [];
var input = document.getElementById("input-el").value;
let submitButton = document.getElementById("input-btn");
let noteList = document.getElementsByid("note-list");

submitButton.addEventListener("click", function () {
  var input = document.getElementById("input-el").value;
  myNote.push(input);
  alert(myNote);
});
