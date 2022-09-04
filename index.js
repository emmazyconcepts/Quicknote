let myNote = [];
const input = document.getElementById("input-el");
const submitButton = document.getElementById("input-btn");
const noteList = document.getElementById("note-list");

let noteLocalstorage = JSON.parse(localStorage.getItem("myNote"));
submitButton.addEventListener("click", function () {
  myNote.push(input.value);
  input.value = "";
  localStorage.setItem("myNote", JSON.stringify(myNote));
  saveNote();
  console.log(localStorage.getItem("myNote"));
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
