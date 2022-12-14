let myNote = [];
const input = document.getElementById("input-el");
const submitButton = document.getElementById("input-btn");
const noteList = document.getElementById("note-list");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

let noteLocalstorage = JSON.parse(localStorage.getItem("myNote"));
if (noteLocalstorage) {
  myNote = noteLocalstorage;
  render(myNote);
}

tabBtn.addEventListener("click", function () {
  let querying = browser.tabs.query(queryObj);

  chrome.tabs.querying({ active: true, currentWindow: true }, function (tabs) {
    console.log(tabs[0].url);
    myNote.push(tabs[0].url);
    localStorage.setItem("myNote", JSON.stringify(myNote));
    render(myNote);
  });
});

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myNote = [];
  render(myNote);
});
submitButton.addEventListener("click", function () {
  myNote.push(input.value);
  input.value = "";
  localStorage.setItem("myNote", JSON.stringify(myNote));
  render(myNote);
  console.log(localStorage.getItem("myNote"));
});

function render(Notes) {
  let listItems = "";
  for (let i = 0; i < Notes.length; i++) {
    listItems += `<li>
    <a target="_blank" href="${Notes[i]}">
    ${Notes[i]}
    </a>
    </li>`;
  }
  noteList.innerHTML = listItems;
}
