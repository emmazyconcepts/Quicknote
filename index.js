let myNote = [];
const input = document.getElementById("input-el");
const submitButton = document.getElementById("input-btn");
const noteList = document.getElementById("note-list");

submitButton.addEventListener("click", function () {
  myNote.push(input.value);
  input.value = "";
  saveNote();
});

function saveNote() {
  let listItems = "";
  for (let i = 0; i < myNote.length; i++) {
    listItems += `<li>
    <a target="_blank" href="${myNote[i]}">
    ${myNote[i]}
    </a>
    </li>`;
  }
  noteList.innerHTML = listItems;
}
