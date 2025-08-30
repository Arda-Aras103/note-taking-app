class Note {
  constructor(ID, title, content, category, favorited) {
    this.ID = ID;
    this.title = title;
    this.content = content;
    this.category = category;
    this.favorited = favorited;
  }
}

const addBtn = document.querySelector(".add-note-button");

function updateNote() {

}

function searchNote() {

}

function addNote() {
    const newNote = new Note();
}

function renderNotes() {

}

addBtn.addEventListener("click", addNote);