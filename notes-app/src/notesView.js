class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector("#main-container");

    document.querySelector("#add-note-button").addEventListener("click", () => {
      const newNote = document.querySelector("#add-note-input").value;
      this.addNewNote(newNote);
    });
  }

  displayNotes() {
    // remove all instances of note class
    document.querySelectorAll(".note").forEach((note) => note.remove());

    const notes = this.model.getNotes();

    // For each note, create and append a new element on the main container
    notes.forEach((note) => {
      const newNote = document.createElement("div");
      newNote.textContent = note;
      newNote.className = "note";
      this.mainContainerEl.append(newNote); // make sure to add div container in html file
    });
  }

  addNewNote(newNote) {
    document.querySelector("#add-note-input").value = "";
    this.model.addNote(newNote);
    this.displayNotes();
    
  }
}

module.exports = NotesView;
