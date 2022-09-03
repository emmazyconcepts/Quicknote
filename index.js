let myNote = ["asss", "assss", "ssss"];
var input = document.getElementById("input-el").value;
let submitButton = document.getElementById("input-btn");
const noteList = document.getElementById("note-list");

submitButton.addEventListener("click", function () {
  var input = document.getElementById("input-el").value;
  myNote.push(input);
  // alert(myNote);
  saveNote();
});

function saveNote() {
  let listItems = "";
  for (let i = 0; i < myNote.length; i++) {
    listItems += "<li>" + myNote[i] + "</li>";
  }
  noteList.innerHTML = listItems;
}
